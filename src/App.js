import './App.css';
import react,{useEffect, useState} from 'react';
import Nav from './component/Nav.jsx'
import Register from './component/Register.jsx';
import Footer from './component/Footer.jsx';
import Question from './component/Question.jsx';
import Login from './component/Login.jsx'
import Home from './component/Home';
import Document from './component/Document';
import  {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Profile from './component/Profile';
import { flushSync } from 'react-dom';
import ResetPass from './component/ResetPass';
import UpdateProfile from './component/UpdateProfile';


function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({})
  const [loggedin, setLoggedin] = useState(false)
  const [user, setUser] = useState({user:"", email:"",school:""})

  useEffect(()=>{
    async function fetchUser(){
      const userURL = 'https://project1-addf0-default-rtdb.firebaseio.com/user.json'
      const response = await fetch(userURL);
      const responseJSON = await response.json();
      setUsers(responseJSON);
      

    }
    fetchUser();
  },[])
  

  
  


  const onHanleLogout = ()=>{
    setLoggedin(false);
    setUser({
      
      name:'',
      email:'',
      school:'',
    })
  }

    return (
      
      <div className="app">
        
        <Nav 
          loggedin={loggedin}
          user={user}
          onHanleLogout={onHanleLogout}

          />
        
      <Routes>  
      <Route path="/"  element ={<Home/>} />
      <Route path="/Question"  element={<Question/>}/>
      <Route path="/ResetPass"  element={<ResetPass/>}/>
      <Route path="/Register"  element={<Register />}/>
      <Route path="/profile/:userid" 
      element={
      <Profile
        user={user}
      />}/>
      <Route path="/Update" element={<UpdateProfile/>}/>
      <Route path="/Login"  element={
      <Login/>}/>
      <Route path="/Document" element = {<Document/>}/>
          
         
      </Routes>
      

      
      
      <Footer/>
      
      </div>
     
      
  );
}


export default App;
