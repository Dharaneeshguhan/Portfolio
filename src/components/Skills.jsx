const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-white py-16 px-4 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Programming Languages */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
                name: "C",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
                name: "C++",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
                name: "Java",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-orange-100 rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-medium text-gray-800">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                name: "HTML",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                name: "CSS",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                name: "JavaScript",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "React",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-orange-100 rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-medium text-gray-800">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="md:col-span-2 text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Tools & Frameworks
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
                name: "Spring Boot",
              },
              {
                img: "https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
                name: "MongoDB",
              },
              {
                img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
                name: "Git",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                name: "Node.js",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
                name: "Bootstrap",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-orange-100 rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-medium text-gray-800">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
