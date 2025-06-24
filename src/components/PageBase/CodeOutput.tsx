import { indentLine } from "@utils/IndentLine";
import { parseCommaList, inferPropType } from "@utils/codeOutputUtils";
import CodeVisualizator from "@components/CodeVisualizator/CodeVisualizator";

type CodeOutputProps = {
    componentName?: string;
    propsInput?: string;
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
    useStateInput,
    headerCode,
    bodyCode,
    returnCode,
    showAssets,
}: CodeOutputProps) {
    const generateComponentCode = (): string => {
        const props = parseCommaList(propsInput);
        const states = parseCommaList(useStateInput);

        const propsString = props.join(", ");
        const usesState = states.length > 0;

        const importLine = [
            ...(Array.isArray(headerCode) ? headerCode : [headerCode ?? ""]),
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
                      "",
                  ]
                : [];

        const functionSignature =
            props.length > 0 ? `{ ${propsString} }: ${componentName}Props` : "";

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
                  "",
              ]
            : [];

        const bodyLines = Array.isArray(bodyCode)
            ? bodyCode.map((line) => indentLine(line, 1))
            : [indentLine(bodyCode ?? "", 1)];

        const returnLines = [
            indentLine("return (", 1),
            indentLine((returnCode ?? "").trim(), 2),
            indentLine(");", 1),
        ];

        const componentLines = returnCode?.trim()
            ? [
                  `export default function ${componentName}(${functionSignature}) {`,
                  ...stateLines,
                  ...bodyLines,
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
