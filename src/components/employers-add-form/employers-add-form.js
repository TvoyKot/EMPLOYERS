import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
    console.log(props);
  }
  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавить нового сотрудника</h3>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            onChange={this.onValueChange}
            name="name"
            value={name}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            onChange={this.onValueChange}
            name="salary"
            value={salary}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
