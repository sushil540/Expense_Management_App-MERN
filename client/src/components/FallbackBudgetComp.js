import React from 'react'
import AddBudget from './AddBudget'

const FallbackBudgetComp = (props) =>{
    return(
        <div>
            <h3>Set Budget</h3>
            <AddBudget/>
        </div>
    )
}

export default FallbackBudgetComp 