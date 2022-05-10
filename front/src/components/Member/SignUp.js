import React, {useState} from 'react'
import axios from 'axios';
import { Form, Input, Button } from 'antd';

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
    };

function SignUp() {
    const [inputs, setInputs] = useState({
        user_id:'',
        user_pwd:'',
        user_phone:'',
        user_birth:'',
        user_name:''
    })

    const {user_id, user_pwd, user_phone, user_birth, user_name} = inputs

    const onChange = (e) => {
        const {value, name} = e.target // const value = e.target.value, const name = e.target.name
        setInputs({
            ...inputs,
            [name]:value
        })
        console.log(inputs)
    }

    const signUp = () => {
        const body = {
            user_id: user_id,
            user_pwd: user_pwd,
            user_phone:user_phone,
            user_birth:user_birth,
            user_name:user_name
        }
        axios.post('/api/member/signup',body)
        .then((res)=>{
          if(res.data===1){
              alert("회원가입에 성공했습니다.")
              //로그인을 하도록 유도. "세션스토리지" 를 저장하게끔. 서버로부터 로그인했다는 응답을 받아서 세션에 아이디를 저장하고... 
              //끄집어내서 ㅇㅇㅇ로그인중 페이지 이동할때마다 세션에 그 사람이 로그인되어있는지 계속 유지해야함.
              //로그아웃할때는 세션스토리지를 지워줌
              window.location.href='/login';
          }
          else{
              alert("회원가입에 실패했습니다.")
          }
        })
        .catch((e) =>{
            console.log(e)
        })
      }


    return (
        <div className="app">
            <h2>Sign up</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} >

            <Form.Item required label="아이디">
                <Input
                id="user_id"
                name='user_id'
                placeholder="아이디를 입력하세요."
                type="text"
                value={user_id}
                onChange={onChange}/>
            </Form.Item>

            <Form.Item required label="비밀번호">
                <Input
                id="user_pwd"
                name='user_pwd'
                placeholder="비밀번호를 입력하세요."
                type="password"
                value={user_pwd}
                onChange={onChange}
                />
            </Form.Item>

            <Form.Item required label="전화번호">
                <Input
                id="user_phone"
                name='user_phone'
                placeholder="전화번호를 입력하세요."
                type="text"
                value={user_phone}
                onChange={onChange}
                />
            </Form.Item>

            <Form.Item required label="생년월일">
                <Input
                id="user_birth"
                name='user_birth'
                placeholder="생년월일을 입력하세요."
                type="text"
                value={user_birth}
                onChange={onChange}
                />
            </Form.Item>

            <Form.Item required label="이름">
                <Input
                id="user_name"
                name='user_name'
                placeholder="이름을 입력하세요."
                type="text"
                value={user_name}
                onChange={onChange}
                />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button onClick={signUp} type="primary">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    );
};
export default SignUp