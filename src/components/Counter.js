import { useState } from "react";
export default function Counter() {
  const [count,setcount] = useState(0);
  let increment=()=>
  {
    let x = count;
    x++;
    setcount(x);
  }
  let decrement=()=>
  {
    let x = count;
    x--;
    setcount(x)
  }
  let cnt = <div className="row">{count>0?<input className="col-2" type="button" value="-" onClick={()=>decrement()}>

  </input>:<input type="button" value="-" className="col-2" disabled></input>}
  <div className="col-2">{count}</div>
  {count<5?<input type="button" value="+" className="col-2" onClick={()=>increment()}></input>:
  <input type="button" value="+" disabled className="col-2"></input>}
  </div>
return(
  <>
  <div className="row">
  {count<=0?<input type="button"  value="Add to Cart" className="btn btn-primary col-6" 
  onClick={()=>setcount(1)}/>:cnt}
  </div>
  </>
)

}
