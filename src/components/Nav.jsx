import { useState,useContext } from "react";
import { ThemeContext } from "./themeContext";
import { BrowserRouter, Link } from "react-router-dom";
import lightMode from '@iconify-icons/bi/sun-fill';
import darkMode from '@iconify-icons/bi/moon-fill';
import { Icon } from "@iconify/react/dist/iconify.js";

function Nav(){
    const [active,setActive] = useState("");
    const {theme,setTheme} = useContext(ThemeContext);
    const toggleNav = (e)=>{
        setActive(e.target.innerText.trim());
    }
    const toggleLight = ()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return(
        <BrowserRouter>
        <div className={`${theme==="light"?"bg-[linear-gradient(90deg,#e0e7c6,#b7eef0)]":"bg-[linear-gradient(90deg,#27012c,#501c57)] text-white"} border-b-2 border-black flex items-center justify-between px-5 fixed w-full top-0`}>
            <Link to="" onClick={()=>setActive("")}>
                <img className="w-16" src="/logo.png" alt="" />
            </Link>
            <div onClick={toggleLight} className={`w-16 border-2 pt-[2px] h-6 border-blue-500 rounded-xl ${theme==="light"?"":"bg-[#100222]"}`}>
                <Icon className={`transition-all ${theme==="light"?"translate-x-1":"translate-x-10 text-white"}`} icon={theme==="light"?lightMode:darkMode}/>
            </div>
            <nav className="flex gap-3">
                <Link to="#about" onClick={toggleNav} className={`text-lg border-b-2 hover:border-b-blue-600 transition-colors ${active==="About"?`border-b-blue-600 ${theme==="light"?"text-gray-500":"text-white"}`:`border-b-transparent ${theme==="light"?"text-gray-500":"text-white"}`}`}>About</Link>
                <Link to="#contact" onClick={toggleNav} className={`text-lg border-b-2 hover:border-b-blue-600 transition-colors ${active==="Contact"?`border-b-blue-600 ${theme==="light"?"text-gray-500":"text-white"}`:`border-b-transparent ${theme==="light"?"text-gray-500":"text-white"}`}`}>Contact</Link>
                <Link to="#faq" onClick={toggleNav} className={`text-lg border-b-2 hover:border-b-blue-600 transition-colors ${active==="FAQ"?`border-b-blue-600 ${theme==="light"?"text-gray-500":"text-white"}`:`border-b-transparent ${theme==="light"?"text-gray-500":"text-white"}`}`}>FAQ</Link>
            </nav>
        </div>
        </BrowserRouter>
    )
}
export default Nav;