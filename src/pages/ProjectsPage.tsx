// import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import { FaNewspaper, FaTruck } from "react-icons/fa";
import { MdDashboard, MdOutlineLiveTv, MdTravelExplore } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

const ProjectsPage = () => {
  // const navigate = useNavigate()
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        title="Dream Trust Shipping"
        description="Full-stack shipping web application designed to give users insights on the business' services, and provide payment and shipment tracking features for customers."
        icon={FaTruck}
        onClick={() =>
          window.open("https://shipping-co-three.vercel.app", "_blank")
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
      <Card
        title="Certain News"
        description="Full-stack news aggregation platform leveraging RSS parsing technology to curate real-time content from diverse news sources, delivering a seamless information discovery experience."
        icon={FaNewspaper}
        onClick={() =>
          window.open("https://appcertain-news.vercel.app", "_blank")
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
      <Card
        title="Faith Streams"
        description="Modern streaming platform integrating Firebase and YouTube API for live service broadcasts. Engineered an intuitive frontend that enhances spiritual connectivity through technology."
        icon={MdOutlineLiveTv}
        onClick={() =>
          window.open("https://faith-stream-ruddy.vercel.app", "_blank")
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
      <Card
        title="FT-Service Location"
        description="Location-based service application featuring an elegantly crafted UI/UX design. Optimized user journeys through intuitive navigation and responsive interactions."
        icon={FaLocationCrosshairs}
        onClick={() =>
          window.open(
            "https://ft-service-and-loading-bays.vercel.app/",
            "_blank"
          )
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
      <Card
        title="Lamtad travels"
        description="Frontend travel platform providing users with personalized itineraries, booking options, and real-time updates. Built with a focus on user experience and performance."
        icon={MdTravelExplore}
        onClick={() =>
          window.open("https://lamtad-travel-agency.vercel.app", "_blank")
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
      <Card
        title="Mini Time Tracking Dashboard"
        description="Modern time tracking dashboard built with React and Firebase. Features real-time collaboration, task management, and insightful analytics."
        icon={MdDashboard}
        onClick={() =>
          window.open(
            "https://time-tracking-dashboard-user.vercel.app",
            "_blank"
          )
        }
        children={
          <p className="text-gray-500 dark:text-gray-400 -mt-2">
            Click to view project
          </p>
        }
      />
    </section>
  );
};

export default ProjectsPage;
