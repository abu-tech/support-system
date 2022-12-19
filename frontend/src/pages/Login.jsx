import { useState } from "react"
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { login } from "../features/auth/authSlice"
import {useSelector, useDispatch} from 'react-redux'

function Login() {
  const [FormData, setFormData] = useState({
    email:"",
    password:"",
  });

  const {email, password} = FormData

  const {user, isSuccess, isLoading, message} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  return (
    <>
      <section className="heading">
        <h1><FaSignInAlt /> Login</h1>
        <p>Please Login to get support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id="email" value={email} name="email" onChange={onChange} placeholder="Enter Your Email" required />  
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" value={password} name="password" onChange={onChange} placeholder="Enter Password" required />  
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login