import { Routes, Route, useLocation } from "react-router";
import routes from "@router/routes";

export default function Layout() {
    const location = useLocation();
    const pageRouteItems = routes.flatMap((group) => group.items);
    const currentRoute = pageRouteItems.find(
        (route) => route.path === location.pathname
    );

    return (
        <div
            style={{ minHeight: "calc(100vh - 130px)" }}
            className="bg-gradient-to-br from-slate-100 to-slate-200 p-2 md:p-8"
        >
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 space-y-4">
                {currentRoute && (
                    <>
                        <h2 className="text-2xl font-bold">
                            {currentRoute.title}
                        </h2>
                        {currentRoute.intro && <p>{currentRoute.intro}</p>}
                    </>
                )}
                <Routes>
                    {pageRouteItems.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}
