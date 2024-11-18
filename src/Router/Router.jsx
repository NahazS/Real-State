import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllProperty from "../Pages/Propertys/AllProperty";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignIn/SignUp";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import WishList from "../Pages/WishList/WishList";
import FullDetails from "../Pages/FullDetailsProperty/FullDetails";
import PrivateRoute from "./PrivateRoute";

export const  router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/all_property',
                element: <AllProperty></AllProperty>,
            },
            {
                path: '/all_property/:id',
                element: <FullDetails></FullDetails>,
                loader: () => fetch('property.json')
            },
            {
                path: '/update_profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
                
            },
            {
                path: '/wish_list',
                element: <WishList></WishList>,
                
            },
            {
                path: '/sign_in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign_up',
                element: <SignUp></SignUp>
            },
        ]
    }
])