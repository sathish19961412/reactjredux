import React from 'react'
import {useSelector} from 'react-redux';

const Profile=()=>{
  const user=useSelector(state=>state.user.value)
  const theme=useSelector(state=>state.theme.value)
  if(!user.name)
  {
    return
  }
  return (
    <div style={{'color':theme}}>
        <h2>Profile Info</h2>
        <h3>Name:{user.name}</h3>
        <h3>Age:{user.age}</h3>
        <h3>Email:{user.email}</h3>
    </div>
  )
}

export default Profile
