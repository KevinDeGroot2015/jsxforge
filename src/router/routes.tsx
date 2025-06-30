import { ApiFetchDescription } from "@constants/routes/functions";
import { AboutDescription, WelcomeDescription, privacyPolicyDescription } from "@constants/routes/general";
import { UsecontextCustomizerDescription } from "@constants/routes/hook-generator";
import { BlogPageDescription } from "@constants/routes/template-generator";
import Alert from "@pages/component-generator/Alert";
import Button from "@pages/component-generator/Button";
import Card from "@pages/component-generator/Card";
import InputField from "@pages/component-generator/InputField";
import Modal from "@pages/component-generator/Modal";
import ApiFetch from "@pages/functions/ApiFetch";
import CheckBox from "@pages/component-generator/Checkbox";
import RadioGroup from "@pages/component-generator/RadioGroup";
import ToggleSwitch from "@pages/component-generator/ToggleSwitch";
import SelectDropdown from "@pages/component-generator/SelectDropdown";
import FileUploaders from "@pages/component-generator/FileUploaders";
import SearchInput from "@pages/component-generator/SearchInput";
import UseContextPageBase from "@pages/hook-generator/UseContext/UseContextPageBase";
import UseToggle from "@pages/hook-generator/UseToggle";
import BlogPage from "@pages/template-generator/BlogPage";
import BasicComponentgenerator from "@components/BasicComponentGenerator/BasicComponentGenerator";

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
        group: "JsxForge",
        items: [
            {
                path: "/",
                title: "Welcome to JsxForge",
                intro: WelcomeDescription,
                element: <BasicComponentgenerator />,
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
        group: "Component Generator",
        items: [
            { path: "/button", title: "Button", element: <Button /> },
            { path: "/inputfield", title: "Input Field", element: <InputField /> },
            { path: "/checkbox", title: "Checkbox", element: <CheckBox /> },
            { path: "/radiogroup", title: "Radio Group", element: <RadioGroup /> },
            { path: "/toggleswitch", title: "Toggle Switch", element: <ToggleSwitch /> },
            { path: "/selectdropdown", title: "Select Dropdown", element: <SelectDropdown /> },
            { path: "/fileuploaders", title: "File uploaders (select & drag)", element: <FileUploaders /> },
            { path: "/searchinput", title: "Search input", element: <SearchInput /> },
            { path: "/alert", title: "Alert", element: <Alert /> },
            { path: "/modal", title: "Modal", element: <Modal /> },
            { path: "/card", title: "Card", element: <Card /> },
        ],
    },
    {
        group: "Functions",
        items: [
            { path: "/api-fetch", title: "Rest-Api fetch/post functions", intro: ApiFetchDescription, element: <ApiFetch /> },
        ],
    },
    {
        group: "Hook Generator",
        items: [
            { path: "/useContext", title: "UseContext Customizer", intro: UsecontextCustomizerDescription, element: <UseContextPageBase /> },
            { path: "/useToggle", title: "UseToggle (custom)", element: <UseToggle /> },
        ],
    },
    {
        group: "Template Generator",
        items: [
            { path: "/blogpage", title: "Blog Page", intro: BlogPageDescription , element: <BlogPage /> },
        ],
    },
];

export default routes as RouteGroup[];
