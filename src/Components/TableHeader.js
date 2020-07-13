import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TableHeader(props) {
  return (
    <tr>
      <th onClick={props.handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </th>
      <th>Date</th>
      <th>Category</th>
      <th>Description</th>
      <th>Location</th>
      <th>Amount</th>
    </tr>
  )
}

export default TableHeader