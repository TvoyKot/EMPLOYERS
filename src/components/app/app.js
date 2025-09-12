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

  render() {
    const employers = this.state.data.length;
    const increased = this.state.data.filter(
      (item) => item.increase === true
    ).length;
    return (
      <div className="app">
        <AppInfo employers={employers} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
