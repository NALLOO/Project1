import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom'

import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


function Login(
    // { login, Loggedin }
) {

    const [values, setValues] = useState({ email: '', password: '' })
    const [error, setError] = useState({});
    const [error1, setError1] = useState('')
    const navigate = useNavigate();

    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "*Bạn cần nhập email"
        } else if (!regex.test(values.email)) {
            error.email = "*Email không hợp lệ"
        }
        if (!values.password) {
            error.password = "*Bạn chưa nhập mật khẩu"
        } else if (values.password.length < 4) {
            error.password = "*Mật khẩu không ngắn hơn 4 kí tự"
        }
        return error;
    }




    const onSubmitLogin = async (e) => {
        e.preventDefault();
        setError(validate(values))
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (!user.emailVerified) alert("bạn chưa xác minh email")

                else
                    navigate('/')
                // ...
            })
            .catch((error) => {
                setError1(error);
            });







    };

    return (
        <div className="login-content">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card" >
                        <div className="card-header">ĐĂNG NHẬP</div>
                        <div className="card-body">


                            <div className="login-item row mb-4">
                                <label className="col-md-3" htmlFor="user">Email</label>
                                <div className="col-md-7">
                                    <input className="form-input" type="email" name="email"
                                        id="email"
                                        placeholder="email"
                                        value={values.email}
                                        onChange={e => setValues({ ...values, email: e.target.value })}
                                    />
                                    {/* <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{error.email}</p> */}
                                </div>

                            </div>
                            <div className="login-item row mb-4">
                                <label className="col-md-3" htmlFor="password">Mật khẩu</label>
                                <div className="col-md-7">
                                    <input
                                        className="form-input"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Mật khẩu"
                                        value={values.password}
                                        onChange={e => setValues({ ...values, password: e.target.value })} />
                                    {/* <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{error.password}</p> */}
                                    {error1 && <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>Tài khoản hoặc mật khẩu không đúng</p>}
                                </div>

                            </div>
                            <div className="col-md-7 offset-md-4" style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <button
                                    type="submit"
                                    onClick={e => onSubmitLogin(e)}
                                >Đăng nhập</button>
                                <Link to='/ResetPass'> <p style={{
                                    color: 'blue',
                                    fontSize: '15px',
                                    marginTop: '23px',
                                    cursor: 'pointer'
                                }}>Quên mật khẩu</p></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;