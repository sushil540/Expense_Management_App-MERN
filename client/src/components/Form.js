import React, { useState } from 'react'
import validator from 'validator'

const Form = (props) =>{
    const { formsubmittion, width } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}
    
    const handleValidation = () =>{
        if(email.trim().length === 0){
            errors.email = {
                empty:"Email is required"
            }
        }else if(!validator.isEmail(email)){
            errors.email = {
                invalid:"Invalid email"   
            }
        }

        if(password.length === 0){
            errors.password = {
                empty:"Password is required"
            }
        }

        setFormErrors(errors)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        handleValidation()

        if(Object.keys(errors).length === 0){
            const formData = {
                email,
                password
            }
            
            const reset =()=>{
                setEmail('')
                setPassword('')
            }
            formsubmittion(formData, reset)
        }
    }   

    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    }
    return(
        <div className="card p-5 border-0 my-4 m-auto" 
            style={{width:width}}>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="floatingInput"
                            name="email" 
                            value={email}
                            onChange={handleChange}
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInput"> Email address <sup className="text-danger fw-bold">*</sup></label>
                        {formErrors?.email && <span className="text-danger">{formErrors?.email?.empty || formErrors?.email?.invalid}</span>}
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            value={password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password <sup className="text-danger fw-bold">*</sup></label>
                        {formErrors?.password && <span className="text-danger">{formErrors?.password?.empty}</span>}
                </div><br/>
                <input 
                    type="submit" 
                    className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form