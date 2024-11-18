import {RestList} from "./first1";
import {useState,useEffect} from "react";
import { Simmi } from "./simmi";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlinestatus";
import Higherorder from "./Higherorder";
import UserContest from "./Context";
import { useContext } from "react";

export const Body = ()=>{

    const {uselogin} = useContext(UserContest)
             
    const [ResList , setResList] = useState([]);
    const [Values , setValues] = useState("");
    const [filterlist,setfilterlist] = useState([]);

    useEffect(()=>{
        
          fetcData(); 
        
        
    },[]);
    const onlineStatus = useOnlineStatus();

    const fetcData =async () => {
        const url = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await url.json();

        const data=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
       // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        

        setResList(data);
        setfilterlist(data);

    };

    const RestCardWithPromoter = Higherorder(Applayout);

    
    if(onlineStatus===false)  return <h1>you are in offlinee </h1> 

    

    if(filterlist.length===0){
     return <Simmi/>
    };
    const Filter = (e) =>{
        setValues(e.target.value)
        const fill=ResList.filter((res)=>res.info.name.toLowerCase().includes(Values.toLowerCase()));
        setfilterlist(fill);


    }

    
    return(
        <div className="Body">
            <div className="search">
                
               
                <input type="text" value={Values} placeholder="search restorent" onChange={(e)=>Filter(e)}></input>
                <button onClick={()=>{
                    const fill=ResList.filter((res)=>res.info.name.toLowerCase().includes(Values.toLowerCase()));
                    setfilterlist(fill);
                }}>search</button>
            </div>
            <div className="button-container">
                <button className="button" onClick={()=>{
                    filtarr=ResList.filter((res)=>(res.info.avgRating>4.5));
                    setfilterlist(filtarr);
                    //console.log(filtarr);
                }}>Top reatorent List</button>
            </div>

            <div>
                
            </div>
            
    
            
            <div className="res-container">
                {filterlist.map((res)=>(
                   <Link className="link" style={{color:"inherit",
                    textdecoration :" inherit",}} key={"/RestroMenu/:"+res.info.id} to={"/RestroMenu/:"+res.info.id}><Applayout  resData={res.info}/> </Link> 
                ))}
                     </div>
        </div>
    )
}

export const Applayout = (props) =>{
    const {resData}=props;
    
    return(
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} className="res-logo"></img>
            <h3>{resData.name}</h3>
            <h5 style={{display:"inline"}}>{resData.cuisines.join(",")}</h5>
            
            <h4>{resData.avgRating +" stars"}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.locality}</h4>
        </div>
    )

}

             