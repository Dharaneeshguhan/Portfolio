import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  const certificates = [
    {
      title: "Mastering DataStructures & Algorithms in C",
      organization: "Udemy",
      issueDate: "Nov 2023",
      link: "https://www.udemy.com/certificate/UC-4446ed7b-5d5a-4a1e-97f6-13720a6baf0b/",
    },
    {
      title: "Java Beginner to Master",
      organization: "Udemy",
      issueDate: "Aug 2024",
      link: "https://www.udemy.com/certificate/UC-84dbe4b7-5c73-4777-8652-c5da7603f99c/",
    },
    {
      title: "Fundamental Algorithms: Design and Analysis",
      organization: "NPTEL",
      issueDate: "Mar 2025",
      link: "https://drive.google.com/drive/folders/1jLNFBLkph1hm8Jm2gAoNt8WtX7vBzlwz",
    },
  ];

  return (
    <section
      id="certifications"
      className="w-full bg-gradient-to-tr from-orange-50 via-amber-100 to-yellow-50 py-16 px-4 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Certifications
      </h2>
      <p className="text-gray-700 mb-10 text-center max-w-xl">
        Verified certifications I've earned through learning platforms and courses.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col transition-all duration-300"
          >
            <div className="flex items-center mb-4 text-orange-500 text-3xl">
              <FaAward className="mr-2" />
              <span className="text-xl font-semibold text-gray-800">{cert.title}</span>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Institution:</strong> {cert.organization}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Date:</strong> {cert.issueDate}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
