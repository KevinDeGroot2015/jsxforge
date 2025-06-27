import { useMemo } from "react";
import { indentLine } from "@utils/IndentLine";
import { parseCommaList, inferPropType } from "@utils/codeOutputUtils";
import CodeVisualizator from "@components/CodeVisualizator/CodeVisualizator";

type CodeOutputProps = {
    componentName?: string;
    propsInput?: string;
    useStateInput?: string;
    headerCode?: string;
    bodyCode?: string;
    returnCode?: string;
    showAssets?: boolean;
};

export default function CodeOutput({
    componentName,
    propsInput,
    useStateInput,
    headerCode,
    bodyCode,
    returnCode,
    showAssets,
}: CodeOutputProps) {
    const generateComponentCode = useMemo(() => {
        return () => {
            const props = parseCommaList(propsInput);
            const states = parseCommaList(useStateInput);

            const propsString = props.join(", ");
            const usesState = states.length > 0;

            const importLine = [
                headerCode,
                usesState ? `import { useState } from 'react';` : "",
                " ",
            ];

            const typeLines =
                props.length > 0
                    ? [
                          `type ${componentName}Props = {`,
                          ...props.map((prop) => {
                              const { type } = inferPropType(prop);
                              return indentLine(`${prop}: ${type};`, 1);
                          }),
                          `};`,
                          " ",
                      ]
                    : [];

            const functionSignature =
                props.length > 0
                    ? `{ ${propsString} }: ${componentName}Props`
                    : "";

            const stateLines = usesState
                ? [
                      ...states.map((state) =>
                          indentLine(
                              `const [${state}, set${state}] = useState<any>();`,
                              1
                          )
                      ),
                  ]
                : [];

            const bodyLines = [indentLine(bodyCode ?? "", 2)];

            const returnLines = [
                indentLine("return (", 1),
                indentLine((returnCode ?? "").trim(), 2),
                indentLine(");", 1),
            ];

            const componentLines = [
                `export default function ${componentName}(${functionSignature}) {`,
                ...(stateLines.length > 0 ? stateLines : []),
                ...(bodyLines.length > 0 ? bodyLines : []),
                ...(returnLines.length > 0 ? returnLines : []),
                `}`,
            ];

            return [
                ...(importLine.length > 0 ? importLine : []),
                ...(typeLines.length > 0 ? typeLines : []),
                ...(componentLines.length > 0 ? componentLines : []),
            ]
                .filter(Boolean)
                .join("\n");
        };
    }, [
        componentName,
        propsInput,
        useStateInput,
        headerCode,
        bodyCode,
        returnCode,
    ]);

    const generateJSXPreview = useMemo(() => {
        return () => {
            if (!componentName) return "";
            const props = parseCommaList(propsInput);

            const propEntries = props.map((prop) =>
                prop.startsWith("on")
                    ? `${prop}={() => {}}`
                    : `${prop}={${prop}}`
            );

            return `<${componentName} ${propEntries.join(" ")} />`;
        };
    }, [componentName, propsInput]);

    return (
        <>
            <CodeVisualizator codeFunction={generateComponentCode} />
            {showAssets && (
                <CodeVisualizator
                    title="Component"
                    codeFunction={generateJSXPreview}
                />
            )}
        </>
    );
}
