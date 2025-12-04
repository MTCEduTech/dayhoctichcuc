(function () {
  const checkAuth = () => {
    // Lấy thông tin người dùng hiện tại
    const currentUser = localStorage.getItem("nickname");
    
    // ⭐ Bước 1: Kiểm tra quyền Admin (Bỏ qua mọi kiểm tra khác)
    // Nếu là admin, cho phép truy cập ngay lập tức để logic admin access trong quanly_nguoidung.html hoạt động.
    if (currentUser === "admin") {
        return; 
    }

    // Lấy trạng thái xác thực
    const isAuth = localStorage.getItem("authenticated") === "true";

    // ⭐ Bước 2: Kiểm tra Đăng nhập chung (Áp dụng cho mọi tài khoản non-admin)
    // ❌ Nếu chưa đăng nhập hoặc không phải admin
    if (!isAuth) {
      alert("🔒 Vui lòng đăng nhập trước khi truy cập.");
      window.location.href = "index.html";
      return;
    }
    
    // ⚠️ Ghi chú: Logic kiểm tra quyền truy cập cụ thể (ví dụ: chỉ cho phép admin vào quanly_nguoidung.html) 
    // đã được thực hiện trong hàm checkAdminAccess() của trang quanly_nguoidung.html.
    // File này chỉ thực hiện kiểm tra đăng nhập chung.
  }; 
  
  // Gọi hàm kiểm tra ngay lập tức khi file được tải
  checkAuth();
})();