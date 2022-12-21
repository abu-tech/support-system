import { useState } from "react"
import {useSelector} from 'react-redux'

function NewTicket() {

  const {user} = useSelector(state => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iphone')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    // e.preventDefault()
  }

  return (
    <>
    <section className="heading">
      <h1>Create New Ticket</h1>
      <p>Please fill out the form below</p>
    </section>
    <section className="form">
      <div className="form-group">
        <label htmlFor="name">Customer Name</label>
        <input type="text" className="form-control" value={name} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="email">Customer Email</label>
        <input type="text" className="form-control" value={email} disabled />
      </div>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="product">Select Product</label>
        <select name="product" id="product" value={product} onChange={e => setProduct(e.target.value)}>
          <option value="iphone">iphone</option>
          <option value="macbook pro">macbook pro</option>
          <option value="ipod">ipod</option>
          <option value="air pods">air pods</option>
        </select>
        <div className="form-group">
          <label htmlFor="description">Description of the Issue</label>
          <textarea className="form-control" name="description" id="description" rows="5" cols="30" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-block">Submit</button>
      </div>
      </form>
    </section>
    </>
  )
}

export default NewTicket