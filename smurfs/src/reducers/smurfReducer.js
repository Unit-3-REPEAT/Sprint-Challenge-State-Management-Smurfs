

//Set up reducer

export const initialState = {
    isFetching: false,
    isAdding: false,
    error:'', 
    
    smurfCharacter: [
        {
            name:'',
            age: '',
            height:'',
            id: Math.random()
        }       
     ],
}

export const smurfReducer = (state=initialState, action) => {
    console.log(`Hello from reducer`);
    switch(action.type){
        default:
            return state;
    }
}