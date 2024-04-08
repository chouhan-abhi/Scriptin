import "./App.css";
import Loader from "./components/loader";
import AppRardarChartComponent from './components/charts/radar-chart'

function App() {
  return (
    <>
      <h1>ScriptIn</h1>
      <div className="scrollable-body">
        <AppRardarChartComponent />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="footer-container">
        <button className="shape-circle"> <img className="close-button" src="../public/ui-icons/close.svg"></img> </button>
      </div>
    </>
  );
}

export default App;
