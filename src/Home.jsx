import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import MainLayout from "./MainLayout"
import Login from "./Login"
import Banner from "./Banner"
import Account from "./Account"
import History from "./History"
import Recharge from "./Recharge"



const  router=createBrowserRouter([{
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
        {
path:"/",
element:<Banner></Banner>
        },
        {

         path:"/login" ,
         element:<Login></Login>  
        },
        {
            path:"/Account",
            element:<Account></Account>
        },{
            path:"/history",
            element:<History></History>
        },{
            path:'/recharge',
            element:<Recharge></Recharge>
        }
    ]
  
}])
export default router