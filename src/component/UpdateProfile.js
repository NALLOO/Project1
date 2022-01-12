import React, {useEffect}from 'react';
import { auth } from '../firebase'
import { updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';

function UpdateProfile() {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [name, setName]= useState('');
    const [school, setShool]= useState('')
    const [error, setError] = useState({})
    const [userId,setUserId]=useState('');

    useEffect(()=>{
        async function fetchUser(){
          const userURL = 'https://project1-addf0-default-rtdb.firebaseio.com/user.json'
          const response = await fetch(userURL);
          const responseJSON = await response.json();
          
          const keys = Object.keys(responseJSON);
          keys.forEach(value=>{
              if(responseJSON[value].uid === user.uid) {setUserId(value);};
          })
    
        }
        fetchUser();
      },[])
      async function putData(data){
          const URL= `https://project1-addf0-default-rtdb.firebaseio.com/user/${userId}.json`
        const response = await fetch(URL, {
            method: 'PUT',

            body: JSON.stringify(data)
        });
        return response.json();
      }

    const validate = (name, school)=>{
        const error ={}
        if(!name) error.name = "Bạn chưa nhập tên";
        if(!school ||school === '0') error.school="Bạn chưa chọn trường";
        return error;
    }

    async function  UpdateProfile (e){
        e.preventDefault();
       await  setError(validate(name,school));
        if (Object.keys(error).length === 0 && error.constructor === Object){
           await updateProfile(user, {

                displayName: name,

            })
            const data = {uid:user.uid,school:school};
           await  putData(data);
            navigate('/');
        }
        
        
    }
    return (
        <div>
            <div className="card" style={{width:'50%',marginLeft:'25%', marginTop:'100px', marginBottom:'153px'}} >
                        <div className="card-header">Thay đổi thông tin</div>
                        <div className="card-body">


                            <div className="login-item row mb-4">
                                <label className="col-md-3" htmlFor="user">Họ và Tên</label>
                                <div className="col-md-7">
                                    <input className="form-input"  name="name"
                                        id="name"
                                        placeholder="Họ và Tên"
                                        value={name}
                                        onChange={e => setName( e.target.value )}
                                    />
                                    <p style={{
                                        color: "red",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        fontStyle: "italic",
                                        marginBottom: "0px"
                                    }}>{error.name}</p>
                                   </div>

                            </div>
                            <div className="form-item row mb-4">
                                <div className="col-md-3 item-label"><label className="form-item-label" htmlFor="school">Tên trường</label></div>
                                <div className="col-md-7">
                                    <select className="form-control"
                                        name="school_id"
                                        id="school_id"
                                        value={school}
                                        onChange={e => setShool( e.target.value )}>
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
                                    }}>{error.school}</p>
                                    
                                </div>
                            </div>
                           
                            <div className="col-md-7 offset-md-4" >
                                <button
                                    type="submit"
                                    onClick={UpdateProfile}
                                >Cập nhật</button>
                                
                            </div>

                        </div>
                    </div>
        </div>
    );
}

export default UpdateProfile;