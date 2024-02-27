import { Outlet } from 'react-router-dom'
import Login from './pages/Login1'
import Header from './components/Header'
import Footer from './components/Footer'
import 'antd/dist/antd.css';

function App() {

  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
