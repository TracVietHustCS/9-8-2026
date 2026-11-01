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
  tagline: "Tuyệt Tình Truyện",
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
    },
    {
      id: "p4",
      title: "Phần 4",
      date: "2026-11-01",
      body: `Trong khoảng thời gian đó, mình thực sự rất giận cô ấy. Nhưng dù giận đến đâu, mình vẫn không nỡ buông tay. Hai đứa lúc ấy giống như người yêu, nhưng lại chẳng còn chính thức là người yêu của nhau. Vẫn quan tâm, vẫn gọi điện, nhắn tin cho nhau, vẫn hỏi han nhau mỗi ngày. Mình cũng đã nhiều lần lên trọ cô ấy chơi, rồi cô ấy cũng xuống Hà Nội để đi chơi với mình. Hai đứa đi ăn đồ Âu, đồ Nhật, đi chơi với nhau đủ thứ. Những lúc ở cạnh nhau thực sự vẫn rất vui, đến mức nhiều khi mình lại tự hỏi: nếu vẫn còn vui như vậy thì tại sao hai đứa lại không thể quay lại với nhau?

Thời gian đó mình vẫn chỉ là một thằng lông bông, chưa kiếm ra tiền, cũng chưa thực sự có cảm giác mình đã đủ trưởng thành để lo cho một ai đó. Có một lần trong một cuộc điện thoại, cô ấy nói rằng cô ấy sẽ đợi mình. Đợi đến khi mình đủ lớn, đủ chững chạc, có thể lo được cho cô ấy và có thể thực sự đưa cô ấy về gặp bố mẹ.

Đó cũng là một áp lực rất lớn đối với mình. Mẹ mình không phản đối chuyện hai đứa đến với nhau nhưng có một lý do rất khó nói mà đáng nhẽ ra khi biết được mọi chuyện nên kết thúc từ khi đó, nhưng mẹ từng hỏi mình rằng liệu mình có thực sự yêu cô ấy rất nhiều không, có thực sự nghiêm túc không, và sau này có thể lo được cho mọi chuyện có khả năng xảy ra khi đi với cô ấy không. Chỉ khi mình chứng minh được những điều đó thì mẹ mới cảm thấy yên tâm. Vì vậy mình luôn nghĩ rằng bản thân cần phải cố gắng hơn nữa, phải trưởng thành hơn nữa.

Rồi thời gian cứ thế trôi. Đến khoảng tháng 7, tháng 8, cũng đã gần một tháng kể từ lần cuối hai đứa đi chơi với nhau ở Hà Nội. Lúc đó ở trường cô ấy có một chương trình mà mình hiểu đơn giản là một nhóm sinh viên đi cùng giảng viên vào vùng sâu vùng xa để khám chữa bệnh. Còn mình thì cũng vừa bắt đầu bước vào một vị trí gần như chính thức sau thời gian intern. Dự án mới, workload rất nặng, cộng thêm việc phải cân bằng với các môn trên trường khiến mình gần như không còn thời gian.

Mình không thể ngờ rằng chính trong khoảng thời gian đó, cô ấy đã gặp một người khác.

Ngày chuyến đi với trường kết thúc, mình gọi điện, nhắn tin cho cô ấy rất rất nhiều. Nhưng gần như không có bất kỳ phản hồi nào. Sau đó cũng chỉ là vài câu trả lời rất hời hợt. Mình bắt đầu để ý thấy cả tài khoản Instagram chính lẫn tài khoản phụ của cô ấy đều follow một người con trai khác.

Lúc ấy mình không hiểu chuyện gì đang xảy ra. Mình vẫn gọi, vẫn nhắn, nhưng những cuộc gọi và tin nhắn đó dường như không còn quan trọng với cô ấy nữa. Cuối cùng cô ấy nói rằng cô ấy hết yêu, cô ấy chán, rồi đưa ra rất nhiều lý do để dừng hẳn mối quan hệ này.

Còn mình lúc đó chỉ nghĩ đơn giản rằng: có lẽ cô ấy chỉ muốn tập trung vào bản thân, muốn bước tiếp một mình. Mình không biết rằng đằng sau sự im lặng và những lời nói hời hợt ấy, đã có một người khác xuất hiện.`
    },
    {
      id: "p5",
      title: "Phần 5",
      date: "2026-11-01",
      body: `Lúc đó mọi thứ nặng nề cứ cùng lúc dồn lên người mình. Vừa đi học, vừa đi làm, vừa phải cố gắng giữ cho bản thân không sụp xuống sau cảm giác mình bị bỏ lại. Đó cũng là lần đầu tiên mình thử hút thuốc. Không phải vì mình thích, cũng chẳng phải vì muốn tỏ ra gì cả. Mình chỉ coi nó như một thứ an thần tạm thời, một cách để đầu óc mình im đi một chút.

Mọi chuyện đáng lẽ cứ kết thúc trong im lặng như vậy thôi, cho đến khi cô ấy có một kỳ nghỉ và về quê. Mình hỏi cô ấy người con trai kia là ai. Mình cũng hỏi tại sao ngày hôm đó mình gọi rất nhiều nhưng cô ấy không nghe. Câu trả lời của cô ấy là cô ấy chỉ muốn thử rời đi để xem mình sẽ phản ứng như thế nào. Còn người con trai kia, cô ấy nói chỉ là một người bạn.

Mình đã tin.

Có lẽ vì lúc đó mình quá yếu lòng nên mình muốn tin rằng mọi chuyện không đi xa đến mức mình đang nghĩ. Thậm chí khi cô ấy nói muốn đi xem Odyssey ở rạp IMAX hay gì đó, mình lập tức chuyển ra tìm một phòng trọ riêng (lúc đó mình cũng đã có đồng lương đầu tiên), chỉ nghĩ đơn giản rằng hai đứa sẽ có một nơi để nghỉ ngơi và ở cạnh nhau.

Mình cứ tưởng cô ấy thực sự xuống để gặp mình.

Nhưng hóa ra cô ấy chỉ tiện đường xuống trường đại học để đi biển với đoàn. Ngày đầu tiên cô ấy xuống, cô ấy vẫn gọi cho mình, vẫn nhắn tin với mình. Có lúc cô ấy còn không nỡ để mình tắt cuộc gọi, cứ muốn để đó để mình nói chuyện với cô ấy suốt cả trưa chiều ngày hôm đó.

Nhưng đến tối, mọi thứ lại trở về như cũ.

Mình không hiểu tại sao cả tối hôm đó mình không thể gọi cho cô ấy. Đến tận đêm muộn, cô ấy mới hớt hải chạy về và nói điện thoại hết pin. Rồi sau đó, những ngày tiếp theo, gần như tất cả cuộc gọi và tin nhắn của mình đều bị bỏ qua. SMS, điện thoại, Instagram, TikTok, Zalo... mình gọi đến mức có lẽ phải gần 60 cuộc trong khoảng thời gian đó. Nhưng đến đêm, cô ấy vẫn có thể trả lời mình, vẫn nghe những cuộc gọi FaceTime của mình.

Sau đó cô ấy lại đi biển với đoàn trong trường. Và một lần nữa, mọi cuộc gọi, mọi tin nhắn của mình đều bị bỏ qua.

Mình không hiểu chuyện gì đang xảy ra. Mình đau đến mức khóc rất nhiều, hút hết điếu này đến điếu khác, nhưng vẫn không thể tìm được một lý do đủ hợp lý cho tất cả những sự lạnh nhạt đó.

Cho đến một đêm cuối tuần vào tháng 8.`
    },
    {
      id: "p6",
      title: "Phần 6",
      date: "2026-11-01",
      body: `Đêm đó mình thực sự không chịu nổi nữa. Mọi sự phũ phàng mình nhận được đều không có một lời giải thích nào khiến mình chấp nhận được. Và ngay trong đêm hôm đó, mình bắt xe ghép đi tìm cô ấy.

Sáng hôm đó, mình đã nhìn thấy thứ mà có lẽ cả đời mình cũng không muốn nhìn thấy.

Mình đứng trước cửa phòng và gõ cửa. Nhưng cô ấy nhất quyết không mở. Cô ấy tìm đủ mọi lý do để mình rời khỏi khu trọ: nào là muốn ra ngoài uống nước, nào là muốn mình đi ra chỗ khác, rồi khi mình nói không có xe thì cô ấy còn đòi bắt Grab cho mình đi. Mình vẫn không chịu đi. Cuối cùng cô ấy thậm chí còn dọa sẽ gọi chủ nhà để đuổi mình ra khỏi đó.

Ừ thì...

Lúc đó chắc đến cả trời có sập xuống, mình vẫn sẽ đứng ở đó.

Bởi vì mình biết bên trong cánh cửa ấy có thứ gì đó không ổn.

Nhưng mình vẫn tin cô ấy. Tin đến tận giây phút cuối cùng, ngay trước khi cánh cửa đó mở ra.

Và rồi cánh cửa mở.

Bên trong, ngoài cô ấy ra, còn có một người con trai khác.

Chính là người mà cô ấy đã follow trước đó. Chính là người mà cô ấy từng nói với mình rằng chỉ là một người bạn.

Lúc đó mình thực sự không chịu nổi nữa.

Mình đã khóc ngay trước mặt hai người họ. Mọi thứ trong đầu mình như sụp xuống cùng một lúc. Nhưng điều đau nhất không phải là người con trai đó.

Mà là việc nhát dao đau nhất lại đến từ chính người mà mình vẫn còn cố tin.

Cô ấy giải thích rất nhiều. Và ở thời điểm mình yếu lòng nhất, mình vẫn cố tìm một lý do để tin cô ấy. Cô ấy nói đêm hôm đó bị đau bụng kinh, nên người kia chỉ đến để chăm sóc cô ấy.`
    },
    {
      id: "p7",
      title: "Phần 7",
      date: "2026-11-01",
      body: `Mình đã từng muốn tin câu chuyện đó.

Nhưng có lẽ ông trời không muốn mình tiếp tục tự lừa dối bản thân để sống tiếp như vậy.

Sau đó, câu chuyện cô ấy kể bắt đầu xuất hiện ngày càng nhiều chi tiết mâu thuẫn. Những mảnh chuyện rời rạc, chắp vá, không khớp với nhau. Càng giải thích, mọi thứ lại càng trở nên khó tin. Đến một lúc, mình không còn cách nào để tiếp tục tin vào những lời nói dối đó nữa.

Và rồi mình hiểu ra.

Những buổi tối cô ấy nói mình không thể gọi được. Những lần cô ấy không nghe máy. Những khoảng thời gian cô ấy biến mất. Những lời giải thích trước đây...

Hóa ra rất nhiều trong số đó đều liên quan đến người con trai kia.

Nhưng bạn biết điều đau đớn nhất khi bị phản bội là gì không?

Là khi bạn nhìn thấy người mình yêu tiếp tục ở bên một người khác, nhưng bản thân lại chỉ có thể đứng đó nhìn.

Buổi trưa hôm đó, chỉ cần một cuộc gọi của người kia, cô ấy có thể bỏ mình lại ở quán ăn. Mình tự đi bộ ra bến xe, ngồi một mình ở đó, lủi thủi chờ đến khi có xe tới đón.

Khoảng thời gian chờ đợi đó, và cả chuyến xe trở về một mình hôm ấy, có lẽ là một trong những khoảng thời gian nặng nề nhất mình từng trải qua.

Và điều trớ trêu là đúng trong khoảng thời gian đó, công ty cũng đang xem xét để mình được lên chính thức. Mình vẫn đang phải thi giữa kỳ hè, vẫn phải học, vẫn phải làm việc, vẫn phải cố gắng chứng minh rằng mình đủ khả năng để tiếp tục công việc đó.

Hàng nghìn thứ cùng lúc đập vào đầu một người đang gần như tê liệt.

Mình vẫn phải đứng dậy.

Vẫn phải đi học.

Vẫn phải đi làm.

Vẫn phải hoàn thành mọi thứ như thể chẳng có chuyện gì xảy ra.

Có những lúc mình thực sự muốn buông bỏ tất cả, chỉ để cơ thể này được nghỉ ngơi một chút.

Đến tận lúc mình viết những dòng này, mình vẫn không biết mình đã mất bao nhiêu đêm mất ngủ, đã hút bao nhiêu bao thuốc, đã khóc bao nhiêu lần trước mặt những người anh em của mình.

Trong khi mình gần như sống trong địa ngục của chính mình, cô ấy vẫn đăng ảnh, vẫn quay TikTok, vẫn tiếp tục cuộc sống của cô ấy như thể chẳng có chuyện gì xảy ra.

Và mình cứ mãi không hiểu được một điều.

Tại sao sau tất cả những chuyện đó, người đau đớn đến mức không thể làm được gì vẫn là mình?

Còn cô ấy và người kia... vẫn có thể tiếp tục vui vẻ bên nhau.`
    }
  ]
};
