import ContextPageBase from "@pages/hooks/ContextPageBase/ContextPageBase";
import { ApiFetchDescription } from "@constants/routes/functions";
import { AboutDescription, BasicComponentgeneratorDescription, privacyPolicyDescription } from "@constants/routes/general";
import Alert from "@pages/components/Alert";
import Button from "@pages/components/Button";
import Card from "@pages/components/Card";
import FormField from "@pages/components/FormField";
import Modal from "@pages/components/Modal";
import ApiFetch from "@pages/functions/ApiFetch";
import { UsecontextCustomizerDescription } from "@constants/routes/hooks";

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
        group: "Components",
        items: [
            { path: "/alert", title: "Alert", element: <Alert /> },
            { path: "/button", title: "Button", element: <Button /> },
            { path: "/formfield", title: "Form field", element: <FormField /> },
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
            { path: "/useContext", title: "UseContext Customizer", intro: UsecontextCustomizerDescription, element: <ContextPageBase /> },
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
