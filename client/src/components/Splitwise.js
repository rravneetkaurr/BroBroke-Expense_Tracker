import React, { useState } from "react";
import "../styles/Splitwise.css"; // Ensure this links to the CSS file containing the updated styles.

export default function SplitwiseApp() {
  const [groupName, setGroupName] = useState("");
  const [currency, setCurrency] = useState("$");
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [split, setSplit] = useState(0);

  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant("");
    }
  };

  const handleAddExpense = () => {
    if (expenseTitle && expenseAmount && paidBy) {
      const expense = {
        title: expenseTitle,
        amount: parseFloat(expenseAmount),
        paidBy,
      };
      setExpenses([...expenses, expense]);
      setExpenseTitle("");
      setExpenseAmount("");
      setPaidBy("");
    } else {
      alert("Please fill in all expense fields.");
    }
  };

  const calculateSplit = () => {
    if (participants.length === 0) {
      alert("No participants available to calculate split.");
      return;
    }
    if (expenses.length === 0) {
      alert("No expenses available to calculate split.");
      return;
    }

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const perPersonShare = totalExpenses / participants.length;

    setSplit(perPersonShare); // Set the calculated split
  };

  return (
    <div className="containerr">
      <div className="centered-box">
        <h1>Splitwise</h1>

        {/* Group Information Section */}
        <section>
          <h2>Create Group</h2>
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Currency Symbol"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </section>

        {/* Participants Section */}
        <section>
          <h2>Participants</h2>
          <input
            type="text"
            placeholder="Add Participant"
            value={newParticipant}
            onChange={(e) => setNewParticipant(e.target.value)}
          />
          <button onClick={handleAddParticipant}>Add Participant</button>
          <ul>
            {participants.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </section>

        {/* Expense Management Section */}
        <section>
          <h2>Expenses</h2>
          <input
            type="text"
            placeholder="Expense Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <select
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
          >
            <option value="" disabled>
              Select Payer
            </option>
            {participants.map((p, index) => (
              <option key={index} value={p}>
                {p}
              </option>
            ))}
          </select>
          <button onClick={handleAddExpense}>Add Expense</button>
          <ul>
            {expenses.map((exp, index) => (
              <li key={index}>
                {exp.title}: {currency}
                {exp.amount.toFixed(2)} (Paid by: {exp.paidBy})
              </li>
            ))}
          </ul>
        </section>

        {/* Split Calculation Section */}
        <section>
          <h2>Calculate Split</h2>
          <button onClick={calculateSplit}>Calculate</button>
          {split > 0 && (
            <p className="split-output">
              Each person owes: {currency}
              {split.toFixed(2)}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
