import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddCategory } from '../actions/categoryActions'
import Swal from 'sweetalert2'

const AddCategoryForm = (props) =>{

    const dispatch = useDispatch()

    const [categoryName, setCategoryName] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const handleValidation = ()=>{
        if(categoryName.trim().length === 0){
            errors.categoryName = {
                empty:"CategoryName is required"
            }
        }   
        setFormErrors(errors)
    }

    const handlesubmit = (e) =>{
        e.preventDefault()

        handleValidation()

        if(Object.keys(errors).length === 0){
            const formData ={
                categoryName:categoryName,
            }

            setCategoryName('')
            Swal.fire('Category Successfully Added')
            dispatch(startAddCategory(formData))
        }
    }

    return (
        <div>
            <div className="card p-4">
            <h2 className="text-center"> Category </h2> 
                <form onSubmit={handlesubmit}> 
                    <label> Category Name <sup className="text-danger fw-bold">*</sup> </label> <br/>
                    <input 
                        value={categoryName}
                        className="form-control mb-2"
                        onChange={(e)=>setCategoryName(e.target.value)}
                        name="category"
                        />
                        {formErrors?.categoryName 
                                    &&
                            <p className="text-danger"> 
                                {formErrors?.categoryName?.empty} 
                            </p>
                        }
                    <input className="btn btn-outline-dark m-auto fw-bold" value="Add Category" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AddCategoryForm