import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Button from './Button.js';
import ColoredBlock from './ColoredBlock.js';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p className="App-intro">
            Hi {this.props.name}!
          </p>
          <Clock ></Clock>
          <Button></Button>
          <ColoredBlock></ColoredBlock>
      </div>
    );
  }
}

export default App;
