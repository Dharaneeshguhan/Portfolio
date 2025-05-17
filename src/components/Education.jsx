const Education = () => {
    const educationDetails = [
      {
        institution: "Sri Eshwar College of Engineering",
        period: "2023 - 2027",
        score: "CGPA: 7.82",
        degree: "Bachelors in Electronics and Communication Engineering",
        icon: "🎓",
      },
      {
        institution: "Adharsh Vidhalaya Metric Higher Secondary School",
        period: "2021 - 2023",
        score: "Percentage: 78%",
        degree: "Standard - 12th (HSC)",
        icon: "🎓",
      },
      {
        institution: "Adharsh Vidhalaya Metric Higher Secondary School",
        period: "2019 - 2021",
        score: "Percentage: 82%",
        degree: "Standard - 10th (SSLC)",
        icon: "🎓",
      },
    ];
  
    return (
      <section
        id="education"
        className="w-full bg-gray-50 py-16 px-4 md:px-10 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Education
        </h2>
  
        <div className="max-w-5xl w-full flex flex-col gap-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mr-6 mb-4 md:mb-0">{edu.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-orange-500">
                  {edu.institution}
                </h3>
                <p className="text-md text-gray-600">{edu.period} | {edu.score}</p>
                <p className="text-gray-700 mt-2">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Education;
  