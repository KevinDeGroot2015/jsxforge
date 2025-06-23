import { indentLine } from "@utils/IndentLine";
import { parseCommaList, inferPropType } from "@utils/codeOutputUtils";
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
    showAssets?: boolean;
};

export default function CodeOutput({
    componentName,
    propsInput,
    useTypescript,
    useStateInput,
    headerCode,
    bodyCode,
    returnCode,
    showAssets,
}: CodeOutputProps) {
    const generateComponentCode = (): string => {
        const props = parseCommaList(propsInput);
        const states = parseCommaList(useStateInput);
        const usesTS = useTypescript;

        const propsString = props.join(", ");
        const usesState = states.length > 0;

        const importLine = [
            ...(Array.isArray(headerCode) ? headerCode : [headerCode ?? ""]),
            usesState ? [`import { useState } from 'react';`] : "",
            " ",
        ];

        const typeLines =
            usesTS && props.length > 0
                ? [
                      `type ${componentName}Props = {`,
                      ...props.map((prop) =>
                          indentLine(`${prop}: ${inferPropType(prop)};`, 1)
                      ),
                      `};\n`,
                  ]
                : [];

        const functionSignature =
            props.length > 0
                ? usesTS
                    ? `{ ${propsString} }: ${componentName}Props`
                    : `{ ${propsString} }`
                : "";

        const stateLines = usesState
            ? [
                  "",
                  ...states.map((state) =>
                      indentLine(
                          `const [${state}, set${capitalize(
                              state
                          )}] = useState${usesTS ? "<any>" : ""}();`,
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
                  ...(Array.isArray(bodyCode) ? bodyCode : [bodyCode ?? ""]),
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
        const props = parseCommaList(propsInput);

        const propEntries = props.map((prop) =>
            prop.startsWith("on") ? `${prop}={() => {}}` : `${prop}={${prop}}`
        );

        return `<${componentName} ${propEntries.join(" ")} />`;
    };

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

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
