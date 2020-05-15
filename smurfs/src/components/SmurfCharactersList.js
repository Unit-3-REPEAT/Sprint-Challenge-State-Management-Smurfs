import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchSmurfCharacter} from '../actions/index'
import "./App.css";

const SmurfCharacthersList = (props) => {

    // console.log(`props inside SmurfCharacthersList -->`, props);

    useEffect(() => {
        props.fetchSmurfCharacter();

    },[])

    return (
        <section className='smurfContainer'>
            <h2 className='smurfHeader'>List of Smurf Characters in Village:</h2> 
            
                {props.smurf && props.smurf.map((character) => {
                    console.log(`character --->`, character);
                return (
                <div className='smurfCharacter' key={character.id}>
                   
                   <p> Name:{character.name} </p>
                   <p> Age:{character.age} </p> 
                   <p> Height: {character.height} </p>
                </div>)
               
                })}    
                   
        </section>
    )

}

const mapStateToPros = state => {
    return {
        smurf: state.smurfReducer.smurf,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error,
        id: state.smurfReducer
    }
}

export default connect (mapStateToPros, {fetchSmurfCharacter}) (SmurfCharacthersList);