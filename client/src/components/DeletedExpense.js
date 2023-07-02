import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUndoExpense } from '../actions/expenseActions'
import Swal from 'sweetalert2'

const DeletedExpense = (props) =>{

    const [expense,categoryData] = useSelector((state)=>{
        return [state.expense.data.filter((ele)=>ele.isDeleted === true), state.category.data]
    })

    const findCategory =(id)=>{
        const category = categoryData.find((ele)=>ele._id === id)
        return category?.categoryName
    }

    const dispatch = useDispatch()

    const handleUndo =(id) =>{
        dispatch(startUndoExpense(id))
        Swal.fire("Expense Successfully Restored")
    }

    return (
        <div className="p-4 card border border-0">
            <div className="d-flex justify-content-between align-items-center border-bottom border-2 mb-4">
                <h2 style={{color:"#374259"}} className="fs-3">Undo Deleted Expenses</h2>
                <lord-icon
                    src="https://cdn.lordicon.com/kfzfxczd.json"
                    trigger="hover"
                    colors="primary:#121331"
                    style={{width:"30px",height:"30px"}}>
                </lord-icon>
            </div>
            {expense.length > 0 ? <table border="1" className="table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Undo</th>
                    </tr>
                </thead>
                <tbody>
                    {expense.map((ele)=>{
                        return (
                            <tr key={ele._id}>  
                                <td className="opacity-25">{findCategory(ele.categoryId)}</td>
                                <td className="opacity-25">{ele.amount}</td>
                                <td className="opacity-25">{ele.expenseDate?.split('T')[0]}</td>
                                <td>
                                    <button 
                                        onClick={()=>{handleUndo(ele._id)}}
                                        className="btn btn-outline-secondary">
                                        Undo
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : (
                    <div className="border-top border-4 opacity-25"> 
                        <h2> Trash is empty </h2>
                    </div>
                )
            }
        </div>
    )
}

export default DeletedExpense