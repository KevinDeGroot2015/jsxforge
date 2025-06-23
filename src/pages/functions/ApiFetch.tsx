import PageBase from "@components/PageBase/PageBase";

export default function ApiFetch() {
    const returnCodeStaticApi = `// Fetch api static when recieving endpoint response.
import React, { useEffect, useState } from 'react';

const [apiData, setApiData] = useState(null);

useEffect(() => {
    (async () => {
        try {
            const result = await fetch('/app/endpoint', {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            const respData: ResponseDataProps = await result.json();

            setApiData(respData);

        } catch (error) {
            console.error("Api call failed:", error);
        }
    })();
}, []);
`;

    const returnCodeStaticApiPatch = `// PATCH api static when recieving endpoint response.
import React, { useState } from 'react';

const [errorMessage, setErrorMessage] = useState<string | null>(null);
const [data, setData] = useState<string | null>(null);

const patchApi = async () => {
    try {
        const result = await fetch('/api/product/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json'
            },
            body: JSON.stringify({ data }),
        });

        const respData = await result.json();

        if (!result.ok) {
            // Set error in Alert component
            setErrorMessage(respData.description);
        }

    } catch (error) {
        console.error("Api call failed:", error);
    }
};
`;
    const returnCodeStaticApiPostHead = `// POST api static when pushing formdata.
import React, { useState } from 'react';
`;

    const returnCodeStaticApiPostBody = `
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const postApiForm = async (formElement: HTMLFormElement) => {
        const formData = new FormData(formElement);

        // Extract individual fields
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;

        // Optional: validate fields
        if (!title || !description) {
            setErrorMessage('Title and description are required.');
            return;
        }

        // Build upload payload
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('title', title);

        try {
            const result = await fetch('/api/product/1', {
                method: 'POST',
                body: uploadFormData,
            });

            const respData = await result.json();

            if (!result.ok) {
                setErrorMessage(respData.description);
            }

        } catch (error) {
            console.error("Api call failed:", error);
        }
    };

    // The Form submit function
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        postApiForm(form);
    };
`;

    const returnCodeStaticApiPostReturn = `
        <form onSubmit={handleFormSubmit}>
            <input type="file" name="file" required />
            <input type="description" name="description" required />
            <button type="submit">Submit</button>
        </form>
`;
    return (
        <>
            <PageBase headerCode={returnCodeStaticApi} />
            <PageBase headerCode={returnCodeStaticApiPatch} />
            <PageBase
                defaultComponentName="FormSubmit"
                headerCode={returnCodeStaticApiPostHead}
                bodyCode={returnCodeStaticApiPostBody}
                returnCode={returnCodeStaticApiPostReturn}
            />
        </>
    );
}
