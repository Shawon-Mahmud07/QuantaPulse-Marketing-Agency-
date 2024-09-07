import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/Navbar";
import Proposal from "./components/Proposal";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Banner />
      <Services/>
      <Proposal/>
    </div>
  );
}

export default App;
