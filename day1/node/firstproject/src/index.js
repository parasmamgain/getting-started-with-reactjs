import React from 'react';
import ReactDOM from 'react-dom';
 
//-----------------------creating element ------------------------------------
let  h = React.createElement('h1','','Hello React'); //accepts tags, attributes and values
//ReactDOM.render(h, document.getElementById('root'));

//react element
// ----------------------creating element inside a element and using JSS-------------------------------------
//let d = React.createElement('div','',React.createElement('h2','','Hellow React !!'))
// or
//let d = <div><h2>Hellow React!!!</h2></div> //this is called JSS embedding javascript - only available in react - i.e. javascript extension
//ReactDOM.render(d, document.getElementById('root'));

//--------------------------creating a component ---------------------------------

//creating a component - in react component consist of two things - data and view
// data from {msg}
// custom component - firstcharacter should always be in uppercase because lower case is interperedted as html component
function IBMComp(){
    let msg = "IBM!!";
    return (
        <div>
            <h2>this is custome component</h2>
            <h3>getting started with {msg}</h3>
        </div>
    )
}
//ReactDOM.render(<IBMComp />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//-----------------------------creating component using class-------------------------

class MyComp extends React.Component{
    render(){
        return(
            <div>
                <h3>This is a class component</h3>
                <h3>{this.props.txt}</h3>
            </div>
        )
    }
}
//ReactDOM.render(<MyComp txt="hello IBM"/>, document.getElementById('root'));

class Header extends React.Component{
    render(){
        return(
            <div>
            <h3>{this.props.txt}</h3>
            </div>
        )
    }
}

function HeaderFunction(props){
    
    return (
        <div>
            <h3>{props.txt}</h3>
        </div>
    )
}

class Footer extends React.Component{
    render(){
        return(
            <div>
            <h3>{this.props.txt}</h3>
            </div>
        )
    }
}
ReactDOM.render(
    <React.Fragment>
        <Header txt='This is a header'></Header>
        <HeaderFunction txt='This is a header called from a function'></HeaderFunction>
        <Footer txt='This is a footer'></Footer>
    </React.Fragment>
, document.getElementById('root'));