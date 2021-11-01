import React from 'react';
import './Nav.css';
function Nav() {
    return (
        <section className="nav-bar">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <h2 className="name">PDN NALLOO</h2>
                </div>
                <div className="col-auto">
                    <ul className="nav-links">
                        <li>Trang chủ</li>
                        <li>Câu hỏi thường gặp</li>
                        <li>Đăng ký</li>
                        <li>Đăng nhập</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Nav;