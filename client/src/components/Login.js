import React from 'react'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { setUserError, startLoginUser } from '../actions/userActions'

const Login = (props) =>{
    const dispatch = useDispatch()

    const userErrors = useSelector((state)=>{
        return state.user.errors
    })

    const handleRemoveError =()=>{
        dispatch(setUserError({}))
    }
    
    const formsubmittion = (formData,reset) =>{
        reset()
        dispatch(startLoginUser(formData, props))
    }

    return (
        <div className="my-5 w-50 m-auto">  
                {userErrors?.error && (
                    <div className="d-flex justify-content-between fs-3 bg-warning-subtle p-3 my-2 rounded-2">
                        <span className="text-danger">
                            {userErrors?.error}
                        </span>
                        <button 
                            className="bg-transparent border border-0 fs-4"
                            onClick={handleRemoveError}>&#10006;</button>
                    </div>
                )} 
             <div className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{backgroundColor:"#F8EDE3"}}>                
                <div className="m-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-check-fill m-auto" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <h2 className="me-5"> Login </h2>
                </div>
                <Form width="30rem" formsubmittion={formsubmittion}/>
            </div>
        </div>
    )
}

export default Login