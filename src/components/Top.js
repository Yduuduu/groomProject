import { useEffect, useState } from "react";
import Join from "./Join";
import Login from "./Login";

const Top = () => {
    const [nickname, setNickname] = useState('')

    useEffect(()=>{
        setNickname(sessionStorage.getItem("nickname"))
    },[])
    return(
        <div>
            <Join isLogin={nickname}/>
            <Login isLogin={nickname}/>
        </div>
    )
}

export default Top;