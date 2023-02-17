// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
// import ParentComponets from "./components/ParentComponents"
import ContextProvider from "./components/Context";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </ContextProvider>
      {/* <ParentComponets /> */}
    </div>
  );
}

export default App;
