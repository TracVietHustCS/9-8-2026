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
    },
    {
      id: "p2",
      title: "Phần 2",
      date: "2026-11-01",
      body: `Xin chào tất cả mọi người. Suy nghĩ nhiều quá nên mình quyết định viết ra tất cả những gì đã xảy ra trong mùa hè vừa rồi, coi như một cách để giải tỏa, cũng như để tự nhìn lại bản thân. Hiện tại mình chỉ còn một học kỳ cuối ở H để hoàn thành chương trình. Mình cũng đã có một công việc full-time đúng với định hướng của mình và hiện tại khá hài lòng với nó. Nhưng để có được ngày hôm nay, có lẽ mình đã phải trải qua khoảng thời gian khó khăn nhất trong cuộc đời.

Trước đây mình từng yêu xa một người, cô ấy ở cách Hà Nội khoảng 90km. Khoảng tháng 11–12, khi mình đang tham gia Viettel Cyber Security Passport 2025, mối quan hệ của hai đứa thực sự đi đến giai đoạn tệ nhất. Trước đó bọn mình đã cãi nhau và làm lành rất nhiều lần, nên đến lúc ấy cả hai cũng đã khá mệt mỏi. Thật ra bây giờ mình cũng không còn nhớ chính xác lý do hôm đó cãi nhau là gì, chỉ nhớ rằng nó bắt đầu từ một chuyện rất nhỏ.

Thời điểm đó mình vừa học vừa làm, trên đầu có rất nhiều task phải xử lý với các sếp, hôm sau lại có bài thi giữa kỳ. Tối hôm ấy cô ấy giận vì một chuyện mà đến giờ mình cũng không nhớ rõ. Mình đã cố giải thích, xin lỗi và nói: “Em bớt giận, anh đang rất mệt hôm nay. Anh xin lỗi em, bình tĩnh lại nhé.” Nhưng cô ấy vẫn tiếp tục nói và trách mình suốt hàng chục phút. Mình lúc đó thực sự đã quá mệt. Trong đầu mình lúc đó chỉ có một suy nghĩ: ngày mai mình phải đi thi, tối nay vẫn còn rất nhiều task chưa làm xong, mình đã xin lỗi tử tế rồi, nhưng tại sao mình vẫn phải chịu những lời đó từ người mình yêu, chỉ vì những điều thực sự cỏn con, tự tạo ra, tự nghĩ ra?`
    },
    {
      id: "p3",
      title: "Phần 3",
      date: "2026-11-01",
      body: `Đêm đó mình làm việc trong trạng thái rất mệt, thiếu ngủ để sáng hôm sau đi thi. Nhưng đến trưa, điều cô ấy quan tâm lại là tại sao đêm qua mình lại tắt. Mình đã quá mệt mỏi, và khi cô ấy tiếp tục lôi chuyện chia tay, chuyện dừng lại ra nói, mình nghĩ bản thân đã chạm đến giới hạn. Khi một mối quan hệ chỉ còn mang lại cho mình stress nhiều hơn là hạnh phúc, đến một lúc nào đó mình sẽ không còn đủ sức để cố gắng nữa.

Vậy là cô ấy rời đi. Còn mình thì suy sụp, nhưng vẫn phải cố sống tiếp. Đó cũng là thời điểm mình đang thi giữa kỳ ở trường, đồng thời nhảy sang một công ty mới. Mình còn tham gia Viettel Cyber Security Passport 2025, nhưng với một tâm lý như vậy thì thực sự mình không thể học hay tập trung làm được bất cứ thứ gì. Mình gần như có thể khóc bất cứ lúc nào. Có những lúc mình đang làm bài thi IQ của Viettel mà nước mắt cứ trực chờ rơi xuống, mình không thể tập trung vào những câu hỏi trước mặt vì trong đầu chỉ toàn là chuyện cũ.

Đương nhiên mình không đổ lỗi cho cô ấy vì đã rời đi vào thời điểm đó. Chỉ là lúc ấy, đầu óc mình thực sự không còn khả năng chứa thêm bất kỳ cảm xúc nào nữa. Một mối quan hệ vừa kết thúc, công việc mới, những bài thi, những task phải xử lý và rất nhiều kỳ vọng, tất cả đến cùng một lúc. Mình gần như không còn sức để chống lại bất cứ thứ gì.

Sau đó, không hiểu vì lý do gì, cô ấy lại quay trở về với mình. Có lẽ cô ấy cũng không chịu được việc hai đứa kết thúc như vậy. Nhưng lúc đó mình đã trải qua tất cả một mình, những ngày rất nặng nề, những đêm rất mệt mỏi, những lúc chỉ có mình với nước mắt và hàng đống suy nghĩ trong đầu. Vì vậy khi cô ấy quay lại, mình lại không còn muốn quay lại như trước nữa.

Mình nghĩ có lẽ đó là lúc mình bắt đầu sai. Mình không muốn quay lại, nhưng cũng không đủ dứt khoát để bước ra hoàn toàn. Hai đứa không còn thực sự là người yêu, nhưng tình cảm vẫn còn. Không quay lại, cũng không hoàn toàn rời đi, cứ thế dây dưa với nhau.

Nhìn lại thì có lẽ nếu lúc đó mình đủ dứt khoát, rất nhiều chuyện về sau đã không xảy ra. Nhưng con người đôi khi rất kỳ lạ, biết một thứ không còn phù hợp với mình nhưng vẫn không đủ can đảm để buông nó xuống. Mình từng nghĩ rằng nếu cô ấy quay lại vào lúc mình còn đang ở trong những ngày tồi tệ nhất, có lẽ mình sẽ lại muốn ở bên cô ấy. Nhưng thực tế không phải vậy.

Có một cảm giác mà đến tận bây giờ mình vẫn nhớ: khi mình đã một mình đi dưới mưa đến lúc trời nắng trở lại, mình cũng chẳng còn muốn cùng ai bước đi nữa. Mình đã từng rất cần một người ở bên, nhưng đến khi người đó quay lại thì mình lại không còn biết phải trở về như thế nào.

Và đáng lẽ mọi chuyện nên kết thúc ở đó. Hai đứa nên dừng lại, mỗi người bước tiếp cuộc sống của mình. Nhưng mình đã không làm được. Vẫn còn tình cảm, vẫn quan tâm, vẫn ở đó, nhưng lại không thể trở thành người yêu của nhau một lần nữa. Lúc ấy mình không biết rằng chính sự không dứt khoát này sẽ trở thành thứ khiến mình đau nhất về sau. Và có lẽ, những chuyện thực sự khó khăn của mùa hè đó... cũng bắt đầu từ đây.`
    }
  ]
};
