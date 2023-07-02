import { createStore, combineReducers, applyMiddleware} from 'redux'
import userReducers from '../reducers/usersReducer'
import thunk from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import { expenseReducers } from '../reducers/expenseReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user:userReducers,
        category:categoryReducer,
        expense:expenseReducers
    }),applyMiddleware(thunk))
    return store   
}

export default configureStore