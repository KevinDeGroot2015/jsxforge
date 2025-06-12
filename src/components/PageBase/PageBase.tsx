import { useState } from "react";
import CodeOutput from "@components/CodeOutput/CodeOutput";
import FormField from "@components/FormField/FormField";

interface PageBaseProps {
    defaultComponentName?: string;
    defaultPropsInput?: string;
    defaultUseStateInput?: string;
    defaultUseTypescript?: boolean;
    customCode?: string;
}

export default function PageBase({
    defaultComponentName = "MyComponent",
    defaultPropsInput = "children",
    defaultUseStateInput = "",
    defaultUseTypescript = true,
    customCode,
}: PageBaseProps) {
    const [componentName, setComponentName] = useState(defaultComponentName);
    const [propsInput, setPropsInput] = useState(defaultPropsInput);
    const [useStateInput, setUsestateInput] = useState(defaultUseStateInput);
    const [useTypescript, setUseTypescript] = useState(defaultUseTypescript);

    const fields = [
        {
            label: "Component Name:",
            value: componentName,
            onChange: setComponentName,
            placeholder: "e.g. Button",
        },
        {
            label: "Props (comma-separated):",
            value: propsInput,
            onChange: setPropsInput,
            placeholder: "e.g. title, onClick",
        },
        {
            label: "useState (comma-separated):",
            value: useStateInput,
            onChange: setUsestateInput,
            placeholder: "e.g. count, name",
        },
    ];

    return (
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
                {fields.map((field, index) => (
                    <FormField key={index} {...field} />
                ))}
            </div>

            <CodeOutput
                componentName={componentName}
                propsInput={propsInput}
                useTypescript={useTypescript}
                useStateInput={useStateInput}
                customCode={customCode}
            />
        </>
    );
}
