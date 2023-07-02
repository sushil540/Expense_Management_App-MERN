import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startUpdateProfile } from '../actions/userActions'
import Swal from 'sweetalert2'

const EditProfile =(props) =>{
    const { toggle } = props
    const [file, setFile] = useState('')
    const [pic, setPic] = useState({})

    const dispatch = useDispatch()

    const handleFileChange = (e)=>{
        setFile(e.target.value)
        setPic(e.target.files[0])
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append('avatar',pic) 
        dispatch(startUpdateProfile(data))
        toggle()
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Profile Successfully Updated',
            showConfirmButton: false,
            timer: 1500
          })
    }    
        
    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form">
                <input 
                    type="file"
                    value={file}
                    className="form-control"
                    accept="image/png"
                    onChange={handleFileChange}/>
                    <br/>
                {Object.keys(file).length > 0 && <input type="submit" className="btn btn-primary" value="Upload"/>}
            </form> 
        </div>
    )
}

export default EditProfile