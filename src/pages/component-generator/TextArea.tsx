import PageBase from "@components/PageBase/PageBase";

export default function TextArea() {
    const returnCode = `
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
            />
        </div>
    `;
    return (
        <PageBase
            defaultComponentName="TextArea"
            defaultPropsInput="label, value, onChange"
            returnCode={returnCode}
        />
    );
}
