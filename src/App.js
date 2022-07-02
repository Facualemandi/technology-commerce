import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Notebook/Product";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Notebook/:name" element={<Product />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
