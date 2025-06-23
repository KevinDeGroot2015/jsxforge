export const ApiFetchDescription = (
    <>
        <section>
            <h2 className="font-semibold text-gray-800 mb-2">
                1. Static fetch API on component mount
            </h2>
            <p className="text-gray-700">
                This template demonstrates how to perform a static{" "}
                <code className="bg-gray-100 px-1 rounded">GET</code> request
                using the Fetch API when a React component mounts. The request
                is placed inside a{" "}
                <code className="bg-gray-100 px-1 rounded">useEffect</code> hook
                to ensure it runs once on load. The JSON response is saved to
                state for use in the UI.
            </p>
            <p className="text-gray-700 mt-2">
                <strong>Use case:</strong> Load static or read-only data like
                configurations or lists when the page loads.
            </p>
        </section>

        <section>
            <h2 className="font-semibold text-gray-800 mb-2">
                2. PATCH API request with error handling
            </h2>
            <p className="text-gray-700">
                This template performs a{" "}
                <code className="bg-gray-100 px-1 rounded">PATCH</code> request
                to partially update an existing resource. It includes proper
                content-type headers and captures server-side validation errors,
                displaying them in the UI via state.
            </p>
            <p className="text-gray-700 mt-2">
                <strong>Use case:</strong> Update specific fields (e.g., product
                color or name) without replacing the entire resource.
            </p>
        </section>

        <section>
            <h2 className="font-semibold text-gray-800 mb-2">
                3. POST API form submission with file upload
            </h2>
            <p className="text-gray-700">
                This template provides a form-based submission using{" "}
                <code className="bg-gray-100 px-1 rounded">POST</code> and{" "}
                <code className="bg-gray-100 px-1 rounded">FormData</code> to
                handle file uploads. It extracts field values, validates them,
                and submits them along with a file to the API. Error responses
                are caught and reflected in the UI.
            </p>
            <p className="text-gray-700 mt-2">
                <strong>Use case:</strong> Create new entries or upload files
                through forms (e.g., product uploads or user submissions).
            </p>
        </section>
    </>
);
