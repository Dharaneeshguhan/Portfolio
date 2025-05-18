import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Learn with joy",
      description:
        "Learn with Joy is a modern, full-stack e-learning platform designed to provide an engaging and personalized learning experience. It features secure user and admin authentication, course previews for paid content, full access for free courses, note-taking for each course, a shopping cart with payment handling, and intelligent features like progress tracking and AI-driven recommendations.",
      domain: "Website Development using React",
      techStack: "React.js, MongoDB, Tailwind CSS, Node.js",
      link: "https://github.com/Dharaneeshguhan/E-Learning-platform",
    },
    {
      title: "Smart Step",
      description:
        "Developed an IoT-based animal rest monitoring system using NodeMCU (ESP8266) and an MPU6050 accelerometer. The system captures animal movement data, stores it locally, and transmits it via HTTP to a Spring Boot backend when near a Wi-Fi signal. It helps monitor animal health efficiently in low-connectivity farm areas.",
      domain: "Webpage Development using React",
      techStack: "Java, React.js, Spring Boot, MySQL, NodeMCU",
      link: "https://github.com/Dharaneeshguhan/Cattle_Monitoring",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6 text-center">
        Projects
      </h2>
      <p className="text-gray-300 mb-12 text-center max-w-2xl">
        Innovations in Technology and Leadership
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-gray-800 to-gray-900 border border-orange-400 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-white"
          >
            <div>
              <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-orange-200">Domain:</h4>
                <p className="text-sm text-gray-300">{project.domain}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-orange-200">Tech Stack:</h4>
                <p className="text-sm text-gray-300">{project.techStack}</p>
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 self-start flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300"
            >
              View Project <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
