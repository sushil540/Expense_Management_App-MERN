import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({component:Component, ...rest}) =>{
    return (
        <Route
            {...rest}
            render={(props)=>{
              return localStorage.getItem('token') ? ( 
                    <Component {...props}/>
                ) : (
                    <Redirect 
                        to={{
                            pathname:"/register"
                        }}
                    /> 
                ) 
            }}
        />
    )
}

export default PrivateRoute