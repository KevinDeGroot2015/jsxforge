import { useState } from "react";
import CodeOutput from "@components/CodeOutput/CodeOutput";
import FormField from "@components/FormField/FormField";

type PageBaseProps = {
    defaultComponentName?: string | undefined;
    defaultPropsInput?: string;
    defaultUseStateInput?: string;
    importCode?: string | string[];
    bodyCode?: string | string[];
    returnCode?: string;
    codeLanguage?: string;
};

export default function PageBase({
    defaultComponentName,
    defaultPropsInput,
    defaultUseStateInput,
    importCode,
    bodyCode,
    returnCode,
    codeLanguage,
}: PageBaseProps) {
    const [componentName, setComponentName] = useState(defaultComponentName);
    const [propsInput, setPropsInput] = useState(defaultPropsInput);
    const [useStateInput, setUsestateInput] = useState(defaultUseStateInput);
    const [useTypescript, setUseTypescript] = useState(true);

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
            {componentName && (
                <>
                    <label className="flex items-center space-x-2 text-slate-700 font-medium mb-4">
                        <input
                            type="checkbox"
                            checked={useTypescript}
                            onChange={(e) => setUseTypescript(e.target.checked)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span>Use TypeScript</span>
                    </label>

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
                useTypescript={useTypescript}
                useStateInput={useStateInput}
                importCode={importCode}
                bodyCode={bodyCode}
                returnCode={returnCode}
                codeLanguage={codeLanguage}
            />
        </>
    );
}
