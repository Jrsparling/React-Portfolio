import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {

  return (
    <>
    <Header></Header>
     <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
