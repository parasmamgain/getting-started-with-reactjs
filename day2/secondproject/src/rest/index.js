import React,{useState} from 'react';
import axios from 'axios';
export function Rest(){

    let [users,setUsers] = useState([]);

    function getData(){
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((res)=>{
            setUsers(res.data);
        });
    }
    let dusers = users.map((t)=>
        (
        <tr><td>{t.id}</td><td>{t.name}</td><td>{t.username}</td><td>{t.email}</td><td>{t.phone}</td></tr>
        )
    )
    
    return(
        <div>
            <h2>Http Calls</h2>
            <button onClick={getData}>Get Data</button>
            <h3>User details</h3>
            <table>
                <tr><th>id</th><th>name</th><th>username</th><th>email</th><th>phone</th></tr>{dusers}
            </table>
        </div>
    )
}