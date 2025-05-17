const Experience = () => {
    const experiences = [
      {
        company: "Intern PE",
        role: "Python Intern",
        period: "June 2023 - July 2023",
        description:
          "During my InternPe internship, I gained hands-on experience building interactive and dynamic web applications. Recognized as a top developer for outstanding project delivery.",
        logo: "data:image/jpeg;base64,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",
      },
    ];
  
    return (
      <section
        id="experience"
        className="w-full bg-white py-16 px-4 md:px-10 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Professional Experience
        </h2>
  
        <div className="max-w-5xl w-full flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-full h-full object-cover rounded-full border-2 border-orange-400"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-orange-500">
                  {exp.company}
                </h3>
                <p className="text-md text-gray-600 mb-2">
                  <strong>{exp.role}</strong> | {exp.period}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;
  