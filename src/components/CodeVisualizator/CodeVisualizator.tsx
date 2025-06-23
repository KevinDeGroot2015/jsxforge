import { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
    codeFunction: () => string;
    title?: string;
};

export default function CodeBlock({ codeFunction, title }: CodeBlockProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.value = codeFunction();
            textarea.select();
            navigator.clipboard.writeText(textarea.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <>
            {title && <h2 className="font-bold pt-4">{title}</h2>}
            <SyntaxHighlighter
                language="tsx"
                style={oneDark}
                showLineNumbers={true}
                customStyle={{
                    padding: "1.5rem",
                    borderRadius: "0.75rem",
                }}
            >
                {codeFunction()}
            </SyntaxHighlighter>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-1 text-xs font-semibold px-3 py-1.5 rounded shadow-md border border-solid"
            >
                {copied ? "✅ Copied!" : "📋 Copy"}
            </button>
            <textarea
                ref={textareaRef}
                className="absolute -left-[9999px] top-0 w-px h-px opacity-0 pointer-events-none"
                value={codeFunction()}
                readOnly
            />
        </>
    );
}
