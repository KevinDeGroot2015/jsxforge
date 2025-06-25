import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "@router/routes";
import { SideBarContext } from "@contexts/SideBarContext";

export default function Sidebar() {
    const { isOpen, setIsOpen, openGroups, setOpenGroups, toggleMenu } = useContext(SideBarContext);

    const toggleGroup = (group: string) => {
        setOpenGroups((prev) =>
            prev.includes(group)
                ? prev.filter((g) => g !== group)
                : [...prev, group]
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="bg-white w-100 h-full p-6"
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
                        <div className="h-[calc(100%-75px)] overflow-y-auto">
                            <nav className="flex flex-col gap-2">
                                {routes.map(({ group, items }) => (
                                    <div key={group} className="pb-2">
                                        <button
                                            onClick={() => toggleGroup(group)}
                                            className="flex justify-between items-center w-full font-medium"
                                        >
                                            {group}
                                            {openGroups.includes(group) ? (
                                                <ChevronDown className="w-4 h-4" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4" />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {openGroups.includes(group) && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    className="overflow-hidden pl-4 mt-4 flex flex-col gap-3"
                                                >
                                                    {items.map(
                                                        ({ path, title }) => (
                                                            <Link
                                                                key={path}
                                                                to={path}
                                                                onClick={toggleMenu}
                                                            >
                                                                {title}
                                                            </Link>
                                                        )
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
