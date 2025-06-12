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
            { path: "/button", title: "Button" },
            { path: "/card", title: "Card" },
        ],
    },
    {
        group: "Templates",
        items: [
            { path: "/dashboard", title: "Dashboard" },
            { path: "/login", title: "Login" },
        ],
    },
];

export default routes as RouteGroup[];
