import "./App.css";
import Banner from "./components/banner";
import CaseStudies from "./components/CaseStudies";
import Navbar from "./components/Navbar";
import Proposal from "./components/Proposal";
import Services from "./components/Services";
import Team from "./components/Team";
import WorkingProcess from "./components/WorkingProcess";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Banner />
      <Services/>
      <Proposal />
      <CaseStudies />
      <WorkingProcess/>
      <Team/>
    </div>
  );
}

export default App;
