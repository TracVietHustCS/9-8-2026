/* ===== NỘI DUNG TRUYỆN =====
   Thêm một phần mới: thêm một object vào cuối mảng parts.
   - id:    chữ thường, số, gạch ngang (ví dụ "p2")
   - title: tên phần
   - date:  ngày đăng, dạng YYYY-MM-DD
   - draft: true nếu còn là bản nháp (bỏ dòng này khi xong)
   - body:  nội dung, trong dấu huyền ` `
     Cách viết: các đoạn cách nhau một dòng trống.
       *chữ nghiêng*  **chữ đậm**
       ## Tiêu đề nhỏ
       > đoạn trích dẫn
       ***   (một dòng riêng) = ngắt cảnh
*/
const STORY = {
  title: "9/8/2026",
  tagline: "Truyện dài, cập nhật từng phần.",
  parts: [
    {
      id: "p1",
      title: "Phần 1",
      date: "2026-10-30",
      draft: true,
      body: `Phần đầu tiên đang được viết.

Khi sẵn sàng, nó sẽ xuất hiện ở đây. Trang này được cập nhật từng phần, quay lại sau nhé.`
    }
  ]
};
