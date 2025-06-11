import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className="flex items-center justify-start p-4 bg-white shadow-md">
                <button onClick={toggleMenu}>
                    <Menu className="w-6 h-6" />
                </button>
                <h1>
                    <Link to="/" className="font-bold text-slate-800!">
                    ⚛️ Jsx Forge
                    </Link>
                </h1>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                    >
                        <motion.div
                            className="bg-white w-64 h-full p-6"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <button onClick={toggleMenu}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-4">
                                <a href="#home" className="hover:text-blue-600">
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="hover:text-blue-600"
                                >
                                    About
                                </a>
                                <a
                                    href="#services"
                                    className="hover:text-blue-600"
                                >
                                    Services
                                </a>
                                <a
                                    href="#contact"
                                    className="hover:text-blue-600"
                                >
                                    Contact
                                </a>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
