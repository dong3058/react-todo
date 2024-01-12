import React from 'react'
import './form.css'
export default function Form({titlevalue,costvalue,setcostvalue,settitlevalue,insertcost}) {

    const costchange=(e)=>{

        setcostvalue(e.target.value)
        
    
      }
      const titlechange=(e)=>{
        settitlevalue(e.target.value)
       
      }

  return(

    <div>
    <form onSubmit={insertcost}>
      <input className="costname" placeholder="ex)렌트비" value={titlevalue} onChange={titlechange}/>
      <input className="cost" onChange={costchange} value={costvalue}/>
      <button className="submitcost" type="submit" >
        제출
        </button>        
    </form>
    <span className="items">품목명</span><span className="price">가격</span>
  </div>






  )
}


