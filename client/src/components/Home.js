import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) =>{

    const myStyle = {
        width: "400px",
        height: "400px",
        position:"relative",
        animation:"myfirst 5s linear 5s infinite alternate"
      }

    return(
        <div className="container my-5">
            <div className="border-bottom ">
                <h1 className="fw-bold mb-5"> Expense Management App </h1>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <p className="lh-base fs-4">
                                An expense management app is an application that helps you track your expenses and budget.
                                It allows you to add expenses to track your spendings on food, shopping, groceries, etc.,
                                You can also add a description for each expense and select a category.
                            </p>
                            <p className="lh-base fs-4">
                                App will do all the neccessary computation and displays the result 
                                which are represented in the form of Line Chart and Pie Chart.
                                In this way it will be more easy to track your expenses.
                            </p>
                            <p className="lh-base fs-4">
                                To begin with you have to create an account
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="./hero.png" 
                                    style={myStyle}
                                    alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <h2 className="text-center"> Steps </h2>
                    <div className="col-md-4">
                        <img src="./register.png" className="my-5" width="300" height="300" alt="1"/>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#AAE3E2",fontColor:"#374259"}}>1</span> <br/>
                            <span className="opacity-75 fw-lighter" style={{fontSize:"8rem"}}>|</span>
                        </div>
                    </div>
                    <div className="col-md-4 m-auto">
                        <h2> Create a an account </h2>        
                        <Link to="/register"> Register here </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 m-auto">
                        <h2>Login</h2>  
                        <Link to="/login">Login</Link>                          
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#D9ACF5",fontColor:"#374259"}}>2</span> <br/>
                            <span className="opacity-75 fw-lighter" style={{fontSize:"8rem"}}>|</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="./login.png" className="my-5" width="400" height="300" alt="2"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="./budget.png" className="my-5" width="350" height="350" alt="3"/>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#FDEBED",fontColor:"#374259"}}>3</span> <br/>
                            <span className="opacity-75 fw-lighter" style={{fontSize:"8rem"}}>|</span>
                        </div>
                    </div>
                    <div className="col-md-4 m-auto">
                        <h2>Set budget</h2>
                    </div>
                </div>   
                <div className="row">
                    <div className="col-md-4 m-auto">
                            <h2>Add Category</h2>  
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#AAE3E2",fontColor:"#374259"}}>4</span> <br/>
                            <span className="opacity-75 fw-lighter" style={{fontSize:"8rem"}}>|</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="./category.png" className="my-5" width="300" height="300" alt="4"/>
                    </div>
                </div>     
                <div className="row">
                    <div className="col-md-4">
                        <img src="./expense.png" className="my-5" width="350" height="350" alt="5"/>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#FDEBED",fontColor:"#374259"}}>5</span> <br/>
                            <span className="opacity-75 fw-lighter" style={{fontSize:"8rem"}}>|</span>
                        </div>
                    </div>
                    <div className="col-md-4 m-auto">
                        <h2>Add Expense</h2>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-4" style={{width:"450px"}}></div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="p-4 rounded-circle fs-2 fw-bold shadow" style={{backgroundColor:"#FFCEFE",fontColor:"#374259"}}>Done</span> <br/>
                        </div>
                    </div>
                </div>            
        </div>
    )
}

export default Home