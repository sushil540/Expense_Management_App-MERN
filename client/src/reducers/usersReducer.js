import { SET_USER, SET_USER_NOTICE, SET_USER_ERROR } from '../actions/userActions'
const initialUserState = {
    errors:{},
    notice:{},
    data:{}
}

const userReducers = (state = initialUserState, action) =>{
    switch(action.type){    
        case SET_USER : {
            return {...state, data:action.payload}
        }
        case SET_USER_NOTICE : {
            return {...state, notice:action.payload}
        }
        case SET_USER_ERROR : {
            return {...state, errors:action.payload}
        }
        default:{
            return{...state}
        }
    }
}

export default userReducers