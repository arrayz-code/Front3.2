import { useState } from 'react';
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-10" src="https://st.depositphotos.com/60679122/55028/v/450/depositphotos_550288902-stock-illustration-sweat-icon-water-drop-icon.jpg" alt="Hotel Logo" />
            <a href="/" className="ml-2 text-lg font-bold text-gray-800">Hotel La Montaña</a>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              {isAuthenticated ? (
                <>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Servicios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/precios">Precios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/reservas">Reservar</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/promotions">Promociones</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contactanos</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>
                  <li><a className="text-white hover:text-black font-medium  bg-indigo-500 px-4 py-1 rounded-md" href="/" onClick={() => {
                    logout();
                  }}>Logout</a></li>
                </>
              ) :
                (<>
                  <li><a className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1  rounded-md" href="/register">Sign Up</a></li>
                  <li><a className="text-white hover:text-black font-medium  bg-indigo-500 px-4 py-1 rounded-md" href="/login">Login</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Servicios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contactanos</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>



                </>)}
            </ul>
          </nav>
          <button className="md:hidden" onClick={handleToggleMenu}>
            <svg className="h-6 w-6 fill-current text-gray-600 hover:text-gray-800" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;