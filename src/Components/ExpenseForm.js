import React from "react"
import { Button, Form, Input, InputGroup, InputGroupText, Alert, Fade } from "reactstrap";

function ExpenseForm(props) {
  return (
    <Form className="w-75 p-3 mx-auto my-4 border" onSubmit={props.handleSubmit}>
      <Fade in={true} mountOnEnter={true} unmountOnExit={true}>
        <Alert color="primary">Add new item below:</Alert>
      </Fade>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4">Date:</InputGroupText>
        <Input className="col-8 ml-2" name="date" type="date" value={props.expense.date}
          onChange={props.handleChange} required />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4">Catagory:</InputGroupText>
        <Input className="col-8 ml-2" type="select" name="catagory"
          value={props.expense.catagory} onChange={props.handleChange}>
          <option value="select">--Please Select--</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="miscellaneous">Miscellaneous</option>
        </Input>
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4">Description:</InputGroupText>
        <Input className="col-8 ml-2" name="description" type="text"
          value={props.expense.description} onChange={props.handleChange} required />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4">Location:</InputGroupText>
        <Input className="col-8 ml-2" name="location" type="text"
          value={props.expense.location} onChange={props.handleChange} />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4">Amount:</InputGroupText>
        <Input className="col-8 ml-2" name="amount" type="number" value={props.expense.amount}
          onChange={props.handleChange} required />
      </InputGroup>

      <Button className="my-2" color="primary"> Add Expense </Button>
    </Form>
  )
}

export default ExpenseForm

//<Form className="m-5 p-3 border border-dark"