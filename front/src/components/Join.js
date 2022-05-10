import React from 'react';
import {useState} from 'react';
import axios from 'axios';



const Join = ({isLogin}) => {
    /*const [userid, setUserid] = useState('');
    const [userpwd, setUserpwd] = useState('');
    const [nickname, setNickname] = useState('');

    const idHandler = (e) => {
        setUserid(e.target.value);
    }
    const pwdHandler = (e) => {
        setUserpwd(e.target.value);
    }
    const nickHandler = (e) => {
        setNickname(e.target.value);
    }*/
    const [inputs, setInputs] = useState({
        userid:'',
        userpwd:'',
        nickname:''
    })

    const {userid, userpwd, nickname} = inputs

    const onChange = (e) => {
        const {value, name} = e.target // const value = e.target.value, const name = e.target.name
        setInputs({
            ...inputs,
            [name]:value
        })
        console.log(inputs)
    }

    const join = () => {
        const body = {
            userid : userid,
            userpwd : userpwd,
            nickname : nickname
        }
        axios.post('/api/user/join',body)
        .then((res)=>{
          if(res.data===1){
              alert("회원가입에 성공했습니다.")
              window.location.href='/';
          }
          else{
              alert("회원가입에 실패했습니다.")
          }
        })
        .catch((e) =>{
            console.log(e)
        })
      }

    return(
        <div className="Join">
            아이디 : <input name="userid" type="text" onChange={onChange}></input><br/>
            비밀번호 : <input name="userpwd" type="password" onChange={onChange}></input><br/>
            닉네임 : <input name="nickname" type="text" onChange={onChange}></input>
            <button onClick={join}>회원가입</button>
            <p>{isLogin}</p>
        </div>
    );
}

export default Join;