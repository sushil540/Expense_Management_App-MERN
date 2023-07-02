import React, { useEffect } from 'react'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { setUserError, setUserNotice, startRegisterUser } from '../actions/userActions'
const Register = (props) =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setUserNotice({}))
        dispatch(setUserError({}))
    },[])

    const handleRemoveError =() =>{
        dispatch(setUserNotice({}))
    }

    const userErrors = useSelector((state)=>{
        return state.user?.notice
    })

    const formsubmittion = (formData, reset) =>{
        reset()
        dispatch(startRegisterUser(formData, props))
    }


    return (
        <div className="my-5 w-50 m-auto">
            {userErrors?.notice && (
                <div className="d-flex justify-content-between align-items-center rounded opacity-75 bg-primary-subtle p-2 text-center fs-5 text-primary-subtle m-auto mb-2 ">
                      <p className="p-2 text-dark"> {userErrors?.notice} </p>
                        <button 
                            type="button" 
                            className="bg-transparent border border-0"
                            onClick={handleRemoveError}>
                                &#10006;
                        </button>
                    </div>
                )}
            <div className="card border border-0 rounded-4" style={{backgroundColor:"#F5EBEB"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-fill m-auto" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                <h2 className="text-center"> Register </h2>
                
                <Form width="30rem" formsubmittion={formsubmittion}/>
            </div>
        </div>
    )
}

export default Register