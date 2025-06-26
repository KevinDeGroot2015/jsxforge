import PageBase from "@components/PageBase/PageBase";

export default function SelectDropdown() {
    const returnCode = `
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                {opt.label}
                </option>
            ))}
            </select>
        </div>
    `;
    return (
        <PageBase
            defaultComponentName="SelectDropdown"
            defaultPropsInput="label, options, value, onChange"
            returnCode={returnCode}
        />
    );
}
