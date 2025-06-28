import Card from "../components/ui/Card";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        title="Frontend Development"
        description="Building beautiful, responsive UIs with React, TypeScript, and Tailwind CSS."
        icon={FaPaintBrush}
      />
      <Card
        title="Backend APIs"
        description="Designing robust RESTful APIs and scalable backend systems."
        icon={FaServer}
      />
      <Card
        title="Full-Stack Projects"
        description="Delivering complete solutions from database to UI, with a focus on performance and UX."
        icon={FaCode}
      />
    </section>
  );
};

export default Projects;
