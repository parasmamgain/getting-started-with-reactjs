import React from 'react';
import XCounter from './xcounter';
import {createStore} from 'redux';
import {countreducer} from './xcounter/countreduces';
import {Provider} from 'react-redux';


let store = createStore(countreducer);
function App(){
  return(
    <div>
      <Provider store={store}>
        <XCounter></XCounter>
      </Provider>
    </div>
  );
}

export default App;