import { Route, Routes, BrowserRouter } from "react-router-dom";
import Logo from "./NavBar/Logo"
import NavBar from "./NavBar/NavBar";
import Main from './Views/Main';
import Footer from './Footer/Footer';
import SignUp from './Member/SignUp';
import Login from './Member/Login';


function App() {
  return (
    <BrowserRouter>
    <div>
      {/*로고*/}
      <Logo />

      {/*네비게이션*/}
      <NavBar />

      {/*본문 - 라우팅 설정*/}
      <main style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
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
