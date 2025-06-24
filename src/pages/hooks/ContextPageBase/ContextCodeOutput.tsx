import { indentLine } from "@utils/IndentLine";
import {
    parseCommaList,
    inferPropType,
    capitalize,
} from "@utils/codeOutputUtils";
import CodeVisualizator from "@components/CodeVisualizator/CodeVisualizator";

type ContextCodeOutputProps = {
    contextName: string;
    stateInput: string;
    functionInput?: string;
};

export default function ContextCodeOutput({
    contextName,
    stateInput,
    functionInput,
}: ContextCodeOutputProps) {
    const generateContextCode = (): string => {
        const stateEntries = parseCommaList(stateInput);
        const functionEntries = parseCommaList(functionInput);

        const typeLines: string[] = [];
        const stateLines: string[] = [];
        const functionLines: string[] = [];
        const contextInit: string[] = [];
        const valueProps: string[] = [];

        stateEntries.forEach((name) => {
            const capitalized = capitalize(name);
            const { type, defaultValue } = inferPropType(name);

            typeLines.push(
                indentLine(`${name}: ${type};`, 1),
                indentLine(
                    `set${capitalized}: React.Dispatch<React.SetStateAction<${type}>>;`,
                    1
                )
            );

            stateLines.push(
                indentLine(
                    `const [${name}, set${capitalized}] = useState<${type}>(${defaultValue});`,
                    1
                )
            );

            contextInit.push(
                indentLine(`${name}: ${defaultValue},`, 1),
                indentLine(`set${capitalized}: () => {}`, 1)
            );

            valueProps.push(`${name}, set${capitalized}`);
        });

        // Handle functions
        functionEntries.forEach((funcName) => {
            const inferred = `${funcName}: () => void;`;
            const defaultImpl = `${funcName}: () => {},`;

            typeLines.push(indentLine(inferred, 1));
            functionLines.push(indentLine(`const ${funcName} = () => {};`, 1));
            contextInit.push(indentLine(defaultImpl, 1));
            valueProps.push(funcName);
        });

        const typeDef = [
            `type ${contextName}ContextProps = {`,
            ...typeLines,
            `};\n`,
        ];

        const contextCreate = `export const ${contextName}Context = createContext<${contextName}ContextProps>({\n${contextInit.join(
            "\n"
        )}\n});`;

        const provider = [
            `export const ${contextName}Provider = ({ children }: { children: React.ReactNode }) => {`,
            ...stateLines,
            ...functionLines,
            "",
            indentLine(`return (`, 1),
            indentLine(`<${contextName}Context.Provider value={{`, 2),
            ...valueProps.map((p) => indentLine(p + ",", 3)),
            indentLine(`}}>`, 2),
            indentLine(`{children}`, 3),
            indentLine(`</${contextName}Context.Provider>`, 2),
            indentLine(`);`, 1),
            `};`,
        ];

        return [
            `import { createContext, useState } from "react";`,
            "",
            ...typeDef,
            contextCreate,
            "",
            ...provider,
        ].join("\n");
    };

    return (
        <CodeVisualizator
            title="useContext template"
            codeFunction={generateContextCode}
        />
    );
}
