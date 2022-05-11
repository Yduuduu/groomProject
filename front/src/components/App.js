import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Logo from "./NavBar/Logo"
import NavBar from "./NavBar/NavBar";
import Main from './Views/Main';
import Footer from './Footer/Footer';
import SignUp from './Member/SignUp';
import Login from './Member/Login';
import axios from "axios";


function App() {
  const [loginState, setLoginState] = useState("off");  
  const [isLogin, setisLogin] = useState(false);  
  
  
  const onLoginHandler=(val)=>{
    alert("val----->>"+val+typeof(val))
    if(val===true){
      setLoginState('on')
      setisLogin(true)
      //alert('a--->'+isLogin)
    } else if(val===false)  {
      setLoginState('off')
      setisLogin(false)
      //alert("띄워짐")
    }
    /*if(val==='on'){
      setisLogin(true)
    }
    else if(val==='off')  {
      setisLogin(false)
    }*/
    
    //alert('onLoginHandler isLogiin: --->>>>>'+ isLogin+"////"+loginState)
  }

  const loginCheck=()=>{
    axios.get('/api/member/loginCheck')
    .then((res)=>{
      console.log("loginCheck", res.data)
      if(parseInt(res.data)>0){
        setisLogin(true)
        setLoginState('on')
      }else{
        setisLogin(false)
        setLoginState('off')
      }
    })
  }

  useEffect(()=>{
    loginCheck()
  },[])

  return (
    <BrowserRouter>
    <div>

      {/*네비게이션*/}
      <NavBar isLogin={isLogin} loginState={loginState} onLogin={onLoginHandler}  />

      {/*본문 - 라우팅 설정*/}
      <main style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login onLogin={onLoginHandler}/>} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </main>

      {/*푸터*/}
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;