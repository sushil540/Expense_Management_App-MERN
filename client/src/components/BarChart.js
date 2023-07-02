import React from 'react'
import { Chart } from "react-google-charts"
import { useSelector } from 'react-redux'

const BarChart = (props) =>{

    const [expense, category ] = useSelector((state)=>{
        return [state.expense.data.filter((ele)=>ele.isDeleted === false), state.category.data]
    })

    const chartData = {}

    category.forEach((ele)=>{
        expense.forEach((e)=>{
            if(ele._id === e.categoryId){
                if(chartData.hasOwnProperty(ele.categoryName)){
                    chartData[`${ele.categoryName}`] += e.amount
                }else{
                    chartData[`${ele.categoryName}`] = e.amount
                }
            }
        })
    })

    const main = [['Category','Amount',{ role: "style"}]]

    for(let key in chartData){
        const data = []
        data.push(`${key}`,chartData[key], `#4455478`)
        main.push(data)
    }

    return (
        <div className="text-center">
            <h5>Column Chart Represents Total Expenses in Various Categories</h5>
            <Chart chartType="ColumnChart" width="100%" height="500px" data={main} />
        </div>
    )
}

export default BarChart