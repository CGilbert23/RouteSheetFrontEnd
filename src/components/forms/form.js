import { useState } from "react";


function NewVehicleForm({formData, setFormData, handleChange, handleSubmit}) {


    return (
      <form action="http://localhost:5000/vehicles" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="vehicle_stock">Stock:
          <input type='text' id="vehicle_stock" name="vehicle_stock" onChange={handleChange} value={formData.vehicle_stock}></input>
        </label>
        <label htmlFor="vehicle_year">Year:
          <input type='number' id="vehicle_year" name="vehicle_year" onChange={handleChange} value={formData.vehicle_year}></input>
        </label>
        <label htmlFor="vehicle_make">Make:
          <input type='text' id="vehicle_make" name="vehicle_make" onChange={handleChange} value={formData.vehicle_make}></input>
        </label>
        <label htmlFor="vehicle_model">Model:
          <input type='text' id="vehicle_model" name="vehicle_model" onChange={handleChange} value={formData.vehicle_model}></input>
        </label>
        <label htmlFor="date_in">UCM In:
          <input type='date' id="date_in" name="date_in" onChange={handleChange} value={formData.ucm_in}></input>
        </label>
        <label htmlFor="current_date">
          <input type='hidden' id="current_date" name="current_date" onChange={handleChange} value={formData.date}></input>
        </label>
        <label htmlFor="vehicle_assignment">Department:
          <select id="vehicle_assignment" name="vehicle_assignment" onChange={handleChange} value={formData.vehicle_assignment}>
          <option value="">Select an option</option>
          <option value="Holding"> Holding </option> 
          <option value="Service"> Service </option> 
          <option value="Annex"> Annex </option> 
          <option value="AutoExpress"> AutoExpress </option> 
          <option value="Outside Vendor"> Outside Vendor</option> 
          <option value="Detail"> Detail </option>
          <option value="Recon">Recon</option>  
          <option value="Torro">Torro</option>
          <option value="Front Line Ready">Front Line Ready</option>
          </select>
        </label>
       <button type='submit'>Submit</button>
        
        </form>
    );
  }

  export default NewVehicleForm;