// AdminLogin.tsx
import React, { useState } from "react";


const AdminLogin = () => {


  return (
    <div>
      <h2>Đăng nhập Admin</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
      />
      <button>Đăng nhập</button>
    </div>
  );
};

export default AdminLogin;
