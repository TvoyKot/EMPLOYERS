import "./employers-list-item.css";

const EmployersListItem = (props) => {
  const {
    name,
    salary,
    increase,
    rise,
    onDelete,
    onToggleProp,
  } = props;

  let className = "list-group-item d-flex justify-content-between";
  if (increase) {
    className += " increase";
  }
  if (rise) {
    className += " like";
  }

  return (
    <li className={className}>
      <span
        onClick={onToggleProp}
        className="list-group-item-label"
        data-toggle="rise"
      >
        {name}
      </span>
      <input
        className="list-group-item-input"
        type="text"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleProp}
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployersListItem;
