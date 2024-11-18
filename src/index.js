
import { lazy,Suspense } from "react";
import ReactDom from "react-dom/client";
import React, { Children } from "react";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import { Header } from "./component/Header";
import { Body } from "./component/Body";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";

import { Applayout } from "./component/Body";
import RestroMenu from "./component/RestroMenu";
import { Provider} from "react-redux";

import Appstore from "./component/Appstore";
import Cartitem from "./component/cartitem";

import UserContest from "./component/Context";
import { useContext } from "react";
import { useState , useEffect } from "react";





const Grocery=lazy(()=>import("./component/Grocery"));

const Result = () => {
    const [username , setusername] = useState(null);
    useEffect(()=>{
        const data = {
            name:"kushal"
        }
        setusername(data.name)
    },[])

    
    return(

        
        <Provider store={Appstore}>
            <UserContest.Provider value={{uselogin:username}}>
                <Header/>
            </UserContest.Provider>
                <Outlet/>
            

        </Provider>
    
    )
}

const approute = createBrowserRouter([
    {
        path : "/",
        element : <Result/>,
        children:[
            {
                path:"/",
                element : <Body/>

            },
            {
                path:"/Body",
                element : <Body/>

            },
            {
                path:"/about",
                element : <About/>


            },
            {
                path:"/contact",
                element : <Contact/>


            },
            {
                path:"/cart",
                element:<Cartitem/>

            },
            {
                path:"/Grocery",
                element :(
                    <Suspense fallback={<h1>Loading......</h1>}>
                            <Grocery/>
                    </Suspense>
                ) 


            },
            {
                path:"/RestroMenu/:resid",
                element:<RestroMenu/>,
            }
        ],
        errorElement : <Error/>
    },
    
    
    

])
const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={approute}/>
)
{/*
import React, { startTransition } from "react";
import ReactDom from "react-dom/client";
import Comp from "./Comp";


const array = [
    [1,1,1],[1,0,0],[1,1,1]
];



const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <Comp array={array}/>
    
)*/}