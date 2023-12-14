import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product-page";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}
export default App;
