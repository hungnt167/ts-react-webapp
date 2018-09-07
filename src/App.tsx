import HelloWorld from "components/HelloWorld";
import * as React from 'react';
import './App.css';

class App extends React.Component {

  public render() {
    return (
        <React.Fragment>
            <HelloWorld/>
        </React.Fragment>
    );
  }
}

export default App;
