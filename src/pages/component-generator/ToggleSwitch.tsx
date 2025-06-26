import PageBase from "@components/PageBase/PageBase";

export default function ToggleSwitch() {
    const bodyCode = `
    const handleChange = () => {
        setEnabled(!enabled);
    }
    `;

    const returnCode = `
        <button
            onClick={handleChange}
            className={\`w-12 h-6 flex items-center rounded-full p-1 transition-colors \${enabled ? 'bg-blue-600' : 'bg-gray-300'}\`}
        >
            <div
                className={\`bg-white w-4 h-4 rounded-full shadow transform transition-transform \${enabled ? 'translate-x-6' : 'translate-x-0'}\`}
            />
        </button>
    `;
    
    return (
        <PageBase
            defaultComponentName="ToggleSwitch"
            defaultPropsInput="setEnabled"
            bodyCode={bodyCode}
            returnCode={returnCode}
        />
    );
}
