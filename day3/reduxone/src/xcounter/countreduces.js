import React from 'react';
let initial={count:0}
export function countreducer(state=initial, action){
    if(action.type == 'INC'){
        return {count : state.count + 1};
    }
    else if(action.type == 'DEC'){
        return {count : state.count - 1};
    } else
        return state;
}