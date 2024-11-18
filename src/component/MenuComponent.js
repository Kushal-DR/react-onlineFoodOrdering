import React from 'react'
import { useState } from 'react'
import Itemlist from './Itemlist'

/*const style={
    width:"75vw",
    height:"20px",
    backgroundColor:"lightgray",
    margin:"auto",
    display:"flex",
    justifyContent:"spaceBetween"

}*/




const MenuComponent = (props) => {
  
  const [item,setitem]=useState(false);

  const handclick = ()=>{
    setitem(!item);
  }
    const [disvalue,setdisvalue] = useState(false);
    const {data} = props;
  return (
    
    <div style={{margin:"auto",marginLeft:"25vw"}}>
        <div style={{width:"50vw",backgroundColor:"lightgray",margin:"10px",borderRadius:"3%"}} >
          <div style={{height:"20px",display:"flex",justifyContent:"space-between",margin:"5px",alignItems:"center",padding:"5px"}} onClick={handclick} >
            <spam style={{padding:"10px",margin:"10px",fontWeight:"bold",fontSize:"20px"}}>{data.name} {"("+data.data.length+")"}</spam>
            <spam classname="bg-green-50">⬇️</spam>
          </div>
           <div style={{}}>
              {item && <Itemlist item={data.data}/>}
            </div>
          

        </div>

      
    </div>
  )
}

export default MenuComponent
