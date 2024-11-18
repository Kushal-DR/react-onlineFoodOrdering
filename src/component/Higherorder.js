import React from 'react'

const Higherorder = (RestorentCard) => {
    return(props)=>{

        return (
            <div>
                <label>promoted</label>
                <Restorentcard{...props}/>
              
            </div>
          )
    }
  
}

export default Higherorder
