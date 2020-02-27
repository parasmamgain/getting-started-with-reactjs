import React from 'react';
import {prs} from './data';
export function Products(){
    
    let dprs = prs.map((t,index)=>{
        return(
        <tr key={index}><td>{t.code}</td><td>{t.name}</td><td>{t.price}</td></tr>
        )
    })
    
    return(
        <div>
            <h3>Products</h3>
            <table><tr><th>Code</th><th>Name</th><th>PRICE</th></tr>{dprs}</table>
        </div>
    )
}