import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  // console.log(hexColor);
  const[alert,setAlert]=useState(false);
  const bcg=rgb.join(',')
  const hex=rgbToHex(...rgb)
  //  console.log(bcg)

useEffect(()=>{
const timeout=setTimeout(()=>{
setAlert(false)
},[2500])
return ()=> clearTimeout(timeout)
},[alert])

  return( 
  <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{setAlert(true)
  
  navigator.clipboard.writeText(hexColor)
  }}>

    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>#{hexColor}</p>
    {alert && <p className='alert'>copy to clipboard</p>}
    </article>
    )
}

export default SingleColor
