import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import SideBar from "@components/Sidebar/SideBar";
import { SideBarContext } from "@contexts/SideBarContext";

export default function Header() {
    const { toggleMenu } = useContext(SideBarContext);
    
    return (
        <>
            <header className="flex items-center justify-start space-x-2 p-4 bg-white shadow-md">
                <button onClick={toggleMenu} className="flex items-center justify-center">
                    <Menu className="w-6 h-6 pr-2" />
                    <div>Menu</div>
                </button>
                <div>
                    <Link to="/" className="text-2xl font-bold text-slate-800!">
                        JSXForge – Free React Component Generator
                    </Link>
                    <p className="text-slate-400">React/Typescript components, templates and more</p>
                </div>
            </header>
            <SideBar />
        </>
    );
}
