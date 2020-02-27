import React,{useState} from 'react';
import {prs} from '../products/data';
//export a components
/*export function Topics(){
    return (
        <h2>Topics Component</h2>
    )
}*/



//exporting default component
//only 1 default component can be exported
let iref = React.createRef();

export default function Topics(){
    
    let [tps,setTps] = useState(['React','Vue','Angular']);
    let dtps = tps.map((t) => {
        return(
        <li><h3>{t.toUpperCase()}</h3></li>
        )
    });
    
    let dprs1 = prs.map((t1)=>{
        return(
            <tr><td>{t1.code}</td><td>{t1.name}</td><td>{t1.price}</td></tr>
        )
    });
    

    function clickHandler(e){
        let txt=document.querySelector("input[type='text']")
        //tps.push(iref.current.value);
        setTps([...tps,iref.current.value]);
        alert(tps);
    }

    return (
        <div>
        <h2>Topics Component</h2>
        <input type='text' ref={iref}></input>
        <button onClick={clickHandler}>Add</button>
        <ol><p>{dtps}</p></ol>
        <table>{dprs1}</table>
       
        </div>
    )
}