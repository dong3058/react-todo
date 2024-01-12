import React,{useState,useEffect} from 'react'

export default function Lists({element,title,cost,id,deleteunits,setsums,costdata,setsum}) {
    
    const [edit,setedit]=useState(false)
    const [edittitle,setedittitle]=useState(title)
    const [editcost,seteditcost]=useState(cost)


    
    const seteditconfig=()=>{


        setedit(!edit)

        console.log(edit)
    }

    const changecost=(e)=>{


        seteditcost(e.target.value)
        
        element.cost=(e.target.value)
        localStorage.setItem("data",JSON.stringify([...costdata]))

    }
    const changesum=()=>{

      const x=[...costdata].reduce((a,el)=>a+Number(el.cost),0)
      setsum(x)
      localStorage.setItem("sums",JSON.stringify(x))

    }
    const changecostname=(e)=>{
        setedittitle(e.target.value)
      
        element.title=e.target.value
        localStorage.setItem("data",JSON.stringify([...costdata]))
    }

  if(edit){


    return(
      <div className="lists">

        <input className="costname" value={edittitle} onChange={changecostname}/>
        <input className="cost"value={editcost} onChange={changecost}/>
        <button onClick={()=>{seteditconfig();changesum()}} >x</button>
        <button>save</button>
        
      </div>


    )


  }


  else{

  return (
 
    <div className="lists">
      <span className="name">{edittitle}</span>
      <span className="cost2">{editcost}</span>
    
      <button className="deleteunit" onClick={()=>deleteunits(id)} >x</button>
      <button onClick={seteditconfig}>edit</button>
    
    </div> 
  )

  }
}
