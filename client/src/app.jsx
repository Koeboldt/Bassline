import { Outlet } from 'react-router-dom'
import 'antd/dist/reset.css';
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
