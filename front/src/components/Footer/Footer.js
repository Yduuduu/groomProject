import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <img className="footerImg" src="img/0-2.png" alt=""/>
      <ul className='firstFooter'>
        <li>GROOM</li><br/>
        <li>상호 : (주)그룸 | 대표자명 : 최윤주 |</li>
        <li>사업자등록번호 : 000-00-00000 | 이메일 : groom@groom.com</li>
        <li>COPYRIGHTⓒ GROOM</li>
      </ul>
      <ul className='secondFooter'>
        <li>여기에 여기에 여기에 여기에 여기에 </li><br/>
        <li>내용을 내용을 내용을 내용을 내용을</li>
        <li>더 추가 더 추가 더 추가 더 추가 더 추가</li>
        <li>해야함..!!~~~~~~~~~~~~</li>
      </ul>
    </div>
  )
}

export default Footer