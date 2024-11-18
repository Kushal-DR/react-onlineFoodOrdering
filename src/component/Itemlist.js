import React from 'react'
import { useDispatch} from 'react-redux'
import { addItem } from './CartStore';


const Itemlist = ({item}) => {

  const dispatch = useDispatch();

  const handler = (ans)=>{
    dispatch(addItem(ans))
  }
  return (

    
    <div>
        

      {item.map((res)=>(<div style={{margin:"10px",padding:"7px",borderBottom:"1px solid black",borderRadius:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <div style={{margin:"4px",fontWeight:"bold"}}>
        <span>{res.name}</span>-
        <spam>{"     ₹ "+res.price}</spam>
        </div>
        <div><p>{res.discription}</p></div>
        </div>
        <div style={{}}>
            <button style={{padding:"2px",position:"absolute",marginLeft:"40px",borderRadius:"20%"}} onClick={()=>{handler(res.name)}}>Add +</button>
            <img src={res.img} style={{width:"100px", height:"100px"}}></img>
        </div>
        </div>
    </div>
    ))}
    </div>
    
  )
}

export default Itemlist
