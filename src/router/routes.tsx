import Alert from "@pages/components/Alert";
import Button from "@pages/components/Button";
import Card from "@pages/components/Card";
import FormField from "@pages/components/FormField";
import Modal from "@pages/components/Modal";
import ApiFetch from "@pages/functions/ApiFetch";
import BasicComponentgenerator from "@pages/general/BasicComponentGenerator";

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
                title: "Basic component generator",
                intro: "A simple component generator to create React components with TypeScript support.",
                element: <BasicComponentgenerator />,
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
            { path: "/api-fetch", title: "Api Fetch methods", intro: "Multiple variations when using a rest-API", element: <ApiFetch /> },
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
