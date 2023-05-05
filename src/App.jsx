import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Components/Error";
import Searchbar from "./Components/Searchbar";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Searchbar />
                <Homepage />
              </Layout>
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
