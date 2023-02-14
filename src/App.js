// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
// import ParentComponets from "./components/ParentComponents"

import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
      {/* <ParentComponets /> */}
    </div>
  );
}

export default App;
