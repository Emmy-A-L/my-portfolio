import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WelcomeScreen from "./components/ui/WelcomeScreen";

const App = () => {
  const [welcomeDone, setWelcomeDone] = useState(false);
  return (
    <>
      {!welcomeDone && (
        <WelcomeScreen
          message="Bridging The Gap Between Idea And Reality Through Technology"
          onFinish={() => setWelcomeDone(true)}
          fadeDelay={300}
        />
      )}
      {welcomeDone && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add other routes here */}
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
