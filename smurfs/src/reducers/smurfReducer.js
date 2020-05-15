import {
    FETCH_CHARACTER_FAIL,
    FETCH_CHARACTER_START,
    FETCH_CHARACTER_SUCESS,

    ADD_CHARACTER_START,
    ADD_CHARACTER_SUCESS,
    ADD_CHARACTER_FAIL
} from '../actions/index';

//Set up reducer

export const initialState = {
    smurf:[],
    isFetching: false,    
    error:'',       
  
}

export const smurfReducer = (state=initialState, action) => {
    // console.log(`Hello from reducer`);
    switch(action.type){

        case FETCH_CHARACTER_START:
            return {
                ...state,
                isFetching:true,
            }

        case FETCH_CHARACTER_SUCESS:
            return {
                ...state,
                smurf: action.payload,
                isFetching:false,
            }    
        case FETCH_CHARACTER_FAIL:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }  
            
        case ADD_CHARACTER_START:
            return {
                ...state,
                isFetching: true
            }  
        case ADD_CHARACTER_SUCESS:
            return {
                ...state,
                isFetching:false,
                error:'',                
                smurf:[...state.smurf,action.payload]
            } 
            
        case ADD_CHARACTER_FAIL:
            return {
                ...state,
                error: action.payload
            }   
        default:
            return state;
    }
}