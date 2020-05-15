import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCESS = 'FETCH_CHARACTER_SUCESS';
export const FETCH_CHARACTER_FAIL = 'FETCH_CHARACTER_FAIL';

export const ADD_CHARACTER_START = 'ADD_CHARACTER_START';
export const ADD_CHARACTER_SUCESS = 'ADD_CHARACTER_SUCESS';
export const ADD_CHARACTER_FAIL = 'ADD_CHARACTER_FAIL';


export const fetchSmurfCharacter = () => dispatch => {
    dispatch({type: FETCH_CHARACTER_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
        console.log(`fetch response`, response.data)
        dispatch({type: FETCH_CHARACTER_SUCESS, payload: response.data})
    })
    .catch(err => {
        console.log(`There was an error fetching data`, err);
        dispatch({type: FETCH_CHARACTER_FAIL, payload: err.response})
    })
}


export const addCharacter = input => dispatch => {
    dispatch({type: ADD_CHARACTER_START});
    axios
    .post('http://localhost:3333/smurfs', input)
    .then(response => {
        console.log(`POST REQUEST`, response)
        dispatch({type: ADD_CHARACTER_SUCESS, payload:response.data})
    })
    .catch(err => {
        console.log(`There was a problem adding new character`, err)
        dispatch({type: ADD_CHARACTER_FAIL, payload:err.response})
    })
}


