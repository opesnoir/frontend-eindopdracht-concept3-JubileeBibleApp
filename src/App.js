import './App.css';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Favorite from "./pages/favorite/Favorite";
import Search from "./pages/search/Search";
import AboutJubilee from "./pages/aboutJubilee/AboutJubilee";
import AboutBible from "./pages/AboutBible/AboutBible";
import Profile from "./pages/profile/Profile";

function App() {
    const auth = false;

    return (

        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about-jubilee" element={<AboutJubilee/>}/>
                <Route path="/about-Bijbel" element={<AboutBible/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                {/*tijdelijke route profile, om de profile pagina te bouwen en testen*/}
                <Route path="profile" element={<Profile/>}/>
                <Route path="/login-favorite" element={auth === true ? <Favorite/> : <Navigate to="/search"/>}/>
                <Route path="/login-profile" element={auth === true ? <Profile/> : <Navigate to="/register"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
