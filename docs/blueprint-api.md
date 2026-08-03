# Blueprint API

## auth-service
**Cổng:** 8081  
**Tiền tố qua Gateway:** `/api/auth`

| Method | Endpoint | Mô tả | Yêu cầu |
|--------|----------|-------|----------|
| POST | /auth/login | Đăng nhập, trả về JWT | Public |
| POST | /auth/register | (Tuỳ chọn) Đăng ký tài khoản | Public |

---

## course-service
**Cổng:** 8082  
**Tiền tố qua Gateway:** `/api/courses`

| Method | Endpoint | Mô tả | Yêu cầu |
|--------|----------|-------|----------|
| GET | /courses | Danh sách, có search + phân trang | Public |
| GET | /courses/{id} | Chi tiết 1 môn học | Public |
| POST | /courses | Thêm môn học | ADMIN |
| PUT | /courses/{id} | Sửa môn học | ADMIN |
| DELETE | /courses/{id} | Xoá môn học | ADMIN |

### API nội bộ (không qua Gateway)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| PATCH | /internal/courses/{id}/reserve-seat | Kiểm tra còn chỗ, trừ số chỗ còn lại (transactional) |
| PATCH | /internal/courses/{id}/release-seat | Hoàn trả 1 chỗ khi huỷ đăng ký |

---

## registration-service
**Cổng:** 8083  
**Tiền tố qua Gateway:** `/api/registrations`

| Method | Endpoint | Mô tả | Yêu cầu |
|--------|----------|-------|----------|
| POST | /registrations | Đăng ký học phần (gọi ngầm sang course-service) | STUDENT |
| GET | /registrations/my | Danh sách đăng ký của tôi | STUDENT |
| DELETE | /registrations/{id} | Huỷ đăng ký (gọi ngầm release-seat) | STUDENT / ADMIN |

---

## Ghi chú

- Blueprint này sẽ được cập nhật dần qua các buổi học.
- Buổi 1 chỉ cần xây dựng khung API, chưa cần chính xác 100%.
- Các endpoint có thể được điều chỉnh khi triển khai ở Buổi 2–4.