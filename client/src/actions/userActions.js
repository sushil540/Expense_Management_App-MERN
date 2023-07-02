import Swal from "sweetalert2"
import axios from "../config/axios"
export const SET_USER = "SET_USER"
export const SET_USER_ERROR = "SET_USER_ERROR"
export const SET_USER_NOTICE = "SET_USER_NOTICE"

export const setUserError = (error)=>{
    return {
        type:SET_USER_ERROR,
        payload:error
    }
}

export const setUserNotice = (notice) =>{
    return {
        type:SET_USER_NOTICE,
        payload:notice
    }
}

export const startRegisterUser = (formData, props)=>{
    return (dispatch)=>{ 
        (async ()=>{
            try{
                const response = await axios.post('/api/register',formData)
                const data = response.data
                if(data.hasOwnProperty('errors')){
                    dispatch(setUserNotice({notice:data.errors?.email?.message.split(' ',6).join(' ')}))
                }else{
                    props.history.push('/login')
                    Swal.fire("Successfully Registered")
                }
            }catch(e){
                alert(e)
            }            
        })()
    }
}

export const setLoggedInUser = (user) =>{
    return {
        type:SET_USER,
        payload:user
    }
}

export const startGetLoggedInUser =() =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.get('/api/users',{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setLoggedInUser(response.data))
            }catch(e){
                alert(e)
            }
        })()
    }
}

export const startLoginUser = (formData, props) =>{
    return (dispatch)=>{
        (async ()=>{
            try{
                const response = await axios.post('/api/login',formData)
                if(response.data?.message){
                    dispatch(setUserError({error:response.data?.message}))
                }else{
                    localStorage.setItem('token',response.data.token)
                    props.history.push('/dashboard')
                    Swal.fire('Successfully LoggedIn')
                    dispatch(startGetLoggedInUser())
                }
            }catch(e){
                alert(e)
            }  
        })()
    }
}

export const startUpdateBudget = (budget) =>{
    return (dispatch)=>{
        (async ()=>{
           try{
                const response = await axios.put('/api/users',budget,{headers:{authorization:localStorage.getItem('token')}})
                dispatch(setLoggedInUser(response.data))
           }catch(e){
                alert(e)
           } 
        })()
    }
}

export const startUpdateProfile = (data) =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.post('http://127.0.0.1:4080/api/profile',data,{headers:{authorization:localStorage.getItem('token'),'content-type': 'multipart/form-data'}})
                if(response.data.hasOwnProperty('imageURL')){
                    dispatch(setLoggedInUser(response.data))
                }
            }catch(e){
                alert(e)
            }
        })()
    }
}

export const startDeleteMyAccount = (password) =>{
    return (dispatch) =>{
        (async ()=>{
            try{
                const response = await axios.post(`/api/users/deletAccount`,{password:password},{headers:{authorization:localStorage.getItem('token')}})
                const data = response.data
                if(data.hasOwnProperty('error')){
                    Swal.fire(data?.error)
                }else{
                    localStorage.removeItem('token')
                    dispatch(setLoggedInUser({}))
                    Swal.fire("Your Account Successfully Deleted")
                }
            }catch(e){
                alert(e)
            }
        })()    
    }
}