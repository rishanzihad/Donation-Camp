import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statics from "../Pages/Statics/Statics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Error from "../Components/Error/Error";


const myCreateRoot = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statics',
                element:<Statics></Statics>
            },
            {
                path:'/details/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=> fetch('/data.json')
            },
            
            
            
        ],
        
    },
    
])
export default myCreateRoot