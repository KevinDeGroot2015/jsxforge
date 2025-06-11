import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./layout/Layout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Layout />
                <Footer />
            </BrowserRouter>
        </>
    );
}
