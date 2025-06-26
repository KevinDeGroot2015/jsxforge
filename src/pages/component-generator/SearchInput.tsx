import PageBase from "@components/PageBase/PageBase";

export default function SearchInput() {
    const returnCode = `
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full border rounded pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
            🔍
            </span>
        </div>
    `;
    return (
        <PageBase
            defaultComponentName="SearchInput"
            defaultPropsInput="value, onChange, placeholder"
            returnCode={returnCode}
        />
    );
}
