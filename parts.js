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
      body: `Chúc em hạnh phúc.`
    }

     {
        id: "p2",
        title: "Phần 2"
        date: "2026/../.."
        body: `Xin chào tất cả mọi người. Suy nghĩ nhiều quá nên mình quyết định viết ra tất cả những gì đã xảy ra trong mùa hè vừa rồi, coi như một cách để giải tỏa, cũng như để tự nhìn lại bản thân. Hiện tại mình chỉ còn một học kỳ cuối ở H để hoàn thành chương trình. Mình cũng đã có một công việc full-time đúng với định hướng của mình và hiện tại khá hài lòng với nó. Nhưng để có được ngày hôm nay, có lẽ mình đã phải trải qua khoảng thời gian khó khăn nhất trong cuộc đời.   Trước đây mình từng yêu xa một người, cô ấy ở cách Hà Nội khoảng 90km. Khoảng tháng 11–12, khi mình đang tham gia Viettel Cyber Security Passport 2025, mối quan hệ của hai đứa thực sự đi đến giai đoạn tệ nhất. Trước đó bọn mình đã cãi nhau và làm lành rất nhiều lần, nên đến lúc ấy cả hai cũng đã khá mệt mỏi. Thật ra bây giờ mình cũng không còn nhớ chính xác lý do hôm đó cãi nhau là gì, chỉ nhớ rằng nó bắt đầu từ một chuyện rất nhỏ.   Thời điểm đó mình vừa học vừa làm, trên đầu có rất nhiều task phải xử lý với các sếp, hôm sau lại có bài thi giữa kỳ. Tối hôm ấy cô ấy giận vì một chuyện mà đến giờ mình cũng không nhớ rõ. Mình đã cố giải thích, xin lỗi và nói: “Em bớt giận, anh đang rất mệt hôm nay. Anh xin lỗi em, bình tĩnh lại nhé.” Nhưng cô ấy vẫn tiếp tục nói và trách mình suốt hàng chục phút. Mình lúc đó thực sự đã quá mệt. Trong đầu mình lúc đó chỉ có một suy nghĩ: ngày mai mình phải đi thi, tối nay vẫn còn rất nhiều task chưa làm xong, mình đã xin lỗi tử tế rồi, nhưng tại sao mình vẫn phải chịu những lời đó từ người mình yêu, chỉ vì những điều thực sự cỏn con, tự tạo ra, tự nghĩ ra?   `
     }
  ]
};
