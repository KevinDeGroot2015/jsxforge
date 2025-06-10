import ComponentBuilder from "./components/ComponentBuilder/ComponentBuilder";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

export default function App() {
    return (
        <>
            <Header />
            <ComponentBuilder />
            <Footer />
        </>
    );
}
