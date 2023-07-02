import axios from "../config/axios"
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const SET_EXPENSES = "SET_EXPENSES"
export const REMOVE_EXPENSE = "REMOVE_EXPENSE"
export const SET_EDIT_ID = "SET_EDIT_ID"
export const SET_EDITED = "SET_EDITED"
export const SET_MESSAGE = "SET_MESSAGE"

const addExpense = (expense)=>{
    return {
        type:ADD_EXPENSE,
        payload:expense
    }
}

export const startAddexpense = (formData) =>{
    return async(dispatch) =>{
        try{
            const response = await axios.post('/api/expense',formData,{headers:{authorization:localStorage.getItem('token')}}) 
            dispatch(addExpense(response.data))
        }catch(e){
            alert(e)
        }    
    }
}

const setExpenses =(expenses)=>{
    return {
        type:SET_EXPENSES,
        payload:expenses
    }
}

export const startGetExpense = () =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.get('/api/expense',{headers:{authorization:localStorage.getItem('token')}})
                const data = response.data
                dispatch(setExpenses(data))
            }catch(e){
                alert(e)
            }
        })()  
    }
}

const expenseRemove = (id)=>{
    return {
        type:REMOVE_EXPENSE,
        payload:id
    }
}

export const startRemoveExpense = (id) =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.delete(`/api/expense?id=${id}&type=delete`,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(expenseRemove(response.data))
            }catch(e){
                alert(e)
            }
        })()
    }
}

export const startSearchExpenses =(formData) =>{
    return (dispatch)=>{
        (async ()=>{
            try{
                const response = await axios.get(`/api/search?searchString=${formData}`,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setExpenses(response.data))
            }catch(e){
                alert(e)
            }
        })()
    }
}

export const setEditId = (id)=>{
    return {
        type:SET_EDIT_ID,
        payload:id
    }
}

export const setEdited = (expense)=>{
    return {
        type:SET_EDITED,
        payload:expense
    }
}

export const startPutExpense =(formData) =>{
    return (dispatch, getState)=>{
        (async ()=>{
            try{
                const id = getState().expense.editId
                const response = await axios.put(`/api/expense/${id}`,formData,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setEdited(response.data))
            }catch(e){
                alert(e)
            }   
        })()
    }
}

export const setMessage = (message) =>{
    return {
        type:SET_MESSAGE,
        payload:message
    }
}

export const startCheckRemaining =(amount) =>{
    return (dispatch)=>{
        (async ()=>{
            try{
                const response = await axios.get(`/api/check?expense=${amount}`,{headers:{authorization:localStorage.getItem('token')}})
                const data = response.data
                if(!data.hasOwnProperty('errors')){
                    dispatch(setMessage(data))   
                }
            }catch(e){
                alert(e)
            }
        })()
    }
}


export const startUndoExpense = (id) =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.delete(`/api/expense?id=${id}&type=undo`,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setEdited(response.data))
            }catch(e){
                alert(e)
            }
        })()
    }
}

export const startGetSortedExpense =(sortOrder) =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.get(`/api/sort?type=${sortOrder}`,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setExpenses(response.data))
            }catch(e){
                alert(e)
            }
        })()
    }
}