import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({ isActive, toggleMenu, handleClick, isDarkMode }) => {
    return (
      <div className="Layout">
        <Header 
            isActive={isActive}
            toggleMenu={toggleMenu}
            handleClick={handleClick}
            isDarkMode={isDarkMode}
        />
        <Outlet />
        <Footer />
      </div>
    )
}

export default Layout