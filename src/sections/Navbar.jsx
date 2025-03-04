import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

// Änderung an der Orginal Navigation Menu Komponente um Content richtig zu positionieren


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Fügen Sie isMenuOpen als Abhängigkeit hinzu

  return (
    <header className='bg-white/20 backdrop-blur-md shadow-sm text-2xl font-bold font-display fixed top-5 left-0 right-0 z-50 rounded-2xl w-[94%] mx-auto'>
      <nav>
        <div className='flex items-center justify-between w-[90%] mx-auto my-2'>
          <Link to="/" className='text-xl font-bold text-gray-800'>
            <img src="./src/assets/logoremove.png" alt="Logo" className='h-25 rounded-2xl mix-blend-color-dodge' />
          </Link>

          {/* Desktop Navigation */}
          <ul className='flex items-center gap-11 max-lg:hidden'>
            <li>
              <Link to="/" className='text-gray-900 hover:text-gray-600 transition-colors'>
                Home
              </Link>
            </li>
            <li>
              <div className="relative group">
                <button className="text-gray-900 hover:text-gray-600">
                  Leistungen
                </button>

                {/* Popup Content */}
                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full pt-2">
                  <div className="bg-white rounded-md shadow-lg p-2 w-40 text-sm">
                    <Link
                      to="/leistungen/amtliche-vermessung"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Amtliche Vermessung
                    </Link>
                    <Link
                      to="/leistungen/bauvermessung"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Bauvermessung
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/kontakt" className='text-gray-900 hover:text-gray-600 transition-colors'>
                Kontakt
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className='max-lg:block hidden relative'>
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center gap-2 font-medium mr-4 border-2 border-grey-500 rounded-md p-2 transition-colors ${isMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
            >
              <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
              {isMenuOpen ? <X size={30} strokeWidth={1.75} /> : <Menu size={30} strokeWidth={1.75} />}
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              ref={menuRef}
              className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2 w-40 mr-4 text-sm transform transition-all duration-300 ease-in-out ${isMenuOpen
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 -translate-y-2 invisible'
                }`}
            >
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/leistungen/amtliche-vermessung"
                className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Amtliche Vermessung
              </Link>
              <Link
                to="/leistungen/bauvermessung"
                className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Bauvermessung
              </Link>
              <Link
                to="/kontakt"
                className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;