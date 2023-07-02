import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRemoveExpense , setEditId} from '../actions/expenseActions'
import { startGetCategories } from '../actions/categoryActions'

const ExpensesData = (props) =>{
    const [next, setNext] = useState(5)
    const [previous, setPrevious] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetCategories())
    },[dispatch])

    const [expense, categoryData] = useSelector((state)=>{
        return [state.expense.data.filter((ele)=>ele.isDeleted === false), state.category.data]
    })

    const findCategory =(id)=>{
        const category = categoryData.find((ele)=>ele._id === id)
        return category?.categoryName
    }

    const handleRemove = (id)=>{
        dispatch(startRemoveExpense(id))
    }

    const handleEdit = (id) =>{
        dispatch(setEditId(id))
    }

    const handleNext = () =>{
        setNext(next + next)
        setPrevious(next)
    }

    const handlePrevious = () =>{
        setNext(next - previous)
        setPrevious(previous - previous)
    }

    return (
        <div className="my-5 p-4" style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}>
           {expense.length !== 0 ? ( <div>
                <h3> Listing Expenses - {expense.length} </h3>
                <div className="text-center">
                    <table className="table table-bordered" border="2">
                        <thead> 
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Edit</th> 
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {expense.slice(previous,next).map((ele)=>{
                                return (
                                    <tr key={ele._id}>
                                        <td>{findCategory(ele.categoryId)}</td>
                                        <td>
                                            <span className="text-danger fw-bold">{ele.amount}</span><br/>
                                            {ele?.note && <span> Note - <span className="text-danger">{ele?.note}</span> </span>}   
                                        </td>
                                        <td>{ele.expenseDate?.split('T')[0]}</td>
                                        <td>
                                            <button 
                                                className="btn btn-secondary"
                                                onClick={()=>handleEdit(ele._id)}>
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={()=>handleRemove(ele._id)}>
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {expense.length > 5 && <div className="d-flex justify-content-between">
                        <button 
                            disabled={!previous}
                            className="btn btn-primary"
                            onClick={handlePrevious}>
                            previous 
                        </button> 
                        <button 
                            disabled={next >= expense.length}
                            className="btn btn-secondary"
                            onClick={handleNext}>
                            next
                        </button>
                    </div>}
                </div>
            </div> ) : (
                <div className="text-center text-warning">
                    <h2> No Expenses has been made </h2>
                </div>
            )}
        </div>
    
    )   
}

export default ExpensesData