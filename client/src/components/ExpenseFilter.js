import React, { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { startGetSortedExpense } from '../actions/expenseActions'

const ExpenseFilter = (props)=>{
    const [select, setSelect] = useState('')
    
    const dispatch = useDispatch()

    const handleChange = (selected)=>{
        setSelect(selected.value)
        if(selected.value !== "none"){
            dispatch(startGetSortedExpense(selected.value))
        }
    }

    const options = [
        { value: 'HigherToLower', label: 'HigherToLower' },
        { value: 'LowerToHigher', label: 'LowerToHigher' },
        { value: 'none', label: 'none' },
      ]
      
    return (
        <div>
            <Select 
                placeholder="SORT BY AMOUNT"
                options={options} 
                defaultValue={select}
                onChange={handleChange}
            />
        </div>
    )
}

export default ExpenseFilter