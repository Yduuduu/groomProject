import React, { useState } from 'react';
import axios from 'axios';

const Login = ({isLogin}) => {
    const [inputs, setInputs] = useState({
        userid:'',
        userpwd:''
    })


    const {userid, userpwd} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const logout = () =>{
        sessionStorage.clear();
    }

    const login = () =>{
        const body = {
            userid:userid,
            userpwd:userpwd
        }
        axios.post("/api/user/login", body)
        .then((res)=>{
            if(res.data !== ""){
                alert("로그인이 완료되었습니다.");
                sessionStorage.setItem("userid", res.data.userid);
                sessionStorage.setItem("nickname", res.data.nickname);
                window.location='/';
            }
            else{
                alert("비밀번호가 잘못되었습니다");
            }
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return (
        <div>
            <hr/>
            아이디 : <input name="userid" type="text" onChange={onChange}></input><br/>
            비밀번호 : <input name="userpwd" type="password" onChange={onChange}></input><br/>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>
            <p>{isLogin}</p>
        </div>
    )
}

export default Login;