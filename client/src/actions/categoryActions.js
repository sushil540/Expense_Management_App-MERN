import axios from '../config/axios'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_CATEGORY = 'SET_CATEGORY'

const setCategories = (categories) =>{
    return {
        type:SET_CATEGORIES,
        payload:categories
    }
}

export const startGetCategories = () =>{
    return async(dispatch) =>{
        try{
            const response = await axios.get('/api/category',{headers:{authorization:localStorage.getItem('token')}})
            dispatch(setCategories(response.data))
        }catch(e){
            alert(e)
        }
    }
}

const addCategories =(category) =>{
    return {
        type:SET_CATEGORY,
        payload:category
    }
}

export const startAddCategory = (formData) =>{
    return async(dispatch) =>{
        try{
            const response = await axios.post('/api/category',formData,{headers:{authorization:localStorage.getItem('token')}})
            dispatch(addCategories(response.data))
        }catch(e){
            alert(e)
        }
    }
}   