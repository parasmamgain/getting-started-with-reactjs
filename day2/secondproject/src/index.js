import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Parent(){

    let [otxt,setOtxt] = useState('');
    function ch(txt) {
        setOtxt(txt.toUpperCase());
    }

    return(
        <div>
            <h3>Parent Comp</h3>
            <CompA ch={ch}/>
            <CompB otxt={otxt}/>
        </div>
    )
}

function CompA(props){
    let txt= React.createRef();
    

    return(
        <div><h3>CompA</h3>
        <p>Enter some text:<input type="text" ref={txt}></input></p>
        <button onClick={()=>props.ch(txt.current.value)}>Uppercase</button>
        </div>
    )
}

function CompB(props){
    return(
        <div><h3>CompB</h3>
            <h4>Output : {props.otxt}</h4>
        </div>
    )
}
ReactDOM.render(
<Parent />
, document.getElementById('root'));
