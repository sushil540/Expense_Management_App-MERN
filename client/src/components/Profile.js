import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from './Popup'
import ProfileImage from './ProfileImage'
import { startDeleteMyAccount } from '../actions/userActions'
import Swal from 'sweetalert2'

const Profile = (props) =>{
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()

    const toggle = () => setModal(!modal)

    const user = useSelector((state)=>{
        return state.user.data
    })

    const handleAccountDelete = async() =>{
        const { value: password } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            },
            showCloseButton:true
          })
          
          if (!password){
            Swal.fire(`Enter your password to delete account`)
          }else{
            dispatch(startDeleteMyAccount(password))
          }
    }

    return (
        <div className="card border-0 p-2 shadow d-flex gap-1 justify-content-center rounded-3 align-items-center" style={{width:"25rem",height:"350px"}}>
            <ProfileImage width="130" height="130"/>
            <h4 className="text-primary border-bottom border-2 border-dark">
                Profile
                <button
                    onClick={toggle}
                    className="bg-transparent border-0 text-dark" style={{cursor:"pointer"}}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg> 
                </button> 
            </h4> 
            <hr className="w-100 border-3 opacity-75 rounded-5"/>
            <h5>{user.email}</h5>
            {modal && <Popup toggle={toggle} modal={modal} user={user}/>}
            <button onClick={handleAccountDelete} className="btn btn-danger">Delete my account</button>
        </div>
    )   
}

export default Profile