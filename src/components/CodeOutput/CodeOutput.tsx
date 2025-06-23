import { indentLine } from "@utils/IndentLine";
import CodeVisualizator from "@components/CodeVisualizator/CodeVisualizator";

type CodeOutputProps = {
    componentName?: string;
    propsInput?: string;
    useTypescript: boolean;
    useStateInput?: string;
    headerCode?: string | string[];
    bodyCode?: string | string[];
    returnCode?: string;
    codeLanguage?: string;
};

export default function CodeOutput({
    componentName,
    propsInput,
    useTypescript,
    useStateInput,
    headerCode,
    bodyCode,
    returnCode,
}: CodeOutputProps) {
    const generateComponentCode = (): string => {
        const props = (propsInput ?? "")
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);

        const states = (useStateInput ?? "")
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);

        const propsString = props.join(", ");
        const usesTS = useTypescript;
        const usesState = useStateInput;

        const importLine = [
            headerCode,
            usesState
                ? `import { useState } from 'react';
            `
                : "",
        ];

        const typeLines =
            usesTS && props.length > 0
                ? [
                      `type ${componentName}Props = {`,
                      ...props.map((p) => indentLine(`${p}: any;`, 1)),
                      `};
                      `,
                  ]
                : [];

        const functionSignature =
            props.length > 0
                ? usesTS
                    ? `{ ${propsString} }: ${componentName}Props`
                    : `{ ${propsString} }`
                : "";

        const stateLines =
            usesState && states.length > 0
                ? [
                      "",
                      ...states.map((p) =>
                          indentLine(
                              `const [${p}, set${
                                  p.charAt(0).toUpperCase() + p.slice(1)
                              }] = useState${usesTS ? "<any>" : ""}();`,
                              1
                          )
                      ),
                      "",
                  ]
                : [];

        const returnLines = [
            indentLine("return (", 1),
            indentLine((returnCode ?? "").trim(), 2),
            indentLine(");", 1),
        ];

        const componentLines = returnCode?.trim()
            ? [
                  `export default function ${componentName}(${functionSignature}) {`,
                  ...stateLines,
                  bodyCode,
                  ...returnLines,
                  `}`,
              ]
            : [];

        return [...importLine, ...typeLines, ...componentLines]
            .filter(Boolean)
            .join("\n");
    };

    const generateJSXPreview = (): string => {
        if (!componentName) return "";

        const props = (propsInput ?? "")
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);

        const propEntries = props.map((prop) => {
            if (prop.startsWith("on")) {
                return `${prop}={() => {}}`;
            }
            return `${prop}="..."`;
        });

        return `<${componentName} ${propEntries.join(" ")} />`;
    };

    return (
        <>
            <div className="relative rounded-xl overflow-hidden shadow mb-5">
                <CodeVisualizator codeFunction={generateComponentCode} />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow mb-5 mt-8">
                <CodeVisualizator
                    title="Component"
                    codeFunction={generateJSXPreview}
                />
            </div>
        </>
    );
}
