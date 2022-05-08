import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logo from "./components/NavBar/Logo";
import NavBar from "./components/NavBar/NavBar";
import Main from './components/Views/Main';
import Footer from './components/Footer/Footer';


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
            <Route path="/" element={<Main />} ></Route>
          </Routes>
        </main>

      {/*푸터*/}
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;
