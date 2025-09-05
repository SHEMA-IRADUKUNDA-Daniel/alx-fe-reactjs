import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
