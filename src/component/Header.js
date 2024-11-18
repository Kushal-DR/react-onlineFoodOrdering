import { useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlinestatus";
import { useSelector } from "react-redux";
import UserContest from "./Context";
import { useContext } from "react";


export const Header = ()=>{
    let val="login"
    const [Value,setValue] = useState("login");

    const onlineStatus = useOnlineStatus();

     
    
     const itemCard =  useSelector((store)=>store.cart.item) 

     const {uselogin} = useContext(UserContest)

    
    

    return(
        <div className="heading">
            <div className="logo-container">
                <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Crestaurant-logo%2Cfast-food-logo-design-template-504748a7becbf5f6d0cfcebef63ed349_screen.jpg?ts=1672671753"></img>
                
            </div>
            <div>
            

            </div>

            <div className="menu" >
                <ul >
                    <li style={{color:"none" ,textdecoration:"inherit"}}>
                        OnlineStatus : {onlineStatus===true ? "✅" : "❌"}
                    </li>
                    <li><Link to="/Body">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    
                    <li><Link to="/cart">cart : {itemCard.length} items</Link></li>
                    <button style={{width:"60px",height:"25px",color:"blue"}} onClick={()=>{
                        Value === "login"? setValue("logout"):setValue("login");
                    }}>{Value}</button>
                    <li><Link to="/Grocery">Grocery</Link></li> 
                    <li>{uselogin}</li>
                </ul>
            </div>

        </div>
    )

}


