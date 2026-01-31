import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiDjango
} from "react-icons/si";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { icon: SiReact, name: "React.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiDjango, name: "Django" },
    { icon: FaAws, name: "AWS" },
    { icon: VscAzure, name: "Azure" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="border-b-2 border-gray-900 dark:border-gray-100 pb-4 mb-8"
        >
          <h1 className="text-5xl font-serif font-bold text-gray-900 dark:text-white text-center">
            The Developer Chronicle
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2 font-serif">
            Volume 1, Issue 1 -{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image and Social Links */}
          <motion.div variants={itemVariants} className="md:w-1/3 shrink-0">
            <div className="relative rounded-lg overflow-hidden border-4 border-gray-900 dark:border-gray-100 shadow-xl">
              <img
                src="/Emma.png"
                alt="Emmanuel Lot"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center space-x-4 border-t border-gray-300 dark:border-gray-700 pt-4">
              <a
                href="https://github.com/Emmy-A-L"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/lot-emmanuel-abiodun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/TheOriginalLot?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Bio Section */}
          <div className="md:w-2/3">
            <motion.div
              variants={itemVariants}
              className="prose dark:prose-invert max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
                From idea to execution
              </h2>
              <div className="font-serif">
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  As a dedicated Full-Stack Developer with one year of hands-on
                  experience, Emmanuel Lot has established himself as a
                  craftsman of robust and user-centric web applications. His
                  journey in software development stands as a testament to his
                  unwavering commitment to bridging the gap between innovative
                  ideas and practical solutions.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                  In his portfolio of accomplishments, Emmanuel has successfully
                  delivered several impactful projects that showcase his
                  technical versatility. Notable among these is a sophisticated
                  real-time news aggregation platform leveraging RSS technology,
                  a seamless streaming service integration utilizing Firebase
                  and YouTube API, and an intuitive location-based service
                  application.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                  "My approach to development is holistic," Emmanuel explains.
                  "It's about combining technical expertise with a deep
                  understanding of user experience. Each line of code should
                  contribute to creating solutions that not only work flawlessly
                  but truly enhance people's daily interactions with
                  technology."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Expertise Section - Full Width */}
        <motion.div
          variants={itemVariants}
          className="mt-12 border-t-2 border-gray-900 dark:border-gray-100 pt-8"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <skill.icon className="text-2xl text-gray-700 dark:text-gray-300" />
                <span className="text-gray-900 dark:text-gray-100 font-serif">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
            <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 font-serif italic">
              Click to contact the developer
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
