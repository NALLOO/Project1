import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <section className="nav-bar">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <h2 className="name">PDN NALLOO</h2>
                </div>
                <div className="col-auto">
                    <ul className="nav-links">
                        <Link to="/"><li>Trang chủ</li></Link>
                        <Link to="/Question"><li>Câu hỏi thường gặp</li></Link>
                        <Link to="/Register"> <li>Đăng ký</li></Link>
                        <Link to="/Login"> <li>Đăng nhập</li></Link>
                    </ul>
                </div>
            </div>
        </section >
    );
}

export default Nav;