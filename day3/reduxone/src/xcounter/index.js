import React from 'react';
import {connect} from 'react-redux';
export  function XCounter(props) {
    return(
        <div>
            <h3>Counter : {props.count}</h3>
            <button onClick={props.inc}>Inc</button>
            <button onClick={props.dec}>Dec</button>
        </div>
    )
}

function mapStateToProps(state){
    return {count : state.count};
}

function mapDispatchToProps(dispatch){
    return {inc: function (){
                dispatch({type:'INC'});
             },
            dec: function (){
                dispatch({type:'DEC'});
            }}
}

export default connect(mapStateToProps,mapDispatchToProps)(XCounter);