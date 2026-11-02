/* BẬT BÌNH LUẬN: chọn MỘT trong hai cách.

   Cách 1 (đơn giản nhất, chỉ bình luận): điền tên site Disqus, ví dụ disqus: "ten-site-cua-ban"
     Tạo ở disqus.com (Get Started, I want to install Disqus on my site), copy phần "shortname".
     Muốn người đọc bình luận không cần tài khoản: trong Disqus, Settings, Community, bật "Allow guests to comment".

   Cách 2 (lượt xem và bình luận ẩn danh, tự quản lý dữ liệu): điền url và key của Supabase, xem backend/README.md.

   Để trống cả hai = bình luận và lượt xem tự ẩn, trang vẫn đọc bình thường. */
window.STORY_BACKEND = {
  disqus: "",   // Cách 1, ví dụ: "ten-site-cua-ban"
  url: "",      // Cách 2, ví dụ: "https://abcdxyz.supabase.co"
  key: ""       // Cách 2: khoá công khai (anon hoặc publishable), KHÔNG dùng service_role
};
