import PageBase from "@components/PageBase/PageBase";

export default function Button() {
    return (
        <PageBase
            defaultComponentName="Button"
            defaultPropsInput="label, onClick"
            defaultUseStateInput="clicked"
        />
    );
}
