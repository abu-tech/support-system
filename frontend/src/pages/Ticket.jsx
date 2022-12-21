import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {getTicket, reset, closeTicket} from '../features/ticket/ticketSlice'
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

 
function Ticket() {
    const {isError, isSuccess, isLoading, message, ticket} = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if(isSuccess){
            return () => {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        dispatch(getTicket(params.id))
    }, [isError, message, dispatch, params.id])

    const onTicketClose = () => {
        dispatch(closeTicket(params.id))
        toast.success("Ticket Closed")
        navigate("/tickets")
    }

    if(isLoading){
        return <Spinner />
    }

  return (
    <div className="ticket-page">
        <header className="ticket-header">
            <BackButton url="/tickets" />
            <h2>Ticket ID: {ticket._id}
            <span className={`status status-${ticket.status}`}>{ticket.status}</span>
            </h2>
            <h3>Product: {ticket.product}</h3>
            <h4>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-IN')}</h4>
            <hr />
            <div className="ticket-desc">
                <h3>Description of the Issue</h3>
                <p>{ticket.description}</p>
            </div>
        </header>
        {ticket.status !== "closed" && (
            <button onClick={onTicketClose} className="btn btn-block btn-danger">Close Ticket</button>
        )}
    </div>
  )
}

export default Ticket