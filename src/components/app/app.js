import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Pavel M", salary: 2000, increase: false, rise: true, id: 1 },
        {
          name: "Alexander N",
          salary: 1000,
          increase: true,
          rise: false,
          id: 2,
        },
        { name: "Nikita E", salary: 300, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((item) => item.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index  + 1);
      // const newArray = [...before, ...after];
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    if (name === "" || salary === "") {
      return;
    } else {
      const newItem = {
        name,
        salary,
        increase: false,
        rise: false,
        id: uuidv4(),
      };
      this.setState(({ data }) => {
        const oldArray = [...data];
        const newArray = [...oldArray, newItem];
        return {
          data: newArray,
        };
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  searchEmp = (term, items) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({
      term,
    });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise === true);
      case "salary":
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term } = this.state;
    const employers = this.state.data.length;
    const increased = this.state.data.filter(
      (item) => item.increase === true
    ).length;
    const visibleData = this.filterPost(this.searchEmp(term, data), this.state.filter);
    return (
      <div className="app">
        <AppInfo employers={employers} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
          filter={this.state.filter}
          onFilterSelect={this.onFilterSelect}
          />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
