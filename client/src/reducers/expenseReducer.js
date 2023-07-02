import {ADD_EXPENSE, SET_EXPENSES, REMOVE_EXPENSE, SET_EDIT_ID, SET_EDITED, SET_MESSAGE} from "../actions/expenseActions"

const initialExpenseState = {
    errors:{},
    data:[],
    editId:'',
    notice:''
}

export const expenseReducers = (state = initialExpenseState, action)=>{
    switch(action.type){
        case ADD_EXPENSE : {
            return {...state, data:[action.payload,...state.data]}
        }
        case SET_EXPENSES : { 
            return {...state, data:action.payload}
        }
        case REMOVE_EXPENSE : {
            return {...state, data:state.data.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        case SET_EDIT_ID : {
            return {...state, editId:action.payload}
        }
        case SET_EDITED : {
            return {...state, data:state.data.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        case SET_MESSAGE :{
            return {...state, notice:action.payload}
        }
        default: {
            return {...state}
        }
    }
}
