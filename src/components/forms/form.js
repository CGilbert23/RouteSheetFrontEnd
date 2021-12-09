import React from "react";

// Components
import Dropdown from "../Dropdown";

const NewVehicleForm = ({ depts, formData, handleChange, handleUpdate, handleSubmit, title }) => {

  return (
    <div className="add-form">
      <label className="addform-input" htmlFor="assignment">Department:
        <Dropdown options={depts} handleChange={handleChange} handleUpdate={handleUpdate} title={title}/>
      </label>
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
      <label className="addform-input" htmlFor="date_in">UCM IN:
        <input type='date' id="date_in" name="date_in" onChange={handleChange} value={formData.date_in}></input>
      </label>
      <label className="addform-input" htmlFor="created_at">
        <input type='hidden' id="created_at" name="created_at" onChange={handleChange} value={formData.created_at}></input>
      </label>
     
      <button className="submit-button" onClick={handleSubmit} type='submit'>Submit</button>

    </div>
  );
}

export default NewVehicleForm;