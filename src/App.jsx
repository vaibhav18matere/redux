import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:pid" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
