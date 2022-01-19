import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


function Nav() {

    const navigate = useNavigate();
    const user = auth.currentUser;
    // const { loggedin, user, onHanleLogout } = props;
    const onHanleLogout = async (e) => {
        await signOut(auth);
        navigate('/')

    }

    if (!user || user.emailVerified === false) {
        return (
            <section className="nav-bar">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <h2 className="name">PDN NALLOO</h2>
                    </div>
                    <div className="col-auto">
                        <ul className="nav-links">
                            <Link to="/"><li className="nav-link">Trang chủ</li></Link>
                            <Link to="/Question"><li className="nav-link">Câu hỏi thường gặp</li></Link>

                            <Link to="/Register"> <li className="nav-link">Đăng ký</li></Link>
                            <Link to="/Login"> <li className="nav-link">Đăng nhập</li></Link>
                        </ul>
                    </div>
                </div>
            </section >
        );
    }
    else {
        return (
            <section className="nav-bar">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <h2 className="name">PDN NALLOO</h2>
                    </div>
                    <div className="col-auto">
                        <ul className="nav-links">
                            <Link to="/"><li className="nav-link">Trang chủ</li></Link>
                            <Link to="/Question"><li className="nav-link">Câu hỏi thường gặp</li></Link>
                            <Link to="/Document"><li className="nav-link">Tài liệu</li></Link>
                            <Link to={`/profile/${user.id}`}> <li className="nav-link">{user.displayName}</li></Link>
                            <Link to="/"> <li className="nav-link" onClick={e => onHanleLogout(e)}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                </div>
            </section >

        )
    }
}

export default Nav;