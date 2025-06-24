import UseContextPageBase from "@pages/hooks/useContext/UseContextPageBase";
import { ApiFetchDescription } from "@constants/routes/functions";
import { AboutDescription, BasicComponentgeneratorDescription, privacyPolicyDescription } from "@constants/routes/general";
import Alert from "@pages/layout&containers/Alert";
import Button from "@pages/forms&input/Button";
import Card from "@pages/layout&containers/Card";
import FormField from "@pages/forms&input/FormField";
import Modal from "@pages/layout&containers/Modal";
import ApiFetch from "@pages/functions/ApiFetch";
import { UsecontextCustomizerDescription } from "@constants/routes/hooks";
import TextArea from "@pages/forms&input/TextArea";
import CheckBox from "@pages/forms&input/Checkbox";
import RadioGroup from "@pages/forms&input/RadioGroup";
import ToggleSwitch from "@pages/forms&input/ToggleSwitch";
import SelectDropdown from "@pages/forms&input/SelectDropdown";
import FileUploaders from "@pages/forms&input/FileUploaders";
import SearchInput from "@pages/forms&input/SearchInput";

export type RouteItem = {
    path: string;
    title: string;
    intro?: string;
    element: React.ReactElement;
};

export type RouteGroup = {
    group: string;
    description?: string;
    items: RouteItem[];
};

export const routes = [
    {
        group: "General",
        items: [
            {
                path: "/",
                title: "Welcome to JsxForge",
                intro: BasicComponentgeneratorDescription,
                element: <></>,
            },
            {
                path: "/about",
                title: "About JSXForge",
                intro: AboutDescription,
                element: <></>,
            },
            {
                path: "/privacy-policy",
                title: "Privacy Policy",
                intro: privacyPolicyDescription,
                element: <></>,
            },
        ],
    },
    {
        group: "Forms & input",
        items: [
            { path: "/button", title: "Button", element: <Button /> },
            { path: "/formfield", title: "Form Field", element: <FormField /> },
            { path: "/textarea", title: "Text Area", element: <TextArea /> },
            { path: "/checkbox", title: "Checkbox", element: <CheckBox /> },
            { path: "/radiogroup", title: "Radio Group", element: <RadioGroup /> },
            { path: "/toggleswitch", title: "Toggle Switch", element: <ToggleSwitch /> },
            { path: "/selectdropdown", title: "Select Dropdown", element: <SelectDropdown /> },
            { path: "/fileuploaders", title: "File uploaders (select & drag)", element: <FileUploaders /> },
            { path: "/searchinput", title: "Search input", element: <SearchInput /> },
        ],
    },
    {
        group: "Layout & Containers",
        items: [
            { path: "/alert", title: "Alert", element: <Alert /> },
            { path: "/modal", title: "Modal", element: <Modal /> },
            { path: "/card", title: "Card", element: <Card /> },
        ],
    },
    {
        group: "Functions",
        items: [
            { path: "/api-fetch", title: "Rest-Api functions", intro: ApiFetchDescription, element: <ApiFetch /> },
        ],
    },
    {
        group: "Hooks",
        items: [
            { path: "/useContext", title: "UseContext Customizer", intro: UsecontextCustomizerDescription, element: <UseContextPageBase /> },
        ],
    },
    // {
    //     group: "Templates",
    //     items: [
    //         { path: "/dashboard", title: "Dashboard" },
    //         { path: "/login", title: "Login" },
    //     ],
    // },
];

export default routes as RouteGroup[];
