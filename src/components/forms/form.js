import React from "react";

// Components
import Dropdown from "../Dropdown";

const handleDisable = (formData) => {
  if (formData.dept_id && formData.stock && formData.year && formData.make && formData.model && formData.date_in) return false
  else return true;
}

const NewVehicleForm = ({ depts, formData, handleChange, handleUpdate, handleSubmit, handleCancel, title }) => {

  const checkDisable = handleDisable(formData)

  return (
    <div className="add-form">
      <label className="addform-input" htmlFor="assignment">Department:
        <Dropdown name="dept_id" value={formData.dept_id} options={depts} handleChange={handleChange} handleUpdate={handleUpdate} title={title} />
      </label>
      <div className="disperss">
        <label className="addform-input" htmlFor="stock">Stock:
          <input type='text' id="stock" name="stock" onChange={handleChange} value={formData.stock}></input>
        </label>
        <label className="addform-input" htmlFor="year">Year:
          <input type='number' id="year" name="year" onChange={handleChange} value={formData.year}></input>
        </label>
        <label className="addform-input" htmlFor="make">Make:
          <input type='text' id="make" name="make" onChange={handleChange} value={formData.make}></input>
        </label>
        <label className="addform-input" htmlFor="model">Model:
          <input type='text' id="model" name="model" onChange={handleChange} value={formData.model}></input>
        </label>
        {/* <label className="addform-input" htmlFor="ucm_in">UCM IN:
          <input type='date' id="ucm_in" name="ucm_in" onChange={handleChange} value={formData.ucm_in}></input>
        </label> */}
        <label className="addform-input" htmlFor="date_in">Date In:
          <input type='date' id="date_in" name="date_in" onChange={handleChange} value={formData.date_in}></input>
        </label>
      </div>
      {/* <label className="addform-input" htmlFor="created_at">
        <input type='hidden' id="created_at" name="created_at" onChange={handleChange} value={formData.created_at}></input>
      </label> */}
      <label className="addform-input msg-box" htmlFor="notes">Notes:
        <textarea placeholder="you can type only 500 words." type='text' maxLength="500" id="notes" name="notes" onChange={handleChange} value={formData.notes}></textarea>
      </label>
      <div className="actionbtn">
        <button className="submit-button" disabled={checkDisable} onClick={handleSubmit} type='submit'>Submit</button>
        <button className="submit-button cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default NewVehicleForm;