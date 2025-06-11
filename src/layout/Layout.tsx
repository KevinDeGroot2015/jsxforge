import { Routes, Route } from "react-router";
import routes from '../router/routes';

export default function Layout() {
    return (
        <>
            <div
                style={{ minHeight: "calc(100vh - 40px)" }}
                className="bg-gradient-to-br from-slate-100 to-slate-200 p-8"
            >
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 space-y-4">
                    <Routes>
                        {routes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </div>
            </div>
        </>
    );
}
