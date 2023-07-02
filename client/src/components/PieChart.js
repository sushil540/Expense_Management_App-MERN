import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const PieChart  = (props) =>{

  const [user, expense] = useSelector((state)=>{
      return [state.user.data, state.expense.data]
  })

  const userBudget = user?.budget
  const userExpense = expense.filter((ele)=>ele.isDeleted === false).reduce((pre, curr)=>pre + curr.amount,0)

  const arrData = [userBudget, userExpense]

    ChartJS.register(ArcElement, Tooltip, Legend)
    const data = {
      labels: ['Budget', 'Expenses'],
      datasets: [
        {
          data:arrData,
          backgroundColor: [
            '#2E8A99',
            '#0E2954' 
          ],
          borderColor: [
            '#0000'
          ],
          borderWidth: 1,
        },
      ],
    }

    return(
        <div style={{width:"25rem"}}> 
          <h5 className="text-center">Pie Chart Represents Total Budget and Total Expenses</h5>
            <Pie data={data} />
        </div>  
    )
}

export default PieChart  