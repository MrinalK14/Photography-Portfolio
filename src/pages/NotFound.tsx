import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Aperture, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Aperture className="h-16 w-16 text-amber-500 mx-auto" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-serif font-bold mb-4 text-white"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-gray-400 mb-8">
            The page you're looking for seems to be out of focus
          </p>
          
          <div className="h-0.5 w-16 bg-amber-600 mx-auto mb-8"></div>
          
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
