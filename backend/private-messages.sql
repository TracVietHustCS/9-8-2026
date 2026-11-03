-- Tin nhắn riêng (chỉ chủ trang đọc được)
-- Cách dùng: Supabase Dashboard -> SQL Editor -> New query -> dán toàn bộ tệp này -> Run.
-- Chạy lại nhiều lần vẫn an toàn. Chạy xong, ô "Nhắn riêng cho mình" tự hiện trên trang (sau khoảng một phút nếu trình duyệt còn bộ nhớ đệm).

create table if not exists public.private_messages (
  id         bigint generated always as identity primary key,
  part_id    text check (part_id is null or part_id ~ '^[a-z0-9-]{1,40}$'),
  name       text check (name is null or char_length(btrim(name)) between 1 and 40),
  contact    text check (contact is null or char_length(btrim(contact)) between 1 and 120),
  body       text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  read       boolean not null default false      -- bạn tự đánh dấu true sau khi đọc, trong Table Editor
);
create index if not exists private_messages_created on public.private_messages (created_at desc);

-- Bảo mật: người lạ CHỈ được thêm, không đọc, không sửa, không xoá (không có policy select/update/delete và không cấp quyền select)
alter table public.private_messages enable row level security;
drop policy if exists pm_insert on public.private_messages;
create policy pm_insert on public.private_messages for insert to anon with check (read = false);
grant usage on schema public to anon;
grant insert on public.private_messages to anon;
revoke select, update, delete on public.private_messages from anon;

-- Chống tràn: tối đa 20 tin mỗi phút trên cả trang; tự cắt khoảng trắng thừa
create or replace function public.pm_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.private_messages where created_at > now() - interval '1 minute') >= 20 then
    raise exception 'Qua nhieu tin nhan, thu lai sau';
  end if;
  new.body := btrim(new.body);
  new.name := nullif(btrim(coalesce(new.name, '')), '');
  new.contact := nullif(btrim(coalesce(new.contact, '')), '');
  return new;
end $$;
drop trigger if exists pm_guard_trg on public.private_messages;
create trigger pm_guard_trg before insert on public.private_messages
  for each row execute function public.pm_guard();

-- Hàm "đã bật hộp thư": trang gọi hàm này để biết có nên hiện ô nhắn riêng hay không
create or replace function public.inbox_ready() returns boolean
language sql security definer set search_path = public as $$ select true $$;
revoke all on function public.inbox_ready() from public;
grant execute on function public.inbox_ready() to anon;
