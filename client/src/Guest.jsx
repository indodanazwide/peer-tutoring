import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
 
function Guest() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Guest
