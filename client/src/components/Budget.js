import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Budget = (props) =>{

    const [loggedInUser, expense] = useSelector((state)=>{
        return [state.user.data, state.expense.data.filter((ele)=>ele.isDeleted === false)]
    })
    
    const TotalExpense = expense.reduce((pre, curr)=> pre + curr.amount,0)

    return (
        <div className="p-4 my-4" style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", backgroundColor:"#27374D",color:"#F4F4F4"}}>
            <div className="d-flex flex-row justify-content-between p-2">
                <h2> Budget </h2>
                <h2 className="fw-bold" style={{color:"#DEF5E5"}}>{loggedInUser.budget}</h2> 
            </div>
            <div className="d-flex flex-row justify-content-between p-2">
                <h2> Total Expense </h2> 
                <h2 className="fw-bold" style={{color:"#FA4659"}}> {TotalExpense} </h2>
            </div>
            <div className="d-flex flex-row justify-content-between p-2">
                <h2> Remaining purse </h2> 
                <h2 className="fw-bold" style={{color:"#5D9C59"}}> {loggedInUser.budget - TotalExpense} </h2>
            </div>
            {expense.length !== 0 && <Link to="/view" style={{color:"#FCF9BE"}}>view summary</Link>}
        </div>
    )
}

export default Budget