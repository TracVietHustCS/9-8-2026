# 9/8/2026

Tuyệt Tình Truyện. Đọc tại https://tracviethustcs.github.io/9-8-2026/

## Thêm một phần mới

Mở `parts.js`, thêm một object vào cuối mảng `parts`:

```js
{
  id: "p2",
  title: "Phần 2",
  date: "2026-11-05",
  body: `Đoạn đầu.

Đoạn hai, cách đoạn trên một dòng trống.

***

Đoạn sau khi ngắt cảnh.`
}
```

Commit và push, trang tự cập nhật sau khoảng một phút.

## Lượt xem và bình luận

Xem `backend/README.md` để bật (cách đơn giản nhất là Disqus, chỉ cần một giá trị). Cấu hình ở `config.js`.


## Nhạc nền

Ô nhạc (bìa đĩa xoay ở góc phải dưới) phát **full bài** bằng trình phát YouTube nhúng chính thức, không lưu hay đăng file nhạc nào trên trang. Thêm bài trong `playlist.js`: mỗi bài một dòng `{ id: "ID_VIDEO", title: "Tên bài", artist: "Ca sĩ" }` (ID là phần sau `v=` trong link YouTube). Danh sách trống thì ô nhạc không hiện.

- YouTube chỉ được tải khi người đọc bấm mở playlist. Đóng bảng thì nhạc dừng (YouTube yêu cầu khung phát phải hiện ra khi đang phát).
- Một số bài (nhất là của hãng đĩa) bị tắt quyền nhúng: trang tự bỏ qua bài đó và báo nhẹ.
- Nhạc tiếp tục phát khi chuyển giữa các phần truyện.
