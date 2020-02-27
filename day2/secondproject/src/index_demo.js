import React from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter} from 'react-router-dom';

function CompA(){
    return (
        <div>

        <h3>
            This is a CompA
        </h3>
        </div>

    )
}

function CompB(){
    return (
        <div>

        <h3>
            This is a CompB
        </h3>
        </div>

    )
}

function CompC(){
    return (
        <div>

        <h3>
            This is a CompC
        </h3>
        </div>

    )
}


function RoutingSample(){
    return (
        <div>
        <ol>
            <li><Link to="/compa">Comp A</Link></li>
            <li><Link to="/compb">Comp B</Link></li>
            <li><Link to="/compc">Comp C</Link></li>
        </ol>
        <Route path="/compa" component={CompA}></Route>
        <Route path="/compb" component={CompB}></Route>
        <Route path="/compc" component={CompC}></Route>
        </div>
    )
}

ReactDOM.render(
<BrowserRouter>
    <RoutingSample />
</BrowserRouter>
    , document.getElementById('root'));