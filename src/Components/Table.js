import React from "react"
import TableData from './TableData';
import TableHeader from './TableHeader';

function Table(props) {

  let renderContent = props.expense.map(item =>
    <TableData key={item.id} expense={item}
      handleDelete={props.handleDelete}
      handleCheckbox={props.handleCheckbox}
      render="expense" />)

  let renderDefaultRow =
    <tr>
      <td colSpan={5}>Add expense here</td>
    </tr>

  let tableContent = !props.expense.length ? renderDefaultRow : renderContent

  let total = !props.expense.length ? 0 : props.expense
    .map(item => Number(item.amount))
    .reduce((a, b) => a + b)

  let renderTotal =
    <tr>
      <td colSpan={4}>Total</td>
      <td colSpan={1}>{total}</td>
    </tr>

  let totalRow = props.expense.length >= 1 ? renderTotal : null

  return (
    <table className="table">

      <thead>
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