import "./app-info.css";

const AppInfo = (props) => {
  const { employers, increased } = props;
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании EMP</h1>
      <h2>Общее число сотрудников: {employers}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default AppInfo;
