import PageBase from "@components/PageBase/PageBase";

export default function BasicComponentgenerator() {
    return (
        <PageBase
            defaultComponentName="MyComponent"
            defaultPropsInput="label, onClick"
            defaultUseStateInput="clicked"
            defaultUseTypescript={true}
        />
    );
}
