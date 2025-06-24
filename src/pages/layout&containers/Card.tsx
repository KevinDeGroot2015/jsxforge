import PageBase from "@components/PageBase/PageBase";

export default function Card() {
    const returnCode = `
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src={imgSrc ? imgSrc : "https://source.unsplash.com/random/400x300"}
                alt="Card"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                    {body}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={onClick}>
                    Action
                </button>
            </div>
        </div>
    `;

    return (
        <PageBase
            defaultComponentName="Card"
            defaultPropsInput="imgSrc, title, body, onClick"
            returnCode={returnCode}
        />
    );
}

