import React from "react";

// Components
import Dropdown from "../Dropdown";
import { parseDate, dateDifference } from "../../utils";

const currentDate = new Date();

const List = ({
  title,
  data,
  depts,
  handleChange,
  handleDelete,
  handleUpdate,
  buttonName,
  selectedCar
}) => {
    return (
      <>
        <h2 className="section-title">Cars At {title}</h2>
        <table className="route-table">
          <thead>
            <tr>
              <th>Dept</th>
              <th>Stock</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>UCM IN</th>
              <th>Current Date</th>
              <th>Days</th>
              <th>Notes</th>
              <th>Send To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((ele, idx) => (
              <tr key={idx}>
                <td>{ele.name}</td>
                <td>{ele.stock}</td>
                <td>{ele.year}</td>
                <td>{ele.make}</td>
                <td>{ele.model}</td>
                <td>{parseDate(ele.date_in)}</td>
                <td>{parseDate(currentDate)}</td>
                <td>{dateDifference(currentDate, ele.date_in)}</td>
                <td>{ele.notes}</td>
                <td><Dropdown button options={depts} handleChange={(e) =>handleChange(e, ele)} handleUpdate={handleUpdate} disabled={selectedCar?.vehicle_id === ele.vehicle_id ? false : true}/></td>
                <td><button onClick={() => handleDelete(ele)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}

export default List;