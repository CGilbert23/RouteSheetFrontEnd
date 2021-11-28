import { useState } from "react"

function List({data,handleDelete ,handleUpdate, cut, isPending, handleChange2, update}){
   
    if (isPending){
      return <p>Data Loading!</p>
    }  
  
    const newData = data
    
    
    const annexTable = newData.filter((item) => item.vehicle_assignment === cut)
    const rows = annexTable.map(({vehicle_id,vehicle_assignment, vehicle_stock, vehicle_year, vehicle_make, vehicle_model, date_in, current_date, variance, notes}, index) => (
        <tr>
        <td>{vehicle_assignment}</td>
        <td key={vehicle_id}>{vehicle_stock}</td> 
        <td>{vehicle_year}</td>
        <td>{vehicle_make}</td>
        <td>{vehicle_model}</td>
        <td>{date_in.substring(5,7)+ "/"+ date_in.substring(8,10)+"/"+ date_in.substring(0,4)}</td>
        <td>{current_date.substring(5,7)+ "/"+ current_date.substring(8,10)+"/"+ current_date.substring(0,4)}</td>
        <td>{variance}</td>
        <td>{notes}</td>
        
        <td>
        <label htmlFor="vehicle_assignment">
          <select id="vehicle_assignment" name="vehicle_assingment" onChange={handleChange2} value={vehicle_assignment}>
          <option value="Nothing">Select an option</option>
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
        <button onClick={()=> handleUpdate(vehicle_id)}>Update</button>
        </td>
        
        
        
        
        
        
  
        {/*
        <td>
          <select onChange={handleChange2}>
            <option value =" "> Select an option</option>
            <option value="Holding">Holding</option>
            <option value="Service">Service</option>
            <option value="Annex">Annex</option>
            <option value="AutoExpress">AutoExpress</option>
            <option value="Outside Vendor">Outside Vendor</option>
            <option value="Recon">Recon</option>
            <option value="Detail">Detail</option>
            <option value="Torro">Torro</option>
            <option value="Front Line Ready">Front Line Ready</option>
          </select> 
          
          <button onClick={()=> handleUpdate(vehicle_id)}>Update</button>
        </td> */}
          <td>
         <button onClick={()=> handleDelete(vehicle_id, vehicle_stock)}>Delete</button>
          </td>
        </tr>))
  
  return(
  <div>
      <h2 className="section-title">Cars At {cut}</h2>
      <table className="route-table">
      <thead>
      <tr>
          <th>Dept</th>
          <th>Stock</th>
          <th>Year</th>
          <th>Make</th>
          <th>Model</th>
          <th>UCM in</th>
          <th>Current Date</th>
          <th>Variance</th>
          <th>Notes</th>
          <th>Send To</th>
          <th>Delete</th>
      </tr>
      </thead>
      <tbody> {rows}
      </tbody>
  
  </table>   
  </div>
  )
  
  }
  
  export default List;