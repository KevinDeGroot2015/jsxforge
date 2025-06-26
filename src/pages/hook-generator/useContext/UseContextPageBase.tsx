import { useState } from "react";
import ContextCodeOutput from "./UseContextCodeOutput";
import FormField from "@components/FormField/FormField";

export default function ContextPageBase() {
    const [contextName, setContextName] = useState<string>("SideBar");
    const [stateInput, setStateInput] = useState<string>("isOpen");
    const [functionInput, setFunctionInput] =
        useState<string>("handleOpenMenu");

    const fields = [
        {
            label: "Context Name:",
            value: contextName,
            onChange: setContextName,
            placeholder: "e.g. SideBar",
        },
        {
            label: "UseState hooks (comma-separated):",
            value: stateInput,
            onChange: setStateInput,
            placeholder: "e.g. isOpen",
        },
        {
            label: "Functions (comma-separated):",
            value: functionInput,
            onChange: setFunctionInput,
            placeholder: "e.g. handleOpenMenu",
        },
    ];

    return (
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

            <ContextCodeOutput
                contextName={contextName}
                stateInput={stateInput}
                functionInput={functionInput}
            />
        </>
    );
}
