import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { removeItem} from './CartStore'
import { clearCart } from './CartStore'

const Cartitem = () => {

  const dispatch = useDispatch();

  const remover = () =>{
    dispatch(removeItem())
  }
  const style = {
    height:"30px",
    width:"50vw",
    margin:"auto",
    fontWeight:"bold",
    padding:"7px",
    borderBottom:"1px solid black",
    display:"flex",
    justifyContent:"space-between",
  }
    const card = useSelector((store)=>store.cart.item)
    
  return (
    
    <div>
      <h2 style={{textAlign:"center"}}>cart</h2>
       <div style={{display:"flex",justifyContent:"center",margin:"15px"}}><button onClick={()=>dispatch(clearCart())}>clearCart</button></div>
      
       { card.map((res)=>(<div style={style}><div>{res}</div><button onClick={()=>remover()}>remove item</button></div>))
        
       }
       
    </div>
      
  )
}

export default Cartitem
