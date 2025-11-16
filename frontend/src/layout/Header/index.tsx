import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0a] border-b border-gray-800 relative py-2">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">INBIO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-8">
            <a href="#home" className="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              HOME
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#service" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              SERVICE
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              PORTFOLIO
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#client" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              CLIENT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              PRICING
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#blog" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              BLOG
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              CONTACT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-3xl hover:text-cyan-400 transition-colors z-50"
          >
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 left-0 h-screen w-72 bg-[#0a0a0a] border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 px-8 pt-24">
          <a 
            href="#home" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            HOME
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            ABOUT
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#service" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            SERVICE
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            PORTFOLIO
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#client" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            CLIENT
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#pricing" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            PRICING
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#blog" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            BLOG
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium text-lg group w-fit"
          >
            CONTACT
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </header>
  )
}

export default Header
