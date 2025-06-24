import PageBase from "@components/PageBase/PageBase";

export default function Modal() {
    const returnCode = `
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                        <h2 className="text-xl font-semibold mb-4">Title</h2>
                        <p className="mb-6">Body</p>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 rounded bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={ Custom action}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>;
    `;

    return (
        <PageBase
            defaultComponentName="Modal"
            defaultUseStateInput="isOpen"
            returnCode={returnCode}
        />
    );
}
