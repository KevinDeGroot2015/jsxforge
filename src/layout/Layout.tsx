import { Routes, Route } from "react-router";
import routes from "@router/routes";
import React from "react";

export default function Layout() {
    return (
        <div
            style={{ minHeight: "calc(100vh - 130px)" }}
            className="bg-gradient-to-br from-slate-100 to-slate-200 p-2 md:p-8"
        >
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 space-y-4">
                {routes.map(({ path, title, intro }) => (
                    <React.Fragment key={path}>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p>{intro}</p>
                    </React.Fragment>
                ))}
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}
