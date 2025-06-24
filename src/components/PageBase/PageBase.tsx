import { useState } from "react";
import CodeOutput from "@components/PageBase/CodeOutput";
import FormField from "@components/FormField/FormField";

type PageBaseProps = {
    defaultComponentName?: string | undefined;
    defaultPropsInput?: string;
    defaultUseStateInput?: string;
    headerCode?: string | string[];
    bodyCode?: string | string[];
    returnCode?: string;
    codeLanguage?: string;
    showAssets?: boolean;
};

export default function PageBase({
    defaultComponentName,
    defaultPropsInput,
    defaultUseStateInput,
    headerCode,
    bodyCode,
    returnCode,
    codeLanguage,
    showAssets = true,
}: PageBaseProps) {
    const [componentName, setComponentName] = useState(defaultComponentName);
    const [propsInput, setPropsInput] = useState(defaultPropsInput);
    const [useStateInput, setUsestateInput] = useState(defaultUseStateInput);
    const fields = [
        {
            label: "Component Name:",
            value: componentName,
            onChange: setComponentName,
            placeholder: "e.g. Button",
        },
        {
            label: "Props (comma-separated):",
            value: propsInput ?? "",
            onChange: setPropsInput,
            placeholder: "e.g. title, onClick",
        },
        {
            label: "useState (comma-separated):",
            value: useStateInput ?? "",
            onChange: setUsestateInput,
            placeholder: "e.g. count, name",
        },
    ];

    return (
        <>
            {showAssets && (
                <>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {fields.map((field) => (
                            <FormField
                                key={field.label}
                                {...field}
                                value={field.value ?? ""}
                            />
                        ))}
                    </div>
                </>
            )}
            <CodeOutput
                componentName={componentName}
                propsInput={propsInput}
                useStateInput={useStateInput}
                headerCode={headerCode}
                bodyCode={bodyCode}
                returnCode={returnCode}
                codeLanguage={codeLanguage}
                showAssets={showAssets}
            />
        </>
    );
}
