
import './App.css';
//import './form.css';
//import './list.css';
import { useState,useEffect } from 'react';
import Form from "./component/Form.js";
import List from "./component/List.js";

function App() {
  let alert=document.querySelector(".alert")
  let sums
  let datas
  if(JSON.parse(localStorage.getItem("data"))==null){
    localStorage.setItem("data",JSON.stringify([]))
    datas=[]
  }
  else{
    datas=JSON.parse(localStorage.getItem("data"))
  }
  if(JSON.parse(localStorage.getItem("sums"))==null){
    localStorage.setItem("sums",JSON.stringify(0))
    datas=[]
  }
  else{
    sums=JSON.parse(localStorage.getItem("sums"))
  }




  const [costdata,setcostdata]=useState(datas)
  const [titlevalue,settitlevalue]=useState("")
  const [costvalue,setcostvalue]=useState("")
  const [sum,setsum]=useState(sums)

  
  const setsums=(x)=>{
    sums=x.reduce((a,el)=>a+Number(el.cost),0)
    setsum(sums)
    localStorage.setItem("sums",JSON.stringify(sums))
   
  }
  const insertcost=(e)=>{
    e.preventDefault();
    const newdata={
      id:Date.now(),
      title:titlevalue,
      cost:costvalue
      
      
    }
    localStorage.setItem("data",JSON.stringify([...costdata,newdata]))
    settitlevalue("")
    setcostvalue("")

    setcostdata(prev=>[...prev,newdata])
    setsums([...costdata,newdata])
    
    alert.style.backgroundColor="lightgreen"
    alert.textContent="추가되었습니다."
    
        
  }
  const deletes=()=>{
    localStorage.setItem("data",JSON.stringify([]))
    setcostdata([])
    
    sums=0
    localStorage.setItem("sums",JSON.stringify(sums))
    setsum(0)
    alert.style.backgroundColor="red"
    alert.textContent="삭제되었습니다."
    
  }

  const deleteunits=(x)=>{
    const newdata=costdata.filter((el)=>el.id!==x)

    setsums(newdata)

    localStorage.setItem("data",JSON.stringify([...newdata]))
    setcostdata(newdata)
  
    alert.style.backgroundColor="red"
    alert.textContent="삭제되었습니다."
   


  }





 
  return (
    <div>
      <div className="alert">
        
      </div>
    <div className="main-box">
      <span className="cal" >예산계산기</span>

      <Form titlevalue={titlevalue} costvalue={costvalue} 
      setcostvalue={setcostvalue} settitlevalue={settitlevalue} insertcost={insertcost}/>
      
      <List costdata={costdata}  deleteunits={deleteunits} setsums={setsums} setsum={setsum}/>
      <button className="deleteall"onClick={deletes} costdata={costdata}>삭제하기</button>
      <div className="sumall">
          <span>총지출:{sum}</span>
      </div>
    </div>
    </div>

  )
  
}

export default App;
