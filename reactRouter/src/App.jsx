import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {

    // const Navbar = () => {
    //   const navigate = useNavigate();

    //   const handleClick =() =>{
    //     navigate("/users")
    //   }
    // }

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/users" element= {<Users />} />
        {/* <li onClick={handleClick}>Users</li> */}
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/user/:username" element= {<User />} />
        <Route path="*" element= {<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;