import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useDispatch } from 'react-redux'
import { startAddexpense, startGetExpense, setMessage } from '../actions/expenseActions'
import Swal from 'sweetalert2' 

const AddExpenseForm = (props)=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{ 
        dispatch(startGetExpense())
    },[dispatch])

    const formSubmittion = (formData)=>{
        dispatch(startAddexpense(formData))
        dispatch(setMessage(''))
        Swal.fire('Expense Successfully Added')
    }

    return (
        <div className="card p-4" style={{width:"32.5rem"}}>
            <h3 className="text-center"> Add Expense </h3> 
            <ExpenseForm formSubmittion={formSubmittion}/>
        </div>
    )
}

export default AddExpenseForm