import "./App.css";
import CV from "./pages/MainCV";
import DevOpsCV from "./pages/DevOpsCV";
import BackendCV from "./pages/BackendDevops";
import SupportCV from "./pages/Support";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CV />} />
          <Route exact path="/devops" element={<DevOpsCV />} />
          <Route exact path="/backend" element={<BackendCV />} />
          <Route exact path="/support" element={<SupportCV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
