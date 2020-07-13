import React from 'react';
import './CSS/App.css';
import ExpenseForm from './Components/ExpenseForm';
import Table from './Components/Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      category: "",
      description: "",
      location: "",
      amount: "",
      date: "",
      isChecked: "",
      expenseData: [],
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleDelete = () => {
    const filtered = this.state.expenseData.filter(item => !item.isChecked)
    this.setState({ expenseData: filtered })
  }

  handleCheckbox = (id) => {
    const updatedExpense = this.state.expenseData.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : { ...item }
    )
    this.setState({ expenseData: updatedExpense })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpense = this.state.expenseData.concat({
      id: Date.now(),
      date: this.state.date,
      category: this.state.category,
      description: this.state.description,
      location: this.state.location,
      amount: this.state.amount,
      isChecked: false,
    })

    this.setState({
      id: "",
      date: "",
      category: "",
      description: "",
      location: "",
      amount: "",
      isChecked: "",
      expenseData: updatedExpense
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header font-weight-bold">Expense Tracker React</header>

        <ExpenseForm
          expense={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <Table expense={this.state.expenseData}
          handleDelete={this.handleDelete}
          handleCheckbox={this.handleCheckbox} />

      </div>
    );
  }
}

export default App;

    // let expense = [...this.state.expenseData]

    // expense.push({
    //   id: Date.now(),
    //   category: this.state.category,
    //   description: this.state.description,
    // })
    //
