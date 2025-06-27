import { useMemo } from "react";
import { indentLine } from "@utils/IndentLine";
import { parseCommaList, inferPropType } from "@utils/codeOutputUtils";
import CodeVisualizator from "@components/CodeVisualizator/CodeVisualizator";

type ContextCodeOutputProps = {
    contextName: string;
    stateInput: string;
    functionInput?: string;
};

export default function UseContextCodeOutput({
    contextName,
    stateInput,
    functionInput,
}: ContextCodeOutputProps) {
    const contextComponentCode = useMemo((): string => {
        const stateEntries = parseCommaList(stateInput);
        const functionEntries = parseCommaList(functionInput);

        const typeLines: string[] = [];
        const stateLines: string[] = [];
        const functionLines: string[] = [];
        const contextInit: string[] = [];
        const valueProps: string[] = [];

        stateEntries.forEach((name) => {
            const { type, defaultValue } = inferPropType(name);

            typeLines.push(
                indentLine(`${name}: ${type};`, 1),
                indentLine(
                    `set${name}: React.Dispatch<React.SetStateAction<${type}>>;`,
                    1
                )
            );

            stateLines.push(
                indentLine(
                    `const [${name}, set${name}] = useState<${type}>(${defaultValue});`,
                    1
                )
            );

            contextInit.push(
                indentLine(`${name}: ${defaultValue},`, 1),
                indentLine(`set${name}: () => {}`, 1)
            );

            valueProps.push(`${name}, set${name}`);
        });

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
    }, [contextName, stateInput, functionInput]);

    const providerCode = useMemo((): string => {
        return [
            `import { ${contextName}Provider } from "contexts/${contextName}Context";`,
            "",
            `<${contextName}Provider>`,
            indentLine(`{Place the Provider around your section}`, 1),
            `</${contextName}Provider>`,
        ].join("\n");
    }, [contextName]);

    const contextCode = useMemo((): string => {
        return [
            `import { useContext } from 'react';`,
            `import { ${contextName}Provider } from "contexts/${contextName}Context";`,
            "",
            `const { ${stateInput}, ${functionInput} } = useContext(${contextName}Context);`,
        ].join("\n");
    }, [contextName, stateInput, functionInput]);

    return (
        <>
            <CodeVisualizator
                title="useContext template"
                codeFunction={() => contextComponentCode}
            />
            <CodeVisualizator
                title="Provider component"
                codeFunction={() => providerCode}
            />
            <CodeVisualizator
                title="Context component"
                codeFunction={() => contextCode}
            />
        </>
    );
}
