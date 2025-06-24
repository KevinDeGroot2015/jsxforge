import PageBase from "@components/PageBase/PageBase";

export default function FormField() {
    const returnCode = `
        <div className="space-y-2">
            <label className="block text-slate-700 font-medium">{label}</label>
            <input
                className="border border-slate-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
