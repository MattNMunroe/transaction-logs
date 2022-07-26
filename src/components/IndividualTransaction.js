import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const IndividualTransaction = () => {

    const { id } = useParams()
    const [transaction, setTransaction] = useState({})
    
    useEffect(() => {
    const API = process.env.REACT_APP_API
    const individualRoute = `${API}/transactions/${id}`
    fetch(individualRoute)
    .then((res) => res.json())
    .then((data) => setTransaction(data))
    .catch((error) => {
        return error
    })
},[id])

const { id : transactionId, type, date, from, amount, comment } = transaction
    return (
        <div>
            <h1>{date}</h1>
            <h3>{type}</h3>
            <h3>{amount}</h3>
            <h3>{from}</h3>
            <h3>{comment}</h3>
            <h5>{transactionId}</h5>
        </div>
    )
}

export default IndividualTransaction