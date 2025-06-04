import { useState, useRef } from "react";

export default function ComponentBuilder() {
    const [componentName, setComponentName] = useState<string>("MyComponent");
    const [propsInput, setPropsInput] = useState<string>("title, onClick");
    const [copied, setCopied] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const generateComponentCode = (): string => {
        const props = propsInput
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);
        const propsString = props.join(", ");
        const propsDestructure = props.length > 0 ? `{ ${propsString} }` : "";
        const sampleJSX = "<div>Replace with your JSX</div>";

        return `function ${componentName}(${propsDestructure}) {
  return (
    ${sampleJSX}
  );
}

export default ${componentName};`;
    };

    const handleCopy = (): void => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.select();
            document.execCommand("copy");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    ⚛️ React Component Generator
                </h1>

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
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-800">
                        🧩 Generated Component
                    </h2>
                    <div className="relative rounded-xl overflow-hidden shadow">
                        <pre className="bg-slate-900 text-green-300 text-sm p-6 overflow-x-auto">
                            {generateComponentCode()}
                        </pre>
                        <textarea
                            ref={textareaRef}
                            className="absolute opacity-0 left-[-9999px]"
                            value={generateComponentCode()}
                            readOnly
                        />
                        <button
                            onClick={handleCopy}
                            className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-md"
                        >
                            {copied ? "✅ Copied!" : "📋 Copy"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
