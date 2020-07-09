import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//if this is click - delete all the checked expenses

function TableHeader(props) {
  return (
    <tr>
      <th onClick={props.handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </th>
      <th>Date</th>
      <th>Catagory</th>
      <th>Description</th>
      <th>Amount</th>
    </tr>
  )
}

export default TableHeader