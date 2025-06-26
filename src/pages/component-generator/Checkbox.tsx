import PageBase from "@components/PageBase/PageBase";

export default function CheckBox() {
    const returnCode = `
        <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="accent-blue-600" />
            <span className="text-gray-700">{label}</span>
        </label>
    `;
    return (
        <PageBase
            defaultComponentName="CheckBox"
            defaultPropsInput="label, checked, onChange"
            returnCode={returnCode}
        />
    );
}
