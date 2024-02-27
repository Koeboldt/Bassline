import { Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

function App() {

  return (
    <>
    <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  )
}

export default App
