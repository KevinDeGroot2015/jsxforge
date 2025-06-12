import PageBase from "@components/PageBase/PageBase";

export default function Button() {
    // const bodyCodeLines = `
    // const handleClick = () => {
    //     setClicked(!clicked);
    // };
    // `;

    return (
        <PageBase
            defaultComponentName="Button"
            defaultPropsInput="label, onClick"
            importCode={`import React from 'react';`}
            returnCode={`<button onClick={onClick}>{label}</button>`}
        />
    );
}
