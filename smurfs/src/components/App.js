import React from "react";
import "./App.css";
import SmurfCharactesList from './SmurfCharactersList';
import Form from './Form';



const App = () => {
  
    return (
      <div className="App">
        <h1 className='main-header'>SMURFS VILLAGE!</h1>
        <Form/>
        <SmurfCharactesList/>
        
      </div>
    );
  }


export default App;
