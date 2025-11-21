 import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Aşağı scroll - gizlət, yuxarı scroll - göstər
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-[#0a0a0a] py-2'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto lg:px-16 px-3 py-4 overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" 
                alt="Profile" 
                className="w-12 h-12 object-cover border border-white rounded-full"
              />
            <span className="text-white text-2xl font-bold tracking-wider">ORXAN</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center justify-end gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
            <a href="#skills" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              SKİLLS
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 font-medium group">
              CONTACT
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-3xl hover:text-cyan-400 transition-colors z-50"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] backdrop-blur-xl shadow-2xl z-50 lg:hidden"
      >
        {/* Header with Logo and Close Button */}
        <div className="border-b border-gray-800/50 px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" 
              alt="Profile" 
              className="w-14 h-14 object-cover border-2 border-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
            />
            <div>
              <span className="text-white text-xl font-bold tracking-wider block">ORXAN</span>
              <span className="text-[#878e99] text-xs">Frontend Developer</span>
            </div>
          </div>
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-cyan-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-6 py-8">
          <a 
            href="#home" 
            onClick={() => setIsMenuOpen(false)}
            className="group relative px-4 py-4 rounded-lg bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 overflow-hidden"
          >
            <span className="relative z-10 text-white font-semibold text-base flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></span>
              HOME
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="group relative px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-emerald-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300"
          >
            <span className="relative z-10 text-[#c4cfde] group-hover:text-white font-medium text-base flex items-center gap-3 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all"></span>
              ABOUT
            </span>
          </a>

          <a 
            href="#service" 
            onClick={() => setIsMenuOpen(false)}
            className="group relative px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-emerald-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300"
          >
            <span className="relative z-10 text-[#c4cfde] group-hover:text-white font-medium text-base flex items-center gap-3 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all"></span>
              SERVICE
            </span>
          </a>

          <a 
            href="#portfolio" 
            onClick={() => setIsMenuOpen(false)}
            className="group relative px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-emerald-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300"
          >
            <span className="relative z-10 text-[#c4cfde] group-hover:text-white font-medium text-base flex items-center gap-3 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all"></span>
              PORTFOLIO
            </span>
          </a>

          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="group relative px-4 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-emerald-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300"
          >
            <span className="relative z-10 text-[#c4cfde] group-hover:text-white font-medium text-base flex items-center gap-3 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all"></span>
              CONTACT
            </span>
          </a>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-800/50 px-8 py-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
          <p className="text-[#878e99] text-xs text-center">© 2025 Orkhan Aslanov</p>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </header>
  )
}

export default Header
