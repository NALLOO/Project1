import './App.css';
import Nav from './component/Nav.jsx'
import Register from './component/Register.jsx';
import Footer from './component/Footer.jsx';
import Question from './component/Question.jsx';
import Login from './component/Login.jsx'
import Home from './component/Home';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    return (
      <Router>
      <div className="app">
        <Nav />
      <Routes>  
      <Route path="/"  element ={<Home/>} />
      <Route path="/Question"  element={<Question/>}/>
      <Route path="/Register"  element={<Register/>}/>
      <Route path="/Login"  element={<Login/>}/>
      </Routes>
      <Footer/>
      </div>
      </Router>
      
  );
}


export default App;
