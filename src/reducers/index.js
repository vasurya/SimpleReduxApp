const initialState = {
    list:[]
}

function addItemReducer(state = initialState, action){
    if(action.type === "ADD_ITEM"){
        return {
           
        list: [...state.list, action.payload]
        }
    }
    return state;
}

export default addItemReducer