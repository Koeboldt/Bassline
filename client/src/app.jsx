import { Outlet } from 'react-router-dom'
import 'antd/dist/reset.css';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import './app.css';

function App() {

  return (
    <div className='app-container'>
    <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
