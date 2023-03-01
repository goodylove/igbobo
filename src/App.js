// import logo from "./logo.svg";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
// import ParentComponets from "./components/ParentComponents"
import ContextProvider from "./components/Context";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";

import Succesful from "./pages/succesful";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkoutpage" element={<CheckOutPage />} />
          <Route path="/succesful" element={<Succesful />} />
        </Routes>
      </ContextProvider>
      {/* <ParentComponets /> */}
    </div>
  );
}

export default App;
