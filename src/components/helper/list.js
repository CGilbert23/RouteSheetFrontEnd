import React from "react";

// Components
import Dropdown from "../Dropdown";
import { currentDate, parseDate, dateDifference } from "../../utils";

const List = ({
  dept_id,
  title,
  data,
  depts,
  handleChange,
  handleDelete,
  handleUpdate,
  selectedCar,
  selectedDept
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
            <th>Date In</th>
            <th>Current Date</th>
            <th>Days</th>
            <th>Notes</th>
            <th>Send To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((ele, idx) => {
            var days = dateDifference(ele.date_in);

            if (ele.name == 'Frontline Ready'){
                days = ele.days;
            }

            return (
              <tr key={idx}>
                <td>{ele.name}</td>
                <td>{ele.stock}</td>
                <td>{ele.year}</td>
                <td>{ele.make}</td>
                <td>{ele.model}</td>
                <td>{parseDate(ele.ucm_in)}</td>
                <td>{parseDate(ele.date_in)}</td>
                <td>{parseDate(currentDate)}</td>
                <td>{days}</td>
                <td>{ele.notes}</td>
                <td><Dropdown button options={depts.filter(e => e.dept_id !== dept_id)} name={`selectedDept_${ele.vehicle_id}`} value={selectedDept} handleChange={(e) => handleChange(e, ele)} handleUpdate={() => handleUpdate(ele.summary_id, days)} disabled={selectedCar?.vehicle_id === ele.vehicle_id ? false : true} /></td>
                <td><button onClick={() => handleDelete(ele)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default List;