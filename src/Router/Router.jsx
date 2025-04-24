import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllTreatment from "../components/AllTreatment";
import MyAppoinment from "../components/MyAppoinment";
import Login from "../components/Login";
import Details from "../components/Details";
import Register from "../components/Register";
import PrivetRoute from "../components/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    const servicesRes = await fetch("/data.json");
                    const servicesData = await servicesRes.json();

                    const reviewRes = await fetch('/review.json');
                    const reviewData = await reviewRes.json();
                    return { servicesData, reviewData };
                }
            },
            {
                path: '/allTreatment',
                element: <AllTreatment />,
                loader: () => fetch("/data.json"),
            },
            {
                path: '/myAppoinment',
                element: <MyAppoinment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/details/:id',
                element: <PrivetRoute>
                    <Details />
                </PrivetRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/data.json');
                    const data = await res.json();
                    const singleData = data.find((d) => d?.id == params?.id);
                    console.log(singleData);
                    return singleData;
                }
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;