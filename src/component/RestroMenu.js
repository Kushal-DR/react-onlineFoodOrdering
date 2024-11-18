{/*import React from 'react'
import { useState,useEffect } from 'react'

const RestroMenu = () => {

    useEffect(()=>{
        fetchdata2();
    },[]
    )
    const fetchdata2=async ()=>{
        const da=await fetch("swiggy.com/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=681612");
        const ans = await da.json();
        console.log(ans);  
    }*/}
import { MenuSList } from "./menulist"
import React from 'react';
import MenuComponent from "./MenuComponent";

const RestroMenu = () => {
  return (
    <div>
        {MenuSList.map((res) => (
            <MenuComponent data={res} />
        ))}
      
    </div>
  )
}

export default RestroMenu


  



