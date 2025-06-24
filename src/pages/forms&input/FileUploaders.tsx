import PageBase from "@components/PageBase/PageBase";

export default function FileUploaders() {
    const bodyCodeSinleUploader = `
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onFileSelect(file);
    };
    `;

    const returnCodeSinleUploader = `
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Upload een bestand</label>
            <input
                type="file"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
        </div>
    `;

    const headerCodeDragUploader = `// Drag and drop file uploader component
import { useRef } from 'react';`;

    const bodyCodeDragUploader = `
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileDrop(e.dataTransfer.files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileDrop(e.target.files[0]);
        }
    };
  `;

    const returnCodeDragUploader = `
        <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={\`border-2 border-dashed rounded p-6 text-center cursor-pointer transition-colors \${dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}\`}
            onClick={() => inputRef.current?.click()}
        >
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={handleChange}
            />
            <p className="text-gray-600">
                {dragActive ? 'Drop here to upload' : 'Click or drag a file here to upload'}
            </p>
        </div>
    `;


    return (
        <>
            <PageBase
                defaultComponentName="SingleFileUploader"
                defaultPropsInput="onFileDrop"
                headerCode="// Single file uploader component"
                bodyCode={bodyCodeSinleUploader}
                returnCode={returnCodeSinleUploader}
            />
            <PageBase
                defaultComponentName="DragFileUploader"
                defaultPropsInput="onFileSelect"
                defaultUseStateInput="dragActive"
                headerCode={headerCodeDragUploader}
                bodyCode={bodyCodeDragUploader}
                returnCode={returnCodeDragUploader}
            />
        </>
    );
}
