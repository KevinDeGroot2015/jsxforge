export const UsecontextCustomizerDescription = (
    <>
        <section className="space-y-4">
            <h2 className="font-bold text-gray-800">What is it?</h2>
            <p className="text-gray-700">
                This component helps you quickly scaffold a fully-typed React
                Context setup using{" "}
                <span className="font-semibold">TypeScript</span> and{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                    useContext
                </code>
                .
            </p>
        </section>

        <section className="space-y-4 mt-6">
            <h2 className="font-bold text-gray-800">
                What does it generate?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>A context type definition</li>
                <li>
                    An initial{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        createContext
                    </code>{" "}
                    with default values
                </li>
                <li>
                    A provider component with internal state using{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        useState
                    </code>
                </li>
                <li>
                    A fully-wired{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        Context.Provider
                    </code>{" "}
                    including all values and setters
                </li>
            </ul>
        </section>

        <section className="space-y-4 mt-6">
            <h2 className="font-bold text-gray-800">Why use it?</h2>
            <p className="text-gray-700">
                Just define your state variables and their types —{" "}
                <span className="font-semibold">JSXForge</span> handles the
                rest.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sharing global state across components</li>
                <li>Avoiding prop drilling</li>
                <li>Keeping your context logic clean and reusable</li>
            </ul>
        </section>

        <section className="space-y-4 mt-6">
            <h2 className="font-bold text-gray-800">
                Production-ready
            </h2>
            <p className="text-gray-700">
                It uses consistent naming, type-safe definitions, and clean
                formatting — ready for production use.
            </p>
        </section>
    </>
);
