const Hero = () => {
    return (
      <section
        id="home"
        className="w-full min-h-screen bg-gradient-to-b from-white to-orange-100 flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-pulse">
          Hi, I'm Dharaneesh Guhan
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-6">
          A passionate ECE student who loves coding, innovation, and building awesome things for the future.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Explore My Work
        </a>
      </section>
    );
  };
  
  export default Hero;
  