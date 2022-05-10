import React from 'react';
import "./Main.css";

function Main() {
  return (
    <div className="mainContainer">
        <div className="topContainer">
            <img className="leftImg" alt="leftImg"src="img/1.gif" />
            <img className="rightImg" alt="rightImg" src="img/4-1.jpg"/>
        </div>

        <div className='middleContainer'>
          <div>화살표</div>
          <div>이미지</div>
          <div>화살표</div>
          <div>페이징 숫자</div>
        </div>
        
        <div className='productList'>
          <div>
            <div>WISELY</div><div>화살표</div>
            <div>독일/미국산 5중 면도날과 <br/>프리미엄 면도 용품</div>
          </div>
          <div>(메인 사진)</div>
          <div>
            <div>사진</div>
            <div>리필면도날 4개입</div>
            <div>5,900원</div>
          </div>
          <div>버튼</div>
        </div>
        
    </div>
  )
}

export default Main