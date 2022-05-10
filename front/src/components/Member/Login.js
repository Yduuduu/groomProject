import React, { useState } from "react";
import { Form, Input, Button, Typography } from 'antd';
import Icon from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;

function Login({isLogin, onLogin}) {
  
  const [inputs, setInputs] = useState({
    user_id:'',
    user_pwd:''
  })

  const {user_id, user_pwd} = inputs

  const onChange = (e) => {
      const {value, name} = e.target // const value = e.target.value, const name = e.target.name
      setInputs({
          ...inputs,
          [name]:value
      })
      console.log(inputs)
  }



  //로그인을 하도록 유도. "세션스토리지" 를 저장하게끔. 서버로부터 로그인했다는 응답을 받아서 세션에 아이디를 저장하고... 
  //끄집어내서 ㅇㅇㅇ로그인중 페이지 이동할때마다 세션에 그 사람이 로그인되어있는지 계속 유지해야함.
  //로그아웃할때는 세션스토리지를 지워줌
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
          onLogin('on');
          //로그아웃일땐 off로
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
    <div className="app">
      <Title level={2}>Log In</Title>
      <Form style={{ width: '350px' }}>
        <Form.Item required>
          <Input
            id="user_id"
            name='user_id'
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="아이디를 입력하세요."
            type="text"
            value={user_id}
            onChange={onChange}/>
        </Form.Item>

        <Form.Item required>
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

        <Form.Item>
          <div>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} onClick={login}>
              로그인
            </Button>
          </div>
          아이디가 없으신가요?
          <a href="/singup">회원가입</a><br/>
          <a className="login-form-forgot" href="/" style={{ float: 'right' }}>
            비밀번호를 잊으셨나요?
          </a>
        </Form.Item>
        <p>{isLogin}</p>
      </Form>
    </div>
  )
}

export default Login;