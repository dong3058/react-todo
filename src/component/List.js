import React,{useState} from 'react'
import './list.css'
import Lists from "./Lists.js"


export default function List({costdata,deleteunits,setsums,setsum}) {
    





  return (
    
    <div className="listarea">
        
        {costdata.map((el)=>( 


        <div key={el.id}>
          <Lists element={el} title={el.title} cost={el.cost} id={el.id} deleteunits={deleteunits} 
          setsums={setsums} costdata={costdata} setsum={setsum}/>
        </div>
          
        ))}
        
   
    </div>

  )
    
}
