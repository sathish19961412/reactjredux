import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { login,logout} from './features/user';
import {useSelector} from 'react-redux';

const Login=()=>{
  const dispatch=useDispatch();
  const [name,setName]=useState('');
  const [age,setAge]=useState(0);
  const [email,setEmail]=useState('');
  const user=useSelector(state=>state.user.value)
  return (
    <div>
        {!user.name &&(
        <div>
          <input type='text' className='form-control' value={name}  onChange={e=>setName(e.target.value)} placeholder='Name' /><br></br>
          <input type='text'  className='form-control'  value={age}  onChange={e=>setAge(e.target.value)} placeholder='Age' /> <br></br>
          <input type='email'  className='form-control'  value={email}  onChange={e=>setEmail(e.target.value)} placeholder='Email' /><br></br>
        </div>
        )}
        {!user.name?
          <button onClick={()=>dispatch(login({name,age,email}))} id='mb-5'>Login</button>:
          <button onClick={()=>dispatch(logout())} id='mb-5'>Logout</button>}
    </div>  
  )
}

export default Login
