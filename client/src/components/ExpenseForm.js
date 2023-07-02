import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCheckRemaining } from '../actions/expenseActions'

const ExpenseForm = (props) =>{
    const { formSubmittion } = props 

    const [categories, expense, id, notice] = useSelector((state)=>{
        return [state.category.data, state.expense.data, state.expense.editId, state.expense.notice]
    })

    const dispatch = useDispatch()

    const data = expense.find((ele)=>ele._id === id) 

    const [amount, setAmount] = useState(data?.amount ? data?.amount :'')
    const [category, setCategory] = useState(data?.categoryId ? data?.categoryId : '')
    const [expenseDate, setExpenseDate] = useState(data?.expenseDate ? data?.expenseDate.split('T')[0] : '')
    const [note, setNote] = useState(data?.note ? data?.note : '')
    const [formErrors, setErrors] = useState({})
    const errors = {}

    const handleValidation = () =>{
        if(amount.length === 0){
            errors.amount = {
                empty:"Amount is required"
            }
        }
        
        if(category.length === 0){
            errors.category = {
                empty:"Category is required"
            }
        }   

        if(expenseDate.length === 0){
            errors.expenseDate = {
                empty:"Expense Date is required"
            }
        }
        setErrors(errors)
    }

    const handleAmountChange = (e)=>{
        const value = e.target.value
        setAmount(value)
        dispatch(startCheckRemaining(Number(value)))
    }

    const handleSubmit =(e) =>{
        e.preventDefault()

        handleValidation()

        if(Object.keys(errors).length === 0){
            const formData = {
                amount:amount,
                categoryId:category,
                expenseDate:expenseDate,
                note:note
            }   
            
            formSubmittion(formData)

            setAmount('')
            setCategory('')
            setExpenseDate('')
            setNote('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label> Amount <sup className="text-danger fw-bold">*</sup> </label> <br/>
                    <input
                        value={amount}
                        onChange={handleAmountChange}
                        className="form-control"
                    />
                    {Object.keys(notice).length > 0  && <p style={{color:notice?.error ? "red":"green"}}>{notice?.message || notice?.error}</p>}
                    {formErrors?.amount?.empty && <p className="text-danger"> {formErrors?.amount?.empty} </p>}
                    <label > Category <sup className="text-danger fw-bold">*</sup> </label> 
                    <select 
                        className="form-select"     
                        value={category} 
                        onChange={(e)=>setCategory(e.target.value)}>
                        <option value=""> Select Category </option>
                        {categories.map((ele)=>{
                            return <option 
                                        key={ele._id}
                                        value={ele?._id}>
                                        {ele.categoryName}
                            </option>
                        })}
                    </select>
                    {formErrors?.category?.empty && <p className="text-danger"> {formErrors?.category?.empty} </p>}
                    <label> Expense Date <sup className="text-danger fw-bold">*</sup> </label> <br/>
                    <input
                        type="date"
                        value={expenseDate}
                        className="form-control"
                        onChange={(e)=>setExpenseDate(e.target.value)}
                    />
                    {formErrors?.expenseDate?.empty && <p className="text-danger"> {formErrors?.expenseDate?.empty} </p>}
                    <label> Note </label> <br/>
                    <input
                        type="text" 
                        value={note}
                        className="form-control"
                        onChange={(e)=>setNote(e.target.value)}
                    /><br/>
                    <input 
                        type="submit" 
                        className="btn btn-primary fw-bold"
                        disabled={notice?.error}
                        value={id ? "Edit Expense" : "Add Expense"}
                        />
                </form> 
        </div>  
    )
}

export default ExpenseForm