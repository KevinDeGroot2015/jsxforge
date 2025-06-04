import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeOutputProps = {
    componentName: string;
    propsInput: string;
    useTypescript: boolean;
    useStatePerProp: boolean;
};

export default function CodeOutput({
    componentName,
    propsInput,
    useTypescript,
    useStatePerProp,
}: CodeOutputProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [copied, setCopied] = useState(false);

    const generateComponentCode = (): string => {
        const props = propsInput
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);

        const propsString = props.join(", ");
        const sampleJSX = "<div>Replace with your JSX</div>";

        const usesTS = useTypescript;
        const usesState = useStatePerProp;

        const importLine = usesState
            ? [`import { useState } from 'react';`, " "]
            : [];

        const typeLines =
            usesTS && props.length > 0
                ? [
                      `type ${componentName}Props = {`,
                      ...props.map((p) => `  ${p}: any;`),
                      `};`,
                      " ",
                  ]
                : [];

        const stateLines =
            usesState && props.length > 0
                ? [
                      "",
                      ...props.map(
                          (p) =>
                              `  const [${p}, set${
                                  p.charAt(0).toUpperCase() + p.slice(1)
                              }] = useState<any>();`
                      ),
                      " ",
                  ]
                : [];

        const functionSignature =
            props.length > 0
                ? usesTS
                    ? `{ ${propsString} }: ${componentName}Props`
                    : `{ ${propsString} }`
                : " ";

        const componentLines = [
            "",
            `export default function ${componentName}(${functionSignature}) {`,
            ...stateLines,
            `  return (`,
            `    ${sampleJSX}`,
            `  );`,
            `}`,
        ];

        return [...importLine, ...typeLines, ...componentLines]
            .filter(Boolean)
            .join("\n");
    };

    const handleCopy = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.select();
            document.execCommand("copy");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
                🧩 Generated Component
            </h2>
            <div className="relative rounded-xl overflow-hidden shadow">
                <SyntaxHighlighter
                    language="typescript"
                    style={oneDark}
                    customStyle={{
                        padding: "1.5rem",
                        borderRadius: "0.75rem",
                    }}
                >
                    {generateComponentCode()}
                </SyntaxHighlighter>
                <textarea
                    ref={textareaRef}
                    className="absolute -left-[9999px] top-0 w-px h-px opacity-0 pointer-events-none"
                    value={generateComponentCode()}
                    readOnly
                />
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-1 text-xs font-semibold px-3 py-1.5 rounded shadow-md"
                >
                    {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
            </div>
        </div>
    );
}
