import "./employers-list-item.css";
import { Component } from "react";

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise,
    }));
  };

  render() {
    const { name, salary } = this.props;

    const { increase, rise } = this.state;

    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
      className += " increase";
    }
    if (rise) {
      className += " like";
    }

    return (
      <li className={className}>
        <span onClick={this.onRise} className="list-group-item-label">
          {name}
        </span>
        <input
          className="list-group-item-input"
          type="text"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onIncrease}
            type="button"
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;
