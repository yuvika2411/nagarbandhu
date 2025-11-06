import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import UploadScreen from "./components/UploadScreen";
import TrackScreen from "./components/TrackScreen";
import ProfileScreen from "./components/ProfileScreen";
import ReviewScreen from "./components/ReviewScreen";
import SuccessScreen from "./components/SuccessScreen";
import { NavigationProvider } from "./components/navigation";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  return (
    <NavigationProvider onNavigate={setCurrentScreen}>
      {currentScreen === "home" && <HomeScreen />}
      {currentScreen === "upload" && <UploadScreen />}
      {currentScreen === "track" && <TrackScreen />}
      {currentScreen === "profile" && <ProfileScreen />}
      {currentScreen === "review" && <ReviewScreen />}
      {currentScreen === "success" && <SuccessScreen />}
    </NavigationProvider>
  );
}

export default App;
