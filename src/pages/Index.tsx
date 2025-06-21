import React, { useState, useEffect } from 'react';
import { Camera, Mail, Instagram, Twitter, MapPin, Menu, X, ArrowRight, ChevronDown, Aperture, Home, User, Briefcase, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Spotlight } from '../components/ui/Spotlight';
import { LayoutGrid, CardProps } from '../components/ui/LayoutGrid';
import { NavBar } from '../components/ui/NavBar';
import { FlipWords } from '../components/ui/FlipWords';
import { FloatingElements } from '../components/ui/FloatingElements';

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

  // Navigation items for the new NavBar
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Portfolio', url: '#portfolio', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Contact', url: '#contact', icon: MessageCircle },
  ];

  // Words for the flip animation
  const flipWords = ["moments", "memories", "emotions"];

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
      id: 16,
      src: "/sand.jpg",
      alt: "Sandy desert portrait",
      category: "Fuji XT-200"
    },
    {
      id: 2,
      src: "/lake.jpeg",
      alt: "Get Set Go!",
      category: "IPhone 16"
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
      {/* New Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <FloatingElements />
        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-8xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-brooklyn-display font-black mb-6 text-white leading-tight">
              <div className="-ml-4 sm:-ml-8 md:-ml-20">
                I capture{" "}
                <FlipWords 
                  words={flipWords} 
                  duration={3000}
                  className="text-teal-400"
                />
                .
              </div>
              <div className="ml-4 sm:ml-8 md:ml-25">
                <span className="text-white">One pixel at a time.</span>
              </div>
            </h1>
          </motion.div>
        </div>
        
        {/* Floating Bottom Arrow */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <motion.button
            onClick={() => {
              const portfolioSection = document.querySelector('#portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-brooklyn-display font-bold text-white mb-4">Portfolio</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-brooklyn-text px-4">
              A collection of my finest work spanning various photography styles and subjects
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="relative min-h-[400px] sm:min-h-[600px]">
            <LayoutGrid cards={filteredCards} selectedCategory={activeCategory} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-6xl mx-auto relative">
            {/* Large Name */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-brooklyn-display font-black text-white leading-tight tracking-tight">
              MRINAL KAPOOR
            </h2>
            
            {/* Overlapping Capsule Photo Container */}
            <div className="relative -mt-4 sm:-mt-8 md:-mt-14 lg:-mt-22 mx-auto mb-6 sm:mb-8 w-40 h-64 sm:w-48 sm:h-80 md:w-56 md:h-96 lg:w-64 lg:h-[28rem]">
              <div className="absolute inset-0 bg-teal-500" style={{ borderRadius: '9999px' }}></div>
              <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '9999px' }}>
                <img 
                  src="/lens.jpg" 
                  alt="Mrinal Kapoor - Photographer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="max-w-4xl mx-auto -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 relative z-10 px-4">
              <p className="text-lg sm:text-2xl md:text-3xl font-brooklyn-display font-bold text-white leading-relaxed">
                I'M MRINAL, A PASSIONATE{" "}
                <span className="text-teal-400">Photographer & STORYTELLER </span>
                <br />
                I CHASE LIGHT, CAPTURE MOMENTS AND FREEZE TIME IN HIGH RESOLUTION.
                <br />
                EVERY PHOTO IS A MEMORY - PIXELATED INTO PERMANENCE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-brooklyn-display font-black text-white mb-6 leading-tight">
              LET'S CREATE <span className="text-teal-400">MAGIC</span>
            </h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-brooklyn-display font-medium leading-relaxed px-4">
              Ready to turn your vision into stunning visuals? Let's collaborate and create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-brooklyn-display font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-brooklyn-display font-semibold text-white mb-2">Email Me</h4>
                    <a href="mailto:mrinalkapoor24@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors text-base sm:text-lg font-brooklyn-text break-all">
                      mrinalkapoor24@gmail.com
                    </a>
                    <p className="text-gray-400 mt-1 font-brooklyn-text text-sm sm:text-base">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-brooklyn-display font-semibold text-white mb-2">Based In</h4>
                    <p className="text-gray-300 text-base sm:text-lg font-brooklyn-text">Gurugram, India</p>
                    <p className="text-gray-400 mt-1 font-brooklyn-text text-sm sm:text-base">Available for travel worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-brooklyn-display font-semibold text-white mb-2">Services</h4>
                    <p className="text-gray-300 text-base sm:text-lg font-brooklyn-text">Portrait • Landscape • Events</p>
                    <p className="text-gray-400 mt-1 font-brooklyn-text text-sm sm:text-base">Custom packages available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-800/50">
              <h3 className="text-xl sm:text-2xl font-brooklyn-display font-bold text-white mb-6">Start Your Project</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-brooklyn-text">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-brooklyn-text">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2 font-brooklyn-text">Project Type</label>
                  <select 
                    id="project"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text"
                  >
                    <option value="">Select project type</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Photography</option>
                    <option value="landscape">Landscape Shoot</option>
                    <option value="commercial">Commercial Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-brooklyn-text">Tell Me About Your Vision</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition text-white font-brooklyn-text placeholder-gray-500"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 font-brooklyn-display text-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Let's Create Together
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
