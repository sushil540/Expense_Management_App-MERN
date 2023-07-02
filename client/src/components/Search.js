import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'
import { startSearchExpenses } from '../actions/expenseActions'

const Search = (props)=>{
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setSearch(e.target.value)
        dispatch(startSearchExpenses(e.target.value))   
    }

    return (
        <div className="my-4 p-3 card">
            <h2> Search Expenses </h2>
                <input  
                    type="text"
                    value={search}
                    className="form-control border-0 border-bottom" 
                    placeholder="Search expenses..."
                    onChange={handleChange}
                />
        </div>
    )
}

export default Search