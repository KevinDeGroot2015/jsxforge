import PageBase from "@components/PageBase/PageBase";

export default function Button() {
    const returnCode = `
        <button 
            onClick={onClick}
            disabled={disabled}
            className="text-xs font-semibold px-3 py-1.5 rounded shadow-md">
            {label}
        </button>
    `;
    return (
        <PageBase
            defaultComponentName="Button"
            defaultPropsInput="label, onClick, disabled"
            returnCode={returnCode}
        />
    );
}
