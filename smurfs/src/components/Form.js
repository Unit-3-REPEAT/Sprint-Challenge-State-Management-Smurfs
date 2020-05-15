import React, {useState} from 'react';

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
      
       <form onSubmit={onSubmit}>
           <h1>Add your Smur here!</h1>
           <input
                placeholder="Name"
                name="name"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.name}               
           />
           <br/>

            <input
                placeholder="Age"
                name="age"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.age}               
           />
           <br/>

            <input
                placeholder="Height"
                name="height"
                type="text" 
                onChange={onInputChange}
                value={newCharacterInput.height}               
           />
           <br/>
           <button>Add Smurf</button>
       </form>
    )

}

export default Form;