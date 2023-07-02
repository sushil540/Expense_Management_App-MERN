import { SET_CATEGORIES, SET_CATEGORY } from '../actions/categoryActions'
const initialCategoryReducer = {
    errors:{},
    data:[]
}

const categoryReducer = (state = initialCategoryReducer, action) =>{
    switch(action.type) {
        case SET_CATEGORIES:{
            return {...state, data:action.payload}
        }
        case SET_CATEGORY :{
            return {...state, data:[...state.data, action.payload]}
        }
        default:{
            return {...state}
        }
    }   
}

export default categoryReducer