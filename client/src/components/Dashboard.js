import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import ExpensesData from './ExpensesData'
import Budget from './Budget'
import Search from './Search'
import EditExpense from './EditExpense'
import { useSelector } from 'react-redux'
import AddCategoryForm from './AddCategoryForm'
import FallbackExpense from './FallbackExpense'
import FallbackBudgetComp from './FallbackBudgetComp'
import ExpenseFilter from './ExpenseFilter'

const Dashboard = (props) =>{

    const [expense, user] = useSelector((state)=>{
        return [state.expense, state.user.data]
    })

    return (
        <div className="bg-light m-5 p-5 rounded-4" style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
            <div className="container">
                <div className="row"> 
                    <div className="col-md-5 border-end border-5 border-secondary-subtle">
                        {Number(user.budget) ? <Budget/> : <FallbackBudgetComp/>} 
                        <hr className="border border-primary border-3 opacity-75"/>
                        <div className="mb-4">
                            <AddCategoryForm/> 
                        </div>
                       {expense.editId ? <EditExpense/> : <AddExpenseForm/>}
                    </div>
                    <div className="col-md-7 p-5">
                        <Search/>
                        <hr className="border border-danger border-3 opacity-75"/>
                        { Number(user.budget) > 0 ? (
                            <div>  
                               { expense.data.length > 1 && <ExpenseFilter/> }
                                <ExpensesData/> 
                            </div>
                        ) : (
                            <FallbackExpense/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard