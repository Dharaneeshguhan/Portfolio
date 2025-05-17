const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 py-6 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Copyright */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Dharaneeshguhan T. All rights reserved.
        </p>
        
        {/* Right Side - Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
  
      </footer>
    );
  };
  
  export default Footer;
  