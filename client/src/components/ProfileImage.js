import React from 'react'
import { useSelector } from 'react-redux'

const ProfileImage =(props) =>{
    const { width , height } = props 
    const user = useSelector((state)=>{
        return state.user.data
    })

    return (
        <img src={user?.imageURL ? `http://127.0.0.1:4080/${user?.imageURL}` : "https://tse1.mm.bing.net/th?id=OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3&pid=Api&P=0&h=180"} 
            alt="profile"  
            className="border border-4 mt-5"
            width={width}
            height={height}  
            style={{borderRadius:"4rem"}}   
        />
    )
}

export default ProfileImage