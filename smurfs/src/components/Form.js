import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addCharacter} from '../actions';
import "./App.css";

const Form = (props) => {

    const [newCharacterInput, setNewCharacterInput] = useState({
        name:'',
        age:'',
        height:'',
        id: Math.random()        
    });

    //Change handler
    const onInputChange = (event) => {
        setNewCharacterInput({
            ...newCharacterInput, 
            [event.target.name] : event.target.value            
        })
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    

    return (
      
       <form className='form' onSubmit={onSubmit}>
           <h1>Add your Smurf here!</h1>
           <input
                className="input"
                placeholder="Name"
                name="name"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.name}               
           />
           <br/>

            <input
                className="input"
                placeholder="Age"
                name="age"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.age}               
           />
           <br/>

            <input
                className="input"
                placeholder="Height"
                name="height"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.height}               
           />
           <br/>
           <button
                className="button"
                onClick={() => props.addCharacter(newCharacterInput)}>
                Add Smurf
            </button>
       </form>
    )

}

export default connect (null, {addCharacter})(Form);