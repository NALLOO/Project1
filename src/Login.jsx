import React from 'react';

function Login() {
    return (
        <div className="login-content">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">ĐĂNG NHẬP</div>
                        <div className="card-body">
                            <form >
                                <div className="login-item row mb-4">
                                    <label className="col-md-3" htmlFor="user">Tên đăng nhập</label>
                                    <div className="col-md-7"><input type="text" /></div>
                                </div>
                                <div className="login-item row mb-4">
                                    <label className="col-md-3" htmlFor="password">Mật khẩu</label>
                                    <div className="col-md-7"><input type="text" /></div>
                                </div>
                                <div className="col-md-7 offset-md-5"><button type="submit">Đăng nhập</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;