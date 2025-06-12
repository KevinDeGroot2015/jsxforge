import { useState } from "react";
import CodeOutput from "@components/CodeOutput/CodeOutput";

export default function BasicComponentgenerator() {
    const [componentName, setComponentName] = useState("MyComponent");
    const [propsInput, setPropsInput] = useState("children");
    const [useStateInput, setUsestateInput] = useState("");
    const [useTypescript, setUseTypescript] = useState(true);

    return (
        <>
            <label className="flex items-center space-x-2 text-slate-700 font-medium">
                <input
                    type="checkbox"
                    checked={useTypescript}
                    onChange={(e) => setUseTypescript(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Use TypeScript</span>
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="block text-slate-700 font-medium">
                        Component Name:
                    </label>
                    <input
                        className="border border-slate-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={componentName}
                        onChange={(e) => setComponentName(e.target.value)}
                        placeholder="e.g. Button"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-slate-700 font-medium">
                        Props (comma-separated):
                    </label>
                    <input
                        className="border border-slate-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={propsInput}
                        onChange={(e) => setPropsInput(e.target.value)}
                        placeholder="e.g. title, onClick"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-slate-700 font-medium">
                        useState (comma-separated):
                    </label>
                    <input
                        className="border border-slate-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={useStateInput}
                        onChange={(e) => setUsestateInput(e.target.value)}
                        placeholder="e.g. title, onClick"
                    />
                </div>
            </div>

            <CodeOutput
                componentName={componentName}
                propsInput={propsInput}
                useTypescript={useTypescript}
                useStateInput={useStateInput}
            />
        </>
    );
}
