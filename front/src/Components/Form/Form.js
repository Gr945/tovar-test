import React from "react";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductSagaAC } from "../../Redux/ActionCreators";

function Form(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const addProduct = (e) => {
    e.preventDefault();
    dispatch(
      addProductSagaAC(
        e.target.name.value,
        e.target.price.value,
        e.target.number.value,
        e.target.color.value,
        e.target.file.value
      )
    );
    history.push("/");
  };
  return (
    <div className="formDiv animate__animated animate__flipInY">
      <form onSubmit={(e) => addProduct(e)}>
        <div className="mb-3">
          <h1>Добавить товар</h1>
          <label htmlFor="formGroupExampleInput" className="form-label">
            Название
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Цена
          </label>
          <input
            min="0"
            name="price"
            required
            placeholder="руб"
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Количество
          </label>
          <input
            min="0"
            name="number"
            required
            placeholder="шт"
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Вкладка
          </label>
          <select
            required
            name="color"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultChecked="">{""}</option>
            <option value="красный">Красный</option>
            <option value="синий">Синий</option>
            <option value="зеленый">Зеленый</option>
          </select>
        </div>
        <div className="mb-3">
          <input required id="file-input" type="file" name="file" multiple />
          <label htmlFor="file-input">Выберите файл</label>
          <span> или перетащите его сюда</span>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-success">
            Добавить
          </button>
          <Link to="/">Отменить</Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
