import React, { useState,useEffect } from "react";
import { Form, Input, Button, Typography } from 'antd';
import Icon from '@ant-design/icons';
import axios from 'axios';
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const {onLogin} = props
  const [ isLogin, setIsLogin ] = useState(props.isLogin);

  const [inputs, setInputs] = useState({
    user_id:'',
    user_pwd:''
  })

  const {user_id, user_pwd} = inputs

  const onChange = (e) => {
      const {value, name} = e.target
      setInputs({
          ...inputs,
          [name]:value
      })
      console.log("onChange:",inputs)
  }

  // 로그인
  const login = () => {
    const body = {
        user_id: user_id,
        user_pwd: user_pwd
    }
    axios.post('/api/member/login',body)
    .then((res)=>{
      if(res.data !== ""){
          alert("로그인이 완료되었습니다.");
          window.sessionStorage.setItem("user_id", res.data.user_id);
          window.sessionStorage.setItem("user_name", res.data.user_name);
          window.sessionStorage.setItem("isLogin", true);
          onLogin(true);
          setIsLogin(true);
          window.location.href='/';
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
    <div className="app">
      <img src="img/0-1.png" alt=""/>
      <div className="loginWrap">
        <div className="loginTitle">
          <h1>로그인</h1>
          <p>로그인 하시면 더욱 다양한 그룸의 서비스를 이용하실 수 있습니다.</p>
        </div>
        <Form style={{ width: '350px' }}  className="loginForm">
          <Form.Item required label="아이디">
            <Input
              id="user_id"
              name='user_id'
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="아이디를 입력하세요."
              type="text"
              value={user_id}
              onChange={onChange}/>
          </Form.Item>

          <Form.Item required label="비밀번호">
            <Input
              id="user_pwd"
              name='user_pwd'
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="비밀번호를 입력하세요."
              type="password"
              value={user_pwd}
              onChange={onChange}
              />
          </Form.Item>

          <Form.Item className="loginBtn">
            <div className="loginBtnWrap">
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} onClick={login}>
                로그인
              </Button>
            </div>
            <div className="loginFind">
              <p>아이디가 없으신가요? <a href="/singup">회원가입</a><br/></p>
            </div>
            <a className="login-form-forgot" href="/" style={{ float: 'left' }}>
                비밀번호를 잊으셨나요?
              </a>
          </Form.Item>
        </Form>
        <img className="checkImg" src="img/0-6.png" alt=""/>
      </div>
    </div>
  )
}

export default Login;