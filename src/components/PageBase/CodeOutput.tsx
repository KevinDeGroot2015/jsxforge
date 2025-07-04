import { useMemo } from "react";
import { indentLine } from "@utils/IndentLine";
import { parseCommaList, inferPropType, capitalize } from "@utils/codeOutputUtils";
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
                usesState ? `import { useState } from 'react';` : "",
                ...(Array.isArray(headerCode)
                    ? headerCode
                    : [headerCode ?? ""]),
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
                          "",
                      ]
                    : [];

            const functionSignature =
                props.length > 0
                    ? `{ ${propsString} }: ${componentName}Props`
                    : "";

            const stateLines = usesState
                ? [
                      "",
                      ...states.map((state) =>
                          indentLine(
                              `const [${state}, set${capitalize(
                                  state
                              )}] = useState<any>();`,
                              1
                          )
                      ),
                      " ",
                  ]
                : [];

            const bodyLines = Array.isArray(bodyCode)
                ? bodyCode
                      .map((line) => indentLine(line, 2))
                      .filter((line) => line.trim() !== "")
                : [indentLine((bodyCode ?? "").trim(), 1)].filter(
                      (line) => line.trim() !== ""
                  );

            const returnLines = [
                indentLine("return (", 1),
                indentLine((returnCode ?? "").trim(), 2),
                indentLine(");", 1),
            ];

            const componentLines = returnCode?.trim()
                ? [
                      ` `,
                      `export default function ${componentName}(${functionSignature}) {`,
                      ...(stateLines.length > 0 ? stateLines : []),
                      ...(bodyLines.length > 0 ? bodyLines : []),
                      ...(returnLines.length > 0 ? returnLines : []),
                      `}`,
                  ]
                : [];

            return [...importLine, ...typeLines, ...componentLines]
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

