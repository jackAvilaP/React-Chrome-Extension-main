import { HashRouter, Routes, Route} from "react-router-dom";

//Components
import NavBar from "../components/navBar";

//Pages
import Filter from "../pages/Filter";
import Login from "../pages/Login";
import ResultSearch from "../pages/ResultSearch";


const Routers = () => {
   
    return (
      <HashRouter >    
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/resultSearch" element={<ResultSearch />} />
        </Routes>
      </HashRouter>
    );
  };
  
  export default Routers;