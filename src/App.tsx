import { BrowserRouter } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Layout from "@layout/Layout";
import "@assets/styles/index.css";
import { SideBarProvider } from "@contexts/SideBarContext";
import WelcomeMessage from "@components/WelcomeMessage/Welcomemessage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <WelcomeMessage />
                <SideBarProvider>
                    <Header />
                </SideBarProvider>
                <Layout />
                <Footer />
            </BrowserRouter>
        </>
    );
}
