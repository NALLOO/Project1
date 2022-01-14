
import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Register.css';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'

function Register() {
    const navigate = useNavigate();
    const URL = 'https://project1-addf0-default-rtdb.firebaseio.com/user.json'

    const [values, setValue] = useState({
        name: "",
        email: "",
        school: "",
        password: "",
        repassword: "",
    })

    const [errors, setErrors] = useState({})

    async function postData(data) {

        const response = await fetch(URL, {
            method: 'POST',

            body: JSON.stringify(data)
        });
        return response.json();
    }

    const handleSubmitRegister = e => {
        e.preventDefault();
        setErrors(validate(values));

        if (Object.keys(errors).length === 0 && errors.constructor === Object) {

            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {

                        displayName: values.name,

                    })
                    sendEmailVerification(user);
                    const data = {
                        uid: user.uid,
                        school: values.school
                    }
                    postData(data);
                    alert('Bạn hãy xác nhận email')
                    navigate('/login')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (error.message === "Firebase: Error (auth/email-already-in-use).") alert('email của bạn đã được sử dụng')
                    // ..
                });

        }


    }

    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            error.name = "*Bạn cần nhập tên"
        }
        if (!values.email) {
            error.email = "*Bạn cần nhập email"
        } else if (!regex.test(values.email)) {
            error.email = "*Email không hợp lệ"
        }
        if (!values.school || values.school == '0') {
            error.school = "*Bạn cần chọn trường"
        }
        if (!values.password) {
            error.password = "*Bạn chưa nhập mật khẩu"
        } else if (values.password.length < 4) {
            error.password = "*Mật khẩu không ngắn hơn 4 kí tự"
        }
        if (values.repassword !== values.password) {
            error.repassword = "*Mật khẩu phải trùng nhau"
        }
        return error;
    }

    return (
        <div className="Register-content">
            <div className="row justify-content-center">
                <div className="col-md-6"><div className="card">
                    <div className="card-header">Đăng ký tài khoản</div>
                    <div className="card-body">
                        <form >
                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="name">Họ Tên</label></div>
                                <div className="col-md-7">
                                    <input
                                        type="text"
                                        className="form-item-input"
                                        value={values.name}
                                        onChange={e => setValue({ ...values, name: e.target.value })}
                                        placeholder="Họ Tên" />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{errors.name}</p></div>

                            </div>

                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="email">Email</label></div>
                                <div className="col-md-7">
                                    <input
                                        type="text"
                                        className="form-item-input"
                                        value={values.email}
                                        onChange={e => setValue({ ...values, email: e.target.value })}
                                        placeholder="Email" />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{errors.email}</p></div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="school">Tên trường</label></div>
                                <div className="col-md-7">
                                    <select className="form-control"
                                        name="school_id"
                                        id="school_id"
                                        value={values.school}
                                        onChange={e => setValue({ ...values, school: e.target.value })}>
                                        <option value="0">Chọn Trường</option>
                                        <option value="Đại học Bách Khoa Hà Nội">Đại học Bách Khoa Hà Nội</option>
                                        <option value="Đại học Xây Dựng">Đại học Xây Dựng</option>
                                        <option value="Đại học Kinh tế Quốc dân">Đại học Kinh tế Quốc dân</option>
                                    </select>
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{errors.school}</p>
                                </div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="password">Mật khẩu</label></div>
                                <div className="col-md-7">
                                    <input
                                        type="password"
                                        className="form-item-input"
                                        value={values.password}
                                        onChange={e => setValue({ ...values, password: e.target.value })}
                                        placeholder="Mật khẩu" />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{errors.password}</p></div>
                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="password">Nhập lại mật khẩu</label></div>
                                <div className="col-md-7">
                                    <input
                                        type="password"
                                        className="form-item-input"
                                        value={values.repassword}
                                        onChange={e => setValue({ ...values, repassword: e.target.value })}
                                        placeholder="Nhập lại mật khẩu" />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{errors.repassword}</p></div>
                            </div>
                            <button
                                type="submit row mb-0 "
                                id="btn-register"
                                onClick={handleSubmitRegister}>Đăng ký</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Register;