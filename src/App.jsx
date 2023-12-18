import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import TentangSayaPages from "./pages/TentangSayaPages";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path='/' Component={HomePages}/>
        <Route path='/tentangSaya' Component={TentangSayaPages}/>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
