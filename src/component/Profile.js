import React,{ useState, useEffect } from 'react';
import{auth} from '../firebase';

import {Link} from 'react-router-dom'


function Profile() {
    const user = auth.currentUser;
    const [school, setSchool] = useState('') 
    const [userList,setUserList] = useState({});
    

    useEffect(()=>{
        async function fetchUser(){
          const userURL = 'https://project1-addf0-default-rtdb.firebaseio.com/user.json'
          const response = await fetch(userURL);
          const responseJSON = await response.json();
          setUserList(responseJSON);
          const keys = Object.keys(responseJSON);
          keys.forEach(value=>{
              if(responseJSON[value].uid === user.uid) {setSchool(responseJSON[value].school)};
          })
    
        }
        fetchUser();
      },[])

      
    
    



    return (
        <div style={{
            margin: "0 158px",
            minHeight: "436px"
        }}> <div style={{display:'flex'}}>
            <p className="pt-5" style={{fontSize:"18px"}}> 
            <i className="fas fa-user" 
                style={{
                color: "#3490dc",
                }}></i> &nbsp; THÔNG TIN CÁ NHÂN</p>
                <Link to="/Update"><i style={{margin:'53px 0 0 10px'}} class="fas fa-edit"></i></Link></div>

                <div className="info">
                <div className="mt-4">
				<div className="row form-group" style={{marginBottom:"16px"}}>
					<label className="col-md-3 " style={{textAlign:"end"}}>Họ tên: </label>
					<div className="col-md-9">
						{user.displayName}
					</div>
				</div>
				<div className="row form-group" style={{marginBottom:"16px"}}>
					<label className="col-md-3 "
                    style={{textAlign:"end"}}>Email: </label>
					<div className="col-md-9">
						{user.email}
					</div>
				</div>
					<div className="row form-group" style={{marginBottom:"16px"}}>
						<label className="col-md-3" style={{textAlign:"end"}}>Trường/Học viện: </label>
						<div className="col-md-9">
							{school}
						</div>
					</div>
                </div>
        </div>
    </div>
    );
}

export default Profile;