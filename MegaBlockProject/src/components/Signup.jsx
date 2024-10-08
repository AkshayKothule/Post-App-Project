import React , {useState} from 'react'
import { Link  , useNavigate} from 'react-router-dom'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'

function Signup() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[error , setError]=useState("");
    const {register , handleSubmit}=useForm();

    const create=async(data)=>{
        setError("");
        try {
            
        } catch (error) {
            setError(error.message);
            
        }

    }
  return (
    <div>
      
    </div>
  )
}

export default Signup
