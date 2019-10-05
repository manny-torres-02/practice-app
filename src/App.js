import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Container/Contact'

class App extends Component {
  state = {
    contacts : [
      {name:"Manny", age: 26},
      {name:"alex", age:20}
    ]
  }

render () {
 // want to show contacts
/* displayContacts = () => {

}*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> This is a react paragraph</p>
        <Contact> </Contact>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
