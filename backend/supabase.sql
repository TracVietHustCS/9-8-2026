-- Lượt xem và bình luận cho 9/8/2026
-- Cách dùng: Supabase Dashboard -> SQL Editor -> New query -> dán toàn bộ tệp này -> Run.
-- Chạy lại nhiều lần vẫn an toàn (idempotent).

-- ===== 1) Bảng =====
create table if not exists public.views (
  part_id text primary key check (part_id ~ '^[a-z0-9-]{1,40}$'),
  n       bigint not null default 0
);

create table if not exists public.comments (
  id         bigint generated always as identity primary key,
  part_id    text not null check (part_id ~ '^[a-z0-9-]{1,40}$'),
  name       text not null check (char_length(btrim(name)) between 1 and 40),
  body       text not null check (char_length(btrim(body)) between 1 and 1000),
  created_at timestamptz not null default now(),
  hidden     boolean not null default false     -- đặt true để ẩn một bình luận mà không xoá
);
create index if not exists comments_part_created on public.comments (part_id, created_at);

-- ===== 2) Bảo mật theo dòng (RLS): người lạ chỉ được đọc và thêm bình luận, không sửa, không xoá =====
alter table public.views    enable row level security;
alter table public.comments enable row level security;

drop policy if exists views_read on public.views;
create policy views_read on public.views for select to anon using (true);

drop policy if exists comments_read on public.comments;
create policy comments_read on public.comments for select to anon using (not hidden);

drop policy if exists comments_insert on public.comments;
create policy comments_insert on public.comments for insert to anon with check (hidden = false);

grant usage on schema public to anon;
grant select on public.views to anon;
grant select, insert on public.comments to anon;

-- ===== 3) Chống tràn bình luận: tối đa 10 bình luận mỗi phút trên toàn trang; tự cắt khoảng trắng thừa =====
create or replace function public.comments_flood_guard() returns trigger
language plpgsql as $$
begin
  if (select count(*) from public.comments where created_at > now() - interval '1 minute') >= 10 then
    raise exception 'Qua nhieu binh luan, thu lai sau';
  end if;
  new.name := btrim(new.name);
  new.body := btrim(new.body);
  return new;
end $$;

drop trigger if exists comments_flood on public.comments;
create trigger comments_flood before insert on public.comments
  for each row execute function public.comments_flood_guard();

-- ===== 4) Tăng lượt xem (người lạ không được tự sửa bảng views, chỉ gọi hàm này) =====
create or replace function public.increment_view(p_part text) returns bigint
language plpgsql security definer set search_path = public as $$
declare v bigint;
begin
  if p_part is null or p_part !~ '^[a-z0-9-]{1,40}$' then
    raise exception 'bad part';
  end if;
  insert into public.views (part_id, n) values (p_part, 1)
  on conflict (part_id) do update set n = public.views.n + 1
  returning n into v;
  return v;
end $$;

revoke all on function public.increment_view(text) from public;
grant execute on function public.increment_view(text) to anon;
