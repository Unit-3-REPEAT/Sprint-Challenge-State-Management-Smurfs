import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchSmurfCharacter} from '../actions/index'

const SmurfCharacthersList = (props) => {

    // console.log(`props inside SmurfCharacthersList -->`, props);

    useEffect(() => {
        props.fetchSmurfCharacter();

    },[])

    return (
        <section>
            <h2>List of Smurf Characters:</h2> 
            
                {props.smurf && props.smurf.map((character) => {
                    console.log(`--->`, character);
                return (
                <div key={character.id}>
                   <p> Name: {character.name} </p>
                   <p> Age:{character.age} </p> 
                   <p> Height{character.height} </p>
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
    }
}

export default connect (mapStateToPros, {fetchSmurfCharacter}) (SmurfCharacthersList);