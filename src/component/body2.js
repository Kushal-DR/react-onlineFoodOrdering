import {RestList} from "./first1";
import {useState,useEffect} from "react";

export const Body = ()=>{
             
    const [ResList , setRestList] = useState(RestList);

    useEffect(()=>{
        
          fetcData(); 
        
        
    },[]);

    const fetcData =async () => {
        const url = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await url.json();

        const data=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(data[1]);

        

        //setRestList(json);
        
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.name);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.avgRating);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.costForTwo);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.cuisines.join(","));
        //setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.locality);
    }
    return(
        <div className="Body">
            <div className="search">
                <input type="text" value="Search For Restorents"></input>
            </div>
            <div className="button-container">
                <button className="button" onClick={()=>{
                     filtarr=ResList.filter((res)=>(res.rating>4.5));
                    setRestList(filtarr);
                    console.log(filtarr);
                }}>Top reatorent List</button>
            </div>
            
    
            
            <div className="res-container">
                {ResList.map((res)=>(
                    <Applayout  resData={res}/>
                ))}
                   
                
                
            </div>
        </div>
    )
} 
const Applayout = (props) =>{
    const {resData}=props;
    
    return(
        <div className="res-card">
            <img src={resData.img} className="res-logo"></img>
            <h3>{resData.name}</h3>
            <p>{resData.cuisine}</p>
            <h4>{resData.rating + "  stars"}</h4>   
            <h4>{resData.ortime}</h4>
        </div>
    )

}

             