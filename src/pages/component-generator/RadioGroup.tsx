import PageBase from "@components/PageBase/PageBase";

export default function RadioGroup() {
    const returnCode = `
        <div className="flex flex-col gap-2">
            {options.map((opt) => (
                <label key={opt.value} className="inline-flex items-center gap-2">
                    <input
                        type="radio"
                        name={name}
                        value={opt.value}
                        checked={selected === opt.value}
                        onChange={(e) => onChange(e.target.value)}
                        className="accent-blue-600"
                    />
                    <span className="text-gray-700">{opt.label}</span>
                </label>
            ))}
        </div>
    `;
    return (
        <PageBase
            defaultComponentName="RadioGroup"
            defaultPropsInput="name, options, selected, onChange"
            returnCode={returnCode}
        />
    );
}
