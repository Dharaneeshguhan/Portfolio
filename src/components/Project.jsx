const Projects = () => {
    const projects = [
      {
        title: "Learn with joy",
        description:
          "Learn with Joy is a modern, full-stack e-learning platform designed to provide an engaging and personalized learning experience. It features secure user and admin authentication, course previews for paid content, full access for free courses, note-taking for each course, a shopping cart with payment handling, and intelligent features like progress tracking and AI-driven recommendations. The platform includes sections for trending, top-rated, coding, and AI-based learning, all wrapped in a responsive, dark-mode enabled interface built with React, Tailwind CSS, and Node.js.",
        domain: "Website Development using React",
        techStack: "React Js, MangoDB , and more",
        link: "https://github.com/Dharaneeshguhan/E-Learning-platform",
      },
      {
        title: "Smart Step",
        description:
          "Developed an IoT-based animal rest monitoring system using NodeMCU (ESP8266) and an MPU6050 accelerometer. The device calculates resting and active durations, storing the data locally in EEPROM. It continuously scans for a specific Wi-Fi network and only connects when the signal strength indicates proximity (approximately 1 cm). Upon connection, the device transmits the collected data to a Spring Boot backend via HTTP. The backend receives, maps, and stores the data in a MySQL database. This system ensures reliable data capture and transmission even in low-connectivity farm environments, helping to detect early signs of diseases",
        domain: "Webpage Development using React",
        techStack: "Java, React Js, SpringBoot and more",
        link: "https://github.com/Dharaneeshguhan/Cattle_Monitoring",
      },
    ];
  
    return (
      <section
        id="projects"
        className="w-full bg-gray-50 py-16 px-4 md:px-10 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl">
          Innovations in Technology and Leadership
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Domain
                </h4>
                <p className="text-gray-600 mb-4">{project.domain}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Tech Stack
                </h4>
                <p className="text-gray-600">{project.techStack}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-orange-400 text-white py-2 px-6 rounded-md text-center font-semibold hover:bg-orange-500 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  