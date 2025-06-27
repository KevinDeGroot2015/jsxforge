import PageBase from "@components/PageBase/PageBase";

export default function InputField() {
    const returnCode = `
        <div className="space-y-2">
            <label className="block text-slate-700 font-medium">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )}
        </div>
        `;

    return (
        <PageBase
            defaultComponentName="InputField"
            defaultPropsInput="label, value, onChange, placeholder, inputType"
            returnCode={returnCode}
        />
    );
}
