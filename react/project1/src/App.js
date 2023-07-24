import logo from './logo.svg';
import './App.css';

import First from './info';
import Adding from './adding';
import TrainerInfo from './infomation';
import SalarySlip from './SalarySlip';
function App() {
  return (
    <>
    <h1>
      <center>
        Welcome to ReactJS Training
       <First></First>
       <br></br>
      </center>
      <Adding></Adding>
    </h1>
    <SalarySlip name="Alexander" salary="10000"/>
    <SalarySlip name="James Bond" salary="15000"/>
    </>
  );
}

export default App;
