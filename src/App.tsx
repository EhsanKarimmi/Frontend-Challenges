import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { listOfRoutes } from "./components/ListOfRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {listOfRoutes.map((route: { path: string; element: JSX.Element }) => {
                        return <Route path={route.path} element={route.element} />;
                    })}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
