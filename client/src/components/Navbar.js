import React, { useEffect } from 'react'
import Home from './Home'
import Login from './Login'
import { Link, Route } from 'react-router-dom'
import Register from './Register'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Dashboard from './Dashboard'
import {useDispatch, useSelector} from 'react-redux'
import { setLoggedInUser, startGetLoggedInUser } from '../actions/userActions'
import Settings from './Settings'
import PrivateRoute from './helper/PrivateRoute'
import ViewSummary from './ViewSummary'
import ProfileImage from './ProfileImage'
import Swal from 'sweetalert2'

const Navbar = (props) =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(startGetLoggedInUser())
        }
    },[dispatch]) 

    const user = useSelector((state)=>{
            return state.user
        })  


    return (    
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 p-4 shadow ">
                <div>
                    <div className="navbar-nav">                                
                            <Link className="navbar-brand fs-4 border-end border-3 fw-bold px-2" to="/" style={{color:"#374259"}}>Expense Management</Link>   
                        {user.data?._id ? (
                                <>
                                    <Link className="nav-link" to="/dashboard" style={{color:"#545B77"}}>Dashboard</Link>
                                    <Link className="nav-link" to="/setting" style={{color:"#545B77"}}>Settings</Link>
                                    <Link className="nav-link" to="/login" onClick={()=>{
                                        localStorage.removeItem('token')
                                        dispatch(setLoggedInUser({})) 
                                        Swal.fire("Successfully Loggedout")  
                                    }} style={{color:"#545B77"}}>Logout</Link>
                                    {props.location.pathname !== "/setting" 
                                              && 
                                            <Link
                                                className="nav-link position-absolute" 
                                                to="/setting"
                                                style={{right:"1rem",top:"-2.5rem"}}>                                            
                                            <ProfileImage width="65" height="65"/>
                                    </Link>}
                                </>
                            ):(
                                <>
                                    <Link className="nav-link" to="/register" style={{color:"#545B77"}}>Register</Link>
                                    <Link className="nav-link" to="/login" style={{color:"#545B77"}}>Login</Link>
                                </>
                            )}
                    </div>
                </div>
            </nav>

            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register} exact/> 
            <Route path="/login" component={Login} exact/>
            <PrivateRoute path="/dashboard" component={Dashboard} exact/>
            <PrivateRoute path="/view" component={ViewSummary} exact/>
            <PrivateRoute path="/setting" component={Settings} exact/>
        </div>
    )
}

export default withRouter(Navbar)