import React from "react"

//if this is click - delete all the checked expenses

function TableHeader(props) {
  console.log(props)

  return (
    <tr>
      <th onClick={props.handleDelete}>delete</th>
      <th>catagory</th>
      <th>description</th>
      <th>amount</th>
      <th>date</th>
    </tr>
  )
}

export default TableHeader