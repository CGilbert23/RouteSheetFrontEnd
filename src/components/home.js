import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicles, deleteVehicles, getSummary, getVehicles, updateVehicles, resetSummary } from "../redux/actions/vehicles";
import { getDepts } from "../redux/actions/depts";
import List from "./helper/list";
import Intro from "./tables/Intro";
import SummaryTable from "./forms/summaryTable";
import NewVehicleForm from "./forms/form";
import SearchForm from "./forms/searchForm";
import { logOut } from "../redux/actions/login";
import * as utils from "../utils";

const initialForm = {
  dept_id: '',
  stock: '',
  year: '',
  make: '',
  model: '',
  ucm_in: '',
  date_in: '',
  notes:'' 
}

const Home = () => {
  const [formData, setFormData] = useState(initialForm);
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddBtn , setShowAddBtn] = useState(true);


  const departments = useSelector(state => state.depts);
  const vehicles = useSelector(state => state.vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getDepts());
    dispatch(getSummary());
  }, [dispatch]);

  useEffect(() => {
    if(vehicles.refetch) {
      setSelectedDept("");
      setSelectedCar("");
      dispatch(getVehicles("refetch"));
      dispatch(getSummary());
    }
  }, [vehicles.refetch, dispatch])

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = () => {
    dispatch(addVehicles(formData));
    setFormData(initialForm);
    setShowAddForm(false);
    setShowAddBtn(true);
  }


  const handleCancel=()=>{
    setShowAddForm(false);
    setShowAddBtn(true);
  }
  
  const handleOptionsChange = (event, selectedCar) => {
    const value = event.target.value;
    if (value) {
      setSelectedDept(event.target.value);
      setSelectedCar(selectedCar);
    } else {
      setSelectedDept("");
      setSelectedCar("");
    }
  }

  const handleUpdate = (summary_id, days) => {
    dispatch(updateVehicles(selectedCar.vehicle_id, summary_id, utils.extractDept_id(selectedDept), days));
  }

  const parseData = (cars, dept_id) => {
    return cars && cars.filter(car => car.dept_id === dept_id);
  }

  const handleDelete = (ele) => {
    if (window.confirm("Are you sure you want to delete this vehicle!")) {
      dispatch(deleteVehicles(ele.vehicle_id))
    }
  }

  const handleAddVehicle = () => {
    setShowAddForm(!showAddForm)
    setShowAddBtn(!showAddBtn);
  }

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <>
      <div className="logout-btn">
        <button onClick={handleLogOut}>Logout</button>
      </div>

      <Intro />

      <div className="flex-center">
        <SearchForm />
      </div>

      <div className="add-vehicle">
      {showAddBtn? <button onClick={handleAddVehicle}>Add Vehicle</button>:null
}
      </div>

      <SummaryTable counts={vehicles.summary}/>

      {showAddForm ? <NewVehicleForm
        formData={formData}
        depts={departments.depts}
        setFormData={setFormData}
        handleChange={handleFormChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      /> : null}

      {
        !vehicles.loading ?
          departments && departments.depts && departments.depts.map((ele, idx) => (
            <div key={idx}>
              <List
                dept_id={ele.dept_id}
                title={ele.name}
                data={parseData(vehicles.cars, ele.dept_id)}
                depts={departments.depts}
                handleChange={handleOptionsChange}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                selectedCar={selectedCar}
                selectedDept={selectedDept}
              />
            </div>
          ))
          :
          <div className="loading">Loading</div>
      }
    </>
  )
}

export default Home;