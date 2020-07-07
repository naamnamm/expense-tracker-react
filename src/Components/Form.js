import React from "react"

function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <p>Add new item below:</p>

        <label>Catagory:</label>
        <select name="catagory"
          onChange={props.handleChange}>
          <option value="select">--Please Select--</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <br />
        <br />

        <label>Description:</label>
        <input name="description" type="text" value={props.expense.description} onChange={props.handleChange} />
        <br />
        <br />

        <label>Amount:</label>
        <input name="amount" type="number" value={props.expense.amount} onChange={props.handleChange} />
        <br />
        <br />

        <label>Date:</label>
        <input name="date" type="date" value={props.expense.date} onChange={props.handleChange} />
        <br />
        <br />
        <button> Add Expense </button>

      </form>
    </div>
  )
}

export default Form