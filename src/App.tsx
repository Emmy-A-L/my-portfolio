import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WelcomeScreen from "./components/ui/WelcomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import './App.css'

const App = () => {
  const [welcomeDone, setWelcomeDone] = useState(() => {
    // Check if user has seen the welcome screen before
    return localStorage.getItem("welcomeScreenSeen") === "true";
  });

  const handleWelcomeFinish = () => {
    setWelcomeDone(true);
    // Store that user has seen the welcome screen
    localStorage.setItem("welcomeScreenSeen", "true");
  };

  return (
    <>
      {!welcomeDone && (
        <WelcomeScreen
          message="Bridging The Gap Between Idea And Reality Through Technology"
          onFinish={handleWelcomeFinish}
          fadeDelay={300}
        />
      )}
      {welcomeDone && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Add other routes here */}
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
