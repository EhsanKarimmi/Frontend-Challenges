import Home from "../pages/home/Home";
import Page01 from "../pages/Page01";
import Page02 from "../pages/Page02";

export const listOfRoutes: { path: string; element: JSX.Element }[] = [
    { path: "/", element: <Home /> },
    { path: "/1", element: <Page01 /> },
    { path: "/2", element: <Page02 /> },
];
