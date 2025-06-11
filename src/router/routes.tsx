import Home from "@pages/Home";

export type Routes = {
    path: string;
    title: string;
    intro?: string;
    element: React.ReactElement;
};

export const routes = [
    {
        path: "/",
        title: "Basic component generator",
        intro: "A simple component generator to create React components with TypeScript support.",
        element: <Home />,
    },
];

export default routes as Routes[];
