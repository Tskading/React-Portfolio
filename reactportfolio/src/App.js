import React from "react";
import Header from "./components/Header"
import ProjectCard from "./components/ProjectCard";
import About from "./pages/About";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
function App() {
  const pathName = window.location.pathname;

  const displayPage = () => {
    switch (pathName) {
      case "/":
        return <About />;
      case "/Work":
        return <Work />;
      case "/ContactMe":
        return <ContactMe />;
      case "/Resume":
        return <Resume />;
      default:
        return <About />  
    }
  }

  return (
    <div className="App">
      {console.log(pathName)}
      <Header />
      {displayPage()}
      <Footer />
    </div>
  );
}

export default App;
