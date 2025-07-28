import Card from "../components/ui/Card";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        title="Certain News"
        description="Full-stack news aggregation platform leveraging RSS parsing technology to curate real-time content from diverse news sources, delivering a seamless information discovery experience."
        icon={FaCode}
      />
      <Card
        title="Faith Streams"
        description="Modern streaming platform integrating Firebase and YouTube API for live service broadcasts. Engineered an intuitive frontend that enhances spiritual connectivity through technology."
        icon={FaPaintBrush}
      />
      <Card
        title="FT-Service Location"
        description="Location-based service application featuring an elegantly crafted UI/UX design. Optimized user journeys through intuitive navigation and responsive interactions."
        icon={FaServer}
      />
    </section>
  );
};

export default ProjectsPage;
