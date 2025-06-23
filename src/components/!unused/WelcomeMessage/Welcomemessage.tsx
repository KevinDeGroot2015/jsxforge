import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function WelcomeMessage() {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (!Cookies.get("welcomemessage")) setShow(true);
    }, []);

    const closeModal = () => {
        Cookies.set("welcomemessage", "true", { expires: 30 });
        setShow(false);
    };

    if (!show) return null;

    return (
        <div
            id="modal-backdrop"
            className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50"
        >
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4">Welcome to JsxForge</h2>
                <p className="mb-4">
                    This site is mainly intended for myself to use templates and
                    components for active projects.<br /><br />
                    Everyone is welcome to use it and will be supplemented in the future where necessary.<br /><br />
                    Not everything works optimally yet (such as the Typescript component definitions), but I am working on it.<br /><br />
                    All the components are intergrated with <a href="https://tailwindcss.com/" target="_blank">TailwindCss</a>.
                </p>
                <button
                    onClick={closeModal}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
}
