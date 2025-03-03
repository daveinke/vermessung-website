import { Link } from 'react-router-dom';
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className='bg-white/20 backdrop-blur-md shadow-sm text-2xl font-bold font-display absolute top-5 left-0 right-0 z-50 rounded-2xl w-[94%] mx-auto'>
      <nav>
        <div className='flex items-center justify-between w-[90%] mx-auto'>
          <Link to="/" className='text-xl font-bold text-gray-800'>
            <img src="./src/assets/logo.jpg" alt="Logo" className='h-25 rounded-2xl' />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='max-lg:hidden'>
            <NavigationMenuList className='flex items-center gap-6'>
              <NavigationMenuItem>
                <Link to="/" className='text-gray-600 hover:text-gray-900 transition-colors'>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-gray-600 hover:text-gray-900 text-2xl font-bold bg-white/20 backdrop-blur-md'>
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='p-4 w-[200px] bg-white rounded-md shadow-lg text-sm'>
                    <Link
                      to="/leistungen/amtliche-vermessung"
                      className='block py-2 px-3 hover:bg-gray-100 rounded-md text-gray-600 hover:text-gray-900'
                    >
                      Amtliche Vermessung
                    </Link>
                    <Link
                      to="/leistungen/bauvermessung"
                      className='block py-2 px-3 hover:bg-gray-100 rounded-md text-gray-600 hover:text-gray-900'
                    >
                      Bauvermessung
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/kontakt" className='text-gray-600 hover:text-gray-900 transition-colors'>
                  Kontakt
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="lg" className='border-2'>
                  <Menu size={40} strokeWidth={3} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/leistungen/amtliche-vermessung" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Amtliche Vermessung
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/leistungen/bauvermessung" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Bauvermessung
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/kontakt" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Kontakt
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
    
  );
};

export default Navbar;