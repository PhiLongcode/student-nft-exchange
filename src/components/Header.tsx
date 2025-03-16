
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="font-semibold text-xl">StudentNFT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link to="/explore" className={`nav-link ${isActive('/explore') ? 'nav-link-active' : ''}`}>
            Explore
          </Link>
          <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'nav-link-active' : ''}`}>
            Profile
          </Link>
        </nav>

        {/* Search Button and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-5 h-5" />
          </Button>
          <Button className="rounded-full">Connect Wallet</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20 pb-6 px-4 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-4">
          <Link 
            to="/" 
            className={`text-lg py-3 px-4 rounded-lg ${isActive('/') ? 'bg-primary/10 text-primary' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`text-lg py-3 px-4 rounded-lg ${isActive('/explore') ? 'bg-primary/10 text-primary' : ''}`}
          >
            Explore
          </Link>
          <Link 
            to="/profile" 
            className={`text-lg py-3 px-4 rounded-lg ${isActive('/profile') ? 'bg-primary/10 text-primary' : ''}`}
          >
            Profile
          </Link>
          <div className="mt-4">
            <Button className="w-full rounded-lg">Connect Wallet</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
