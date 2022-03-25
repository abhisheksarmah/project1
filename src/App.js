import "./App.css";
import ContactUsForm from "./components/ContactUsForm";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section1 />
      <ContactUsForm />
    </div>
  );
}

export default App;
