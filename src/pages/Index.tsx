import React, { useState, useEffect } from 'react';
import { Camera, Mail, Instagram, Twitter, MapPin, Menu, X, ArrowRight, ChevronDown, Aperture } from 'lucide-react';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/Spotlight';
import { LayoutGrid, CardProps } from '@/components/ui/LayoutGrid';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample portfolio images - replace with your actual photos
  const portfolioImages = [
    {
      id: 15,
      src: "/royal enfield.jpg",
      alt: "Royal Enfield",
      category: "Fuji XT-200",
      featured: true
    },
    {
      id: 7,
      src: "/kheerganga.jpg",
      alt: "Kheerganga pass",
      category: "Cannon 200D",
      featured: true
    },
    {
      id: 9,
      src: "/dessert.jpg",
      alt: "Desert sunset",
      category: "Nothing Phone 1"
    },
    {
      id: 13,
      src: "/ninja.jpg",
      alt: "Silhouette portrait",
      category: "Fuji XT-200"
    },
    {
      id: 8,
      src: "/beachrock.jpg",
      alt: "Beach with dramatic rocks",
      category: "IPhone 16"
    },
    {
      id: 11,
      src: "/cards.jpg",
      alt: "Playing cards arrangement",
      category: "Cannon 200D"
    },
    {
      id: 10,
      src: "/camera.jpg",
      alt: "Self portrait",
      category: "Cannon 77D"
    },
    {
      id: 1,
      src: "/mountains.jpg",
      alt: "Mountain landscape",
      category: "IPhone 16",
      featured: true
    },
    {
      id: 5,
      src: "/fort.jpg",
      alt: "Historic fort architecture",
      category: "Fuji XT-200"
    },
    {
      id: 14,
      src: "/ankit tiwari.jpg",
      alt: "Concert",
      category: "Fuji XT-200"
    },
    {
      id: 4,
      src: "/kasol.jpg",
      alt: "Kasol valley view",
      category: "Nothing Phone 1",
      featured: true
    },
    {
      id: 2,
      src: "/lake.jpg",
      alt: "Serene lake view",
      category: "Cannon 200D"
    },
    {
      id: 16,
      src: "/sand.jpg",
      alt: "Sandy desert portrait",
      category: "Fuji XT-200"
    },
    {
      id: 12,
      src: "/moon.jpg",
      alt: "Night sky with moon",
      category: "Cannon 200D"
    },
    {
      id: 17,
      src: "/me.jpg",
      alt: "Self portrait",
      category: "Samsung A50"
    },
    {
      id: 3,
      src: "/tosh.jpg",
      alt: "Tosh village",
      category: "OnePlus 11",
      featured: true
    },
    {
      id: 6,
      src: "/grahan.jpg",
      alt: "Grahan village trek",
      category: "Nothing Phone 1"
    },
  ];

  // Transform portfolio images into cards for the LayoutGrid
  const portfolioCards: CardProps[] = portfolioImages.map(image => ({
    id: image.id,
    thumbnail: image.src,
    category: image.category,
    className: "",
    content: {
      alt: image.alt,
      category: image.category
    }
  }));

  // Filter cards by category
  const filteredCards = activeCategory === 'All' 
    ? portfolioCards 
    : portfolioCards.filter(card => card.category === activeCategory);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioImages.map(image => image.category))];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-brooklyn">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-md backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                <Aperture className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <span className="font-brooklyn-display text-xl md:text-2xl tracking-tight text-white">Mrinal <span className="text-teal-400">Kapoor</span></span>
                <p className="text-xs text-gray-400 -mt-1 font-brooklyn-text">Photographer</p>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="bg-gray-900/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gray-800 flex items-center space-x-8">
                <a href="#portfolio" className="text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm font-brooklyn-text">Portfolio</a>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm font-brooklyn-text">About</a>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm font-brooklyn-text">Contact</a>
              </div>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-800 text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 animate-fade-in">
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col space-y-5">
                <a href="#portfolio" className="text-gray-300 hover:text-teal-400 transition-colors font-medium py-2 border-b border-gray-800 pb-3 font-brooklyn-text" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors font-medium py-2 border-b border-gray-800 pb-3 font-brooklyn-text" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors font-medium py-2 font-brooklyn-text" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden pt-24 md:pt-28">
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 85%, .08) 0, hsla(185, 100%, 55%, .02) 50%, hsla(185, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 85%, .06) 0, hsla(185, 100%, 55%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 85%, .04) 0, hsla(185, 100%, 45%, .02) 80%, transparent 100%)"
        />
        
        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-900/30 text-teal-400 rounded-full text-sm font-medium mb-6 font-brooklyn-text">Hey there!</span>
            <h1 className="text-4xl md:text-5xl font-brooklyn-display font-bold mb-6 text-white leading-tight">
              I shoot <span className="text-gradient">awesome</span> photos that tells a story
            </h1>
            <p className="text-lg text-gray-400 mb-8 font-brooklyn-serif">
              Passianote about photography, capturing moments with a creative edge. 
            </p>
            <div className="flex items-center justify-center space-x-4 mb-10">
              <div className="flex items-center">
                <span className="w-1 h-1 bg-teal-400 rounded-full mr-2"></span>
                <span className="text-gray-300 text-sm font-brooklyn-text">Candid</span>
              </div>
              <div className="flex items-center">
                <span className="w-1 h-1 bg-teal-400 rounded-full mr-2"></span>
                <span className="text-gray-300 text-sm font-brooklyn-text">Creative</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 font-brooklyn-text"
              >
                <span>See my work</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-teal-600 text-teal-400 rounded-full font-medium hover:bg-teal-900/30 transition-colors font-brooklyn-text"
              >
                Let's talk
              </a>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-brooklyn-display font-bold text-white mb-4">Portfolio</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-brooklyn-text">
              A collection of my finest work spanning various photography styles and subjects
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="relative min-h-[600px]">
            <LayoutGrid cards={filteredCards} selectedCategory={activeCategory} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lens.jpg" 
                  alt="Camera lens representing photography passion" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-900/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gray-800 rounded-full -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-4xl font-brooklyn-display font-bold text-white mb-6">About Me</h2>
              <div className="h-1 w-20 bg-teal-600 mb-8"></div>
              
              <p className="text-lg text-gray-300 mb-6 font-brooklyn-serif">
                Hi, I'm Mrinal Kapoor, a passionate photographer who loves capturing the world's beauty through my lens.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 font-brooklyn-serif">
                My journey began when I discovered my passion for freezing moments in time, preserving emotions and moments that might otherwise fade away.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 font-brooklyn-serif">
                Based in the Gurugram, India, I find inspiration in every sunrise, every face, every angle and every fleeting moment that deserves to be preserved forever.
              </p>
  
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors font-brooklyn-text"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-brooklyn-display font-bold text-white mb-6">Let's Create Something Beautiful</h2>
              <div className="h-1 w-20 bg-teal-600 mb-8"></div>
              
              <p className="text-lg text-gray-300 mb-8 font-brooklyn-serif">
                Ready to capture your special moments? I'd love to hear about your project and bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white font-brooklyn-display">Email</h4>
                    <a href="mailto:mrinalkapoor24@gmail.com" className="text-teal-400 hover:underline font-brooklyn-text">mrinalkapoor24@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white font-brooklyn-display">Location</h4>
                    <p className="text-gray-400 font-brooklyn-text">Gurugram, India</p>
                </div>
              </div>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-brooklyn-text">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-brooklyn-text">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 font-brooklyn-text">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-brooklyn-text">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors font-brooklyn-text"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                <Aperture className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <span className="font-brooklyn-display text-xl font-medium tracking-tight">Mrinal <span className="text-teal-400">Kapoor</span></span>
                <p className="text-xs text-gray-400 -mt-1 font-brooklyn-text">Photographer</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <a href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors font-brooklyn-text">Portfolio</a>
              <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors font-brooklyn-text">About</a>
              <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors font-brooklyn-text">Contact</a>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left text-gray-500 text-sm font-brooklyn-text">
            <p>&copy; {new Date().getFullYear()} Mrinal Kapoor Photography. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
