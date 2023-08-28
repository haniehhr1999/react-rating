import { useState } from "react"
import './index.css'

export default function RatingStar(){

  const [starHover , setStarHover] = useState(0)
  const [starClick , setStarClick] = useState(0)

  return( 
    <>
      {
        [0, 1, 2, 3, 4].map(( _ , index ) => (
          <span 
          key={index} 
          style={{
            color: index < starClick ? "red" : "black",
            transition: '0.3s',
            transform: index < starHover ? "scale(1.1)" : "scale(1)"
           }} 
          onMouseEnter={()=> setStarHover( index + 1 )}
          onMouseLeave={()=> setStarHover( 0 )}
          onClick={()=> setStarClick( index + 1 )}
          className="material-symbols-outlined">grade</span>
        ))
      }
    </>
  )
}

