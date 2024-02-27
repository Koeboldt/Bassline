import { Outlet } from 'react-router-dom'
import Login from './pages/Login1'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
      <Login />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
