//form that creates a new transaction and lists it on the index (alltransactions.js)
//will use {useNavigate}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = () => {
  const [id, setId] = useState(0);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const API = process.env.REACT_APP_API;
    const newTransactionRoute = `${API}/transactions`;

    fetch(newTransactionRoute, {
      method: "POST",
      body: JSON.stringify({ id, type, date, from, amount, comment }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/transactions");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Entry</h1>
      <label>ID Number:</label>
      <input
        type="number"
        name="identification-number"
        onChange={(event) => {
          setId(event.target.value);
        }}
        id="newId"
      />
      <label>Type of Transaction:</label>
      <input
        type="text"
        name="transaction-type"
        onChange={(event) => {
          setType(event.target.value);
        }}
        id="typeInput"
      />
      <label>Date:</label>
      <input
        type="text"
        name="date-entry"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        id="newDate"
      />
      <label>From:</label>
      <input
        type="text"
        name="from-entry"
        onChange={(event) => {
          setFrom(event.target.value);
        }}
        id="newFrom"
      />
      <label>Amount:</label>
      <input
        type="number"
        name="transaction-amount"
        placeholder="0"
        onChange={(event) => {
          setAmount(parseInt(event.target.value, 10));
        }}
        id="amountEntry"
      />
      <label>Comment:</label>
      <textarea
        type="text"
        name="comment-body"
        placeholder="Leave a Message..."
        onChange={(event) => {
          setComment(event.target.value);
        }}
        id="transactionComment"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TransactionForm;
