import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { startGetCategories } from './actions/categoryActions'
import { startGetExpense } from './actions/expenseActions'

const App = (props) =>{
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(startGetCategories())
      dispatch(startGetExpense())
    }
  },[dispatch])

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default App