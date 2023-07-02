import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useDispatch } from 'react-redux'
import { startPutExpense , setMessage, setEditId} from '../actions/expenseActions'
import Swal from 'sweetalert2'

const EditExpense =(props) =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        return ()=>{
            dispatch(setEditId(''))
        }
    },[dispatch])

    const formSubmittion = (formData)=>{
        dispatch(startPutExpense(formData))
        dispatch(setMessage(''))
        dispatch(setEditId(''))
        Swal.fire('Expense Successfully Edited')
    }

    return (
        <div className="card p-4 bg-warning-subtle" style={{width:"32.5rem"}}>   
            <h3 className="text-center"> Edit Expense </h3> 
            <ExpenseForm formSubmittion={formSubmittion}/>
        </div>
    )
}

export default EditExpense