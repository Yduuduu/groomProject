import React from 'react'


function Header() {
  return (
    <header>
        <ul>
            {/*로그인 하지 않았을 때*/}
            <li>
                LOGIN
            </li>
            <li>
                SIGN UP
            </li>
            {/*로그인 후*/}
            <li>
                MY PAGE
            </li>
            <li>
                CART
            </li>
            <li>
                LOGOUT
            </li>
        </ul>
    </header>
  )
}

export default Header