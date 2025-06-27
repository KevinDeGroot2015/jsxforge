import { createContext, useState } from "react";

type SideBarContextProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openGroups: string[];
    setOpenGroups: React.Dispatch<React.SetStateAction<string[]>>;
    toggleMenu: () => void;
};

type SideBarContextProvideProps = {
    children: React.ReactNode;
};

export const SideBarContext = createContext<SideBarContextProps>({
    isOpen: false,
    setIsOpen: () => {},
    openGroups: [],
    setOpenGroups: () => {},
    toggleMenu: () => {},
});

export const SideBarProvider = ({ children }: SideBarContextProvideProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openGroups, setOpenGroups] = useState<string[]>(["General"]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <SideBarContext.Provider
            value={{ isOpen, setIsOpen, openGroups, setOpenGroups, toggleMenu }}
        >
            {children}
        </SideBarContext.Provider>
    );
};
