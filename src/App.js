import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Login from "./components/SignUp/Login";
import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
import AuthReq from "./Authenticate/AuthReq";
//import PrivateRoute from "./context/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/products" element={<PrivateRoute><Products /></PrivateRoute>} /> */}
        <Route
          exact
          path="/products"
          element={
            <AuthReq>
              <Products />
            </AuthReq>
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/* <Route exact path="/products/:id" element={<PrivateRoute><Cart /></PrivateRoute>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
