import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'

const ViewSummary  = (props) =>{
    return(
        <div className="container my-5 shadow-lg p-5">
            <div className="row">
                <div className="col-md-6">
                    <PieChart/>
                </div>
                <div className="col-md-6">
                    <BarChart/>
                </div>
            </div>
        </div>  
    )
}

export default ViewSummary  