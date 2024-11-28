import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Chart from "./Chart";

const Add = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  // const [expenses, setExpenses] = useState(() => {
  //   const storedExpenses = sessionStorage.getItem("expenses");
  //   return storedExpenses ? JSON.parse(storedExpenses) : [];
  // });
  const [expenses, setExpenses]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    if (amount && category && date) {
      const newExpense = { amount, category, date };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      // sessionStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      setAmount("");
      setCategory("");
      setDate("");
      setShow(false);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={handleShow}
        className="p-2 rounded-md bg-green-600 text-white font-bold mt-4 hover:bg-blue-900"
      >
        ADD NEW EXPENSE
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>YOUR NEW EXPENSE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-col">
          <input
            value={amount}
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 m-2"
            placeholder="Amount"
          />
          <input
            value={category}
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 m-2"
            placeholder="Category"
          />
          <input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="p-2 m-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      {expenses.length > 0 && (
        <>
          <table className="table mt-8 border border-gray-400 p-2 shadow-md">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Amount</th>
                <th className="border border-gray-400 px-4 py-2">Category</th>
                <th className="border border-gray-400 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {expense.amount}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {expense.category}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {expense.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 w-96">
            <Chart data={expenses} />
          </div>
        </>
      )}
    </div>
  );
};

export default Add;

