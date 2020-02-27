import React,{useState} from 'react';

export function Mvvmfun(){

    //useState returns two things, first is the variable that we want ti use and second the function reference that modefies the value
  let [msg,setMsg] = useState('Hwllo IBM!!');
    let i=1;
    function changeSubsciber(){
        i++;
        if(i%2==0){
            setMsg('UnChanged........' + i);
        }else {
            setMsg('Changed..........' + i);
        }
        

    }

    return(
        <div>
            <h3>Mvvm using function comp....</h3>
            <h3>{msg}</h3>
            <button onClick={changeSubsciber}>change Me</button>
        </div>
    )    
}