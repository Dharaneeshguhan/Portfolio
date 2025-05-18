import { motion } from "framer-motion";

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
      className="w-full bg-gray-950 py-20 px-5 md:px-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-center text-lg mb-12 max-w-2xl"
      >
        Highlights of my academic background and achievements.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <span className="text-sm text-orange-400">{edu.period}</span>
              </div>
            </div>
            <div className="mb-2 text-sm text-gray-400">{edu.degree}</div>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-orange-500 bg-orange-500/10 rounded-full">
              {edu.score}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
