import React from "react"
import { Button, Form, Input, InputGroup, InputGroupText, Alert, Fade } from "reactstrap";

function ExpenseForm(props) {
  return (
    <Form className="w-75 p-3 mx-auto my-4 border bg-light" onSubmit={props.handleSubmit}>
      <Fade in={true} mountOnEnter={true} unmountOnExit={true}>
        <Alert className="text-dark" style={{ backgroundColor: "#bcd9ea", borderColor: "#bcd9ea" }}>Add new item below:</Alert>
      </Fade>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4 text-light" style={{ backgroundColor: "#5ba4cf" }}>Date:</InputGroupText>
        <Input className="col-8 ml-2" name="date" type="date" value={props.expense.date}
          onChange={props.handleChange} required />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4 text-light" style={{ backgroundColor: "#5ba4cf" }}>Catagory:</InputGroupText>
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

      <InputGroup className="w-75 mx-auto mb-2" >
        <InputGroupText className="col-4 text-light" style={{ backgroundColor: "#5ba4cf" }} >Description:</InputGroupText>
        <Input className="col-8 ml-2" name="description" type="text"
          value={props.expense.description} onChange={props.handleChange} required />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4 text-light" style={{ backgroundColor: "#5ba4cf" }}>Location:</InputGroupText>
        <Input className="col-8 ml-2" name="location" type="text"
          value={props.expense.location} onChange={props.handleChange} />
      </InputGroup>

      <InputGroup className="w-75 mx-auto mb-2">
        <InputGroupText className="col-4 text-light" style={{ backgroundColor: "#5ba4cf" }}>Amount:</InputGroupText>
        <Input className="col-8 ml-2" name="amount" type="number" value={props.expense.amount}
          onChange={props.handleChange} required />
      </InputGroup>

      <Button className="my-2" style={{ backgroundColor: "#026aa7", borderColor: "#026aa7" }}> Add Expense </Button>
    </Form>
  )
}

export default ExpenseForm


//style={{ backgroundColor: "skyblue" }}