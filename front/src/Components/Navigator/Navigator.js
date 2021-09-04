import React from "react";
import "./Navigator.css";
import { Route, Link, useHistory } from "react-router-dom";

function Navigator(props) {
  const history = useHistory();

  const handler = (e) => {
    e.preventDefault();
    if (e.target.value === "красный") history.push("/red");
    if (e.target.value === "синий") history.push("/blue");
    if (e.target.value === "зеленый") history.push("/green");
    if (e.target.value === "добавить") history.push("/new");
    if (e.target.value === "все") history.push("/");
  };

  return (
    <div className="glavDiv">
      <div className="linkDiv">
        <Route exact path="/">
          <Link className="linkClass" to="/">
            Все
          </Link>
          <Link className="linkClass" to="/red">
            Красный
          </Link>
          <Link className="linkClass" to="/blue">
            Синий
          </Link>
          <Link className="linkClass" to="/green">
            Зеленый
          </Link>
        </Route>
        <Route exact path="/red">
          <Link className="linkClass" to="/">
            Все
          </Link>

          <Link className="linkClass" to="/blue">
            Синий
          </Link>
          <Link className="linkClass" to="/green">
            Зеленый
          </Link>
        </Route>
        <Route exact path="/blue">
          <Link className="linkClass" to="/">
            Все
          </Link>
          <Link className="linkClass" to="/red">
            Красный
          </Link>
          <Link className="linkClass" to="/green">
            Зеленый
          </Link>
        </Route>
        <Route exact path="/green">
          <Link className="linkClass" to="/">
            Все
          </Link>
          <Link className="linkClass" to="/red">
            Красный
          </Link>
          <Link className="linkClass" to="/blue">
            Синий
          </Link>
        </Route>
      </div>
      <div>
        <div className="dropdown">
          Управление
          <select defaultValue="" id="select_" onChange={(e) => handler(e)}>
            <option defaultChecked="">{""}</option>
            <option value="добавить">Добавить товар</option>
            <option value="все">Все</option>
            <option value="красный">красный</option>
            <option value="синий">синий</option>
            <option value="зеленый">зеленый</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
