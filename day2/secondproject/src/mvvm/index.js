import React from 'react';

// react frameworks reacts to states, state is a object , its like a container which is defined inside the React.Component.
// whatever component you want to react it , you put it inside it in a state component(i.e. the container)
// so for the stae to change on text change, we will add the text into the state component(i.e. container)
export class Mvvmclass extends React.Component{

constructor(props){
    super(props)
    this.state = {
        msg : 'Hello WOrld!!!'
    }
    //this.msg  = 'Hello World from contructor..!!'
}

    changeHandler = ()=>{
        alert(this.state.msg);
        this.setState({
            msg : "change...."
        })
        alert(this.state.msg);
    }
    render(){
        return(
            <div>
                <h3>MVVM using class Component</h3>
                <h3>{this.state.msg}</h3>
                <button onClick={this.changeHandler}>Change</button>
            </div>
        )
    }

}