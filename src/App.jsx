import "./styles.css";
import Navbarr from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import GetInTouchForm from "./Components/GetInTouch";
export default function App() {
  return (
    <>
      <Navbarr />
      <Home />
      <Skills/>
      <Projects/>
      <GetInTouchForm/>
    </>
  );
}
