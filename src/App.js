import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="functionComp" element={<FunctionComponent />} />
        <Route path="classComp" element={<ClassComponent />} />
      </Routes>
    </div>
  );
}

export default App;
