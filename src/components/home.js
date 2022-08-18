import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicles, deleteVehicles, getSummary, getVehicles, updateVehicles } from "../redux/actions/vehicles";
import { getDepts } from "../redux/actions/depts";
import List from "./helper/list";
import Intro from "./tables/Intro";
import SummaryTable from "./forms/summaryTable";
import NewVehicleForm from "./forms/form";
import SearchForm from "./forms/searchForm";
import { logOut } from "../redux/actions/login";

const initialForm = {
  dept_id: '',
  stock: '',
  year: '',
  make: '',
  model: '',
  ucm_in: '',
  date_in: ''
}

const Home = () => {
  const [formData, setFormData] = useState(initialForm);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false)
  const departments = useSelector(state => state.departments);
  const vehicles = useSelector(state => state.vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles())
    dispatch(getDepts())
  }, [dispatch])

  useEffect(() => {
    if(departments.depts.length > 0 && vehicles.cars.length >= 0) dispatch(getSummary(departments.depts, vehicles.cars));
  },[dispatch, departments.depts, vehicles.cars])

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
  }

  const handleOptionsChange = (event, selectedCar) => {
    const value = event.target.value;
    if (value) {
      setSelectedDept(event.target.value);
      setSelectedCar(selectedCar);
    } else {
      setSelectedDept(null);
      setSelectedCar(null);
    }
  }

  const handleUpdate = () => {
    dispatch(updateVehicles(selectedCar.vehicle_id, selectedDept));
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
        <button onClick={handleAddVehicle}>Add Vehicle</button>
      </div>

      <SummaryTable counts={vehicles.summary}/>

      {showAddForm ? <NewVehicleForm
        formData={formData}
        depts={departments.depts}
        setFormData={setFormData}
        handleChange={handleFormChange}
        handleSubmit={handleSubmit}
      /> : null}

      {
        !vehicles.loading ?
          departments && departments.depts && departments.depts.map((ele, idx) => (
            <div key={idx}>
              <List
                title={ele.name}
                data={parseData(vehicles.cars, ele.dept_id)}
                depts={departments.depts}
                handleChange={handleOptionsChange}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                selectedCar={selectedCar}
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