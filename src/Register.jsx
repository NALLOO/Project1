import React from 'react';

function Register() {
    return (
        <div className="Register-content">
            <div className="row justify-content-center">
                <div className="col-md-5"><div className="card">
                    <div className="card-header">Đăng ký tài khoản</div>
                    <div className="card-body">
                        <form action="#">
                            <div className="form-item row mb-4">
                                <div className="col-md-3"><label htmlFor="name">Họ Tên</label></div>
                                <div className="col-md-7"><input type="text" /></div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3"><label htmlFor="email">Email</label></div>
                                <div className="col-md-7"><input type="text" /></div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3"><label htmlFor="school">Tên Trường</label></div>
                                <div className="col-md-7"><select className="form-control" name="school_id" id="school_id">
                                    <option value="0">Chọn Trường</option>
                                    <option value="1">Đại học Bách Khoa Hà Nội</option>
                                    <option value="2">Đại học Xây Dựng</option>
                                    <option value="3">Đại học Kinh tế Quốc dân</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3"><label htmlFor="password">Mật khẩu</label></div>
                                <div className="col-md-7"><input type="text" /></div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3"><label htmlFor="password">Nhập lại mật khẩu</label></div>
                                <div className="col-md-7"><input type="text" /></div>
                            </div>
                            <button type="submit row mb-0">Đăng ký</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Register;