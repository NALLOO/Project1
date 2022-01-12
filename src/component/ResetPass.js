import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { sendPasswordResetEmail} from 'firebase/auth'


function ResetPass() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const validate = (values) => {
        var error = '';
        const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;
        if (!values) {
            error = '*Bạn cần nhập email'
        } else if (!regex.test(values)) {
            error = "*Email không hợp lệ"
        }
        
        return error;
    }




    const onSubmitReset = async (e) => {
        e.preventDefault();
        setError(validate(email));
        console.log(error);
        
        try{
        await sendPasswordResetEmail(auth, email);
        navigate('/Login')
        }
        catch (error){
            console.log(error);
            };
        }
    
            

    return (
        <div className="login-content">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card" >
                        <div className="card-header">Quên mật khẩu</div>
                        <div className="card-body">


                            <div className="login-item row mb-4">
                                <label className="col-md-3" htmlFor="user">Email</label>
                                <div className="col-md-7">
                                    <input className="form-input" type="email" name="email"
                                        id="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={e => setEmail( e.target.value )}
                                    />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{error}</p></div>

                            </div>
                           
                            <div className="col-md-7 offset-md-4" >
                                <button
                                    type="submit"
                                    onClick={e => onSubmitReset(e)}
                                >Reset Mật khẩu</button>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ResetPass;