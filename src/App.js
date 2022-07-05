import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Context/authContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MonitorDescript from "./Pages/Monitores/MonitorDescript";
import Notebook from "./Pages/Notebook/Notebook";
import PlacaDeVideo from "./Pages/PlacaDeVideo/PlacaDeVideo";
import Register from "./Pages/Register/Register";
import TotalMonitores from "./Pages/TotalMonitores.js/TotalMonitores";
import TotalNotebooks from "./Pages/TotalNotebooks/TotalNotebooks";
import TotalPlacas from "./Pages/TotalPlacas.js/TotalPlacas";

function App() {
  return (
    <>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Notebook/:name" element={<Notebook />} />
            <Route path="/PlacaDeVideo/:name" element={<PlacaDeVideo />} />
            <Route path="/Monitor/:name" element={<MonitorDescript />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Notebooks" element={<TotalNotebooks />} />
            <Route path="/PlacasDeVideo" element={<TotalPlacas/>} />
            <Route path="/Monitores" element={<TotalMonitores/>}/>

          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </>
  );
}

export default App;
