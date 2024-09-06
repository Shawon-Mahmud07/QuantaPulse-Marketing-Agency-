import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Banner />
      <Services/>
    </div>
  );
}

export default App;
