import React from 'react'
import DeletedExpense from './DeletedExpense'
import Profile from './Profile'

const Settings = (props) =>{
    
    return (
        <div className="container p-5 shadow-lg" style={{marginTop:"5rem"}}>
            <div className="row">
                <div className="col-md-8">   
                    <DeletedExpense/>
                </div>
                <div className="col-md-4 px-3 border-start border-4">
                    <Profile/>
                </div>
            </div>
        </div>  
    )
}

export default Settings