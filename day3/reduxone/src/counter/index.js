import React,{useState} from 'react';
export  function Counter() {


    let [count,setCount] = useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
    }
    return(
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}