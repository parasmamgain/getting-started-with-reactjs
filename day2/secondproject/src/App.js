import React from 'react';
import Topics from './topics';
import {Mvvmclass} from './mvvm';
import {Mvvmfun} from './mvvmfun';
import { Products } from './products';
import {Link,Route} from 'react-router-dom';
import {Rest} from './rest';
import './App.css';
//import Topics from './topics/topic'; incase the index.js does not exist
function App() {
  return (
    <div className="content">
     <table>
       <tr>
         <th><Link to="/topics">Topics</Link></th>
         <th><Link to="/products">Products</Link></th>
         <th><Link to="/mvvmclass">MVVM Class</Link></th>
         <th><Link to="/Mvvmfun">MvvM fun</Link></th>
         <th><Link to="/httpcall">Http Request</Link></th>
       </tr>
     </table>
     <hr />
     <Route path="/topics" component={Topics}></Route>
     <Route path="/products" component={Products}></Route>
     <Route path="/mvvmclass" component={Mvvmclass}></Route>
     <Route path="/Mvvmfun" component={Mvvmfun}></Route>
     <Route path="/httpcall" component={Rest}></Route>
    </div>
  );
}

export default App;
