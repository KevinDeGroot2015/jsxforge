import PageBase from "@components/PageBase/PageBase";

export default function FormField() {
    const returnCode = `
        <div>
            <label>{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
        `;

    return (
        <PageBase
            defaultComponentName="FormField"
            defaultPropsInput="label, value, onChange, placeholder"
            returnCode={returnCode}
        />
    );
}
