import React from "react"


function TableData(props) {
  console.log(props)

  return (
    <tr>
      <td><input type="checkbox"
        onChange={() => props.handleCheckbox(props.expense.id)}
      /></td>
      <td>{props.expense.date}</td>
      <td>{props.expense.catagory}</td>
      <td>{props.expense.description}</td>
      <td>{props.expense.location}</td>
      <td>${props.expense.amount}</td>
    </tr>
  )
}

export default TableData