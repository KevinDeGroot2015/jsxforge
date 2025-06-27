import PageBase from "@components/PageBase/PageBase";

export default function Alert() {
    const returnCode = `
        <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <strong className="font-bold">{title}</strong>
            <span className="block sm:inline">{body}</span>
            <span
                onClick={() => setVisible(false)}
                className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer text-xl"
            >
                &times;
            </span>
        </div>
    `;

    const bodyCode = `
    if (!visible) return null;
    `;

    return (
        <PageBase
            defaultComponentName="Alert"
            defaultPropsInput="title, body, setVisible"
            defaultUseStateInput="visible"
            bodyCode={bodyCode}
            returnCode={returnCode}
        />
    );
}
