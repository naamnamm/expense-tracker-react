import React from "react"
import TableData from './TableData';
import TableHeader from './TableHeader';

function Table(props) {

  let renderContent = props.expense.map(item =>
    <TableData key={item.id} expense={item}
      handleDelete={props.handleDelete}
      handleCheckbox={props.handleCheckbox} />)

  let renderDefaultRow =
    <tr>
      <td colSpan={6}>New expense will be added here.</td>
    </tr>

  let tableContent = !props.expense.length ? renderDefaultRow : renderContent

  let total = !props.expense.length ? 0 : props.expense
    .map(item => Number(item.amount))
    .reduce((a, b) => a + b)

  let renderTotal =
    <tr>
      <td colSpan={5} className="text-left">Total</td>
      <td colSpan={1}>${total}</td>
    </tr>

  let totalRow = props.expense.length >= 1 ? renderTotal : null

  return (
    <table className="table table-bordered w-75 mx-auto">

      <thead className="thead-light">
        <TableHeader handleDelete={props.handleDelete} />
      </thead>

      <tbody>
        {tableContent}
      </tbody>

      <tfoot>
        {totalRow}
      </tfoot>

    </table>
  )
}

export default Table