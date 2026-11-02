# Bật lượt xem và bình luận

## Cách đơn giản nhất: Disqus (chỉ bình luận, không có lượt xem)

1. Vào https://disqus.com, đăng ký, chọn "I want to install Disqus on my site" và đặt tên site.
2. Copy phần **shortname** của site, dán vào `config.js` ở dòng `disqus: ""`, commit.
3. Để người đọc bình luận không cần tài khoản: trong Disqus, Settings, Community, bật "Allow guests to comment".

Lưu ý: Disqus là dịch vụ bên thứ ba, bản miễn phí có quảng cáo và theo dõi người đọc. Nếu bạn không muốn điều đó, dùng cách Supabase bên dưới.

## Cách đầy đủ: Supabase (lượt xem và bình luận ẩn danh, dữ liệu của bạn)

GitHub Pages chỉ phục vụ tệp tĩnh, nên lượt xem và bình luận cần một nơi lưu dữ liệu. Trang dùng **Supabase** (gói miễn phí đủ cho một trang truyện), gọi trực tiếp từ trình duyệt, không cần viết máy chủ. Người đọc **không cần đăng nhập**: chỉ điền tên (hoặc để trống, sẽ hiện "Ẩn danh").

Khi `config.js` còn trống, hai tính năng này tự ẩn và trang vẫn đọc bình thường.

## Cài đặt (khoảng 5 phút)

1. Vào https://supabase.com, đăng ký và tạo một project mới (gói Free).
2. Mở **SQL Editor**, tạo query mới, dán toàn bộ nội dung `backend/supabase.sql` và bấm **Run**. Tệp này tạo hai bảng (`views`, `comments`), bật bảo mật theo dòng và hàm tăng lượt xem. Chạy lại nhiều lần vẫn an toàn.
3. Vào **Project Settings, API** (hoặc API Keys) và lấy hai giá trị:
   - **Project URL**, dạng `https://xxxx.supabase.co`.
   - Khoá **công khai**: `anon` (JWT bắt đầu bằng `eyJ`) hoặc `publishable` (bắt đầu bằng `sb_publishable_`). **Không bao giờ dùng khoá `service_role` hay `secret`** trong `config.js`.
4. Mở `config.js`, điền hai giá trị, commit và push. Sau khoảng một phút trang tự bật lượt xem và bình luận.

## Cách hoạt động

- **Lượt xem**: mỗi lần mở một phần, trang gọi hàm `increment_view`. Mỗi trình duyệt chỉ được tính một lượt cho mỗi phần trong 12 giờ (lưu bằng `localStorage`). Mục lục hiện lượt xem từng phần và tổng.
- **Bình luận**: bảng `comments`. Người lạ chỉ được đọc và thêm; không sửa, không xoá được. Nội dung luôn hiển thị dưới dạng chữ thuần, không bao giờ được chèn HTML.
- **Chống spam cơ bản**: ô bẫy bot ẩn, giãn cách 20 giây giữa hai lần gửi ở trình duyệt, giới hạn độ dài (tên 40, nội dung 1000 ký tự), và ở phía cơ sở dữ liệu tối đa 10 bình luận mỗi phút trên cả trang.

## Quản lý bình luận

Vào **Table Editor, comments**: để ẩn một bình luận, đổi `hidden` thành `true` (vẫn giữ trong cơ sở dữ liệu); để xoá, xoá dòng đó. Bảng `views` có thể sửa số trực tiếp.

## Giới hạn cần biết

- Ai cũng có thể gọi hàm tăng lượt xem bằng cách gửi yêu cầu trực tiếp, nên con số không chống được người cố tình làm giả. Với một trang truyện, mức này thường chấp nhận được.
- Chống spam ở đây là cơ bản. Nếu bị spam nhiều, thêm CAPTCHA (ví dụ Cloudflare Turnstile) hoặc chuyển sang duyệt trước khi hiển thị (đổi mặc định `hidden` thành `true` và tự duyệt trong Table Editor).
- Supabase ghi nhật ký yêu cầu ở phía họ (có thể gồm địa chỉ IP); bảng của trang này không lưu IP. Nếu có người đọc ở khu vực có quy định riêng về dữ liệu, hãy xem lại chính sách của bạn.
- Gói Free của Supabase có thể tạm dừng dự án nếu không có hoạt động trong thời gian dài; vào bảng điều khiển để bật lại.
