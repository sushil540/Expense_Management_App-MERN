import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateBudget } from '../actions/userActions'

const AddBudget =(props) =>{
    const [budget, setBudget] = useState('')
    const [formError, setFormErrors] = useState('') // use to display errors
    const errors = {}

    const loggedInUser = useSelector((state)=>{
        return state.user?.data
    })

    const dispatch = useDispatch()
    
    const handleValidation = ()=>{
        if(budget.length === 0){
            errors.budget ={
                empty:"Budget is required"
            }
        }
        setFormErrors(errors)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        handleValidation()

        if(Object.keys(errors).length === 0){
            const formData = {
                budget:budget
            }
            setBudget('')
            dispatch(startUpdateBudget(formData))
        }
    }   
     
    return (
        <div className="card p-4">   
           {Number(loggedInUser.budget) === 0 ? ( <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={budget}
                    placeholder="Enter your Budget"
                    className="form-control mb-2 w-50"
                    onChange={(e)=>setBudget(e.target.value)}
                />
                {formError?.budget?.empty && <p className="text-danger">{formError?.budget?.empty}</p>} 
                <input type="submit" className="btn btn-success fw-bold" value="Set Budget"/>
            </form> 
            ):(
                <div className="d-flex flex-row justify-content-between">
                    <h2> Budget </h2>
                    <h2 className="text-danger fw-bold">{loggedInUser.budget}</h2> 
                </div>
            ) }
        </div>
    )
}

export default AddBudget