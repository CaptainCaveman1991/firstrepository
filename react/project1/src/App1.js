import logo from './logo.svg';
import './App.css';

import First from './info';
import Adding from './adding';

function App() {
  return (
    <>
    <h1>
      <center>
        Welcome to ReactJS Training
       <br></br>
      </center>
    
    </h1>
    <trainerInfo name="Alexander" address="Bristol"/>
    <trainerInfo name="James Bond" address="MI6"/>

    </>
  );
}

export default App;