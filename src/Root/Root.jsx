import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statics from "../Pages/Statics/Statics";

const myCreateRoot = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('data.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statics',
                element:<Statics></Statics>
            },
        ]
    }
])
export default myCreateRoot