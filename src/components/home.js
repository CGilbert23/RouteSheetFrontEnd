import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicles, deleteVehicles, getVehicles, updateVehicles } from "../redux/actions/vehicles";
import { getDepts } from "../redux/actions/depts";
import List from "./helper/list";
import Intro from "./tables/Intro";
import SummaryTable from "./forms/summaryTable";
import NewVehicleForm from "./forms/form";
import SearchForm from "./forms/searchForm";
import { isAuth } from "../redux/actions/login";

const initialForm = {
  vehicle_id: '',
  dept_id: '',
  name: '',
  stock: '',
  year: '',
  make: '',
  model: '',
  date_in: '',
  created_at: '',
  variant: '',
  notes: ''
}

const Home = () => {
  const currentDate = new Date().toISOString();
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

  
  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = () => {
    
    let cars = JSON.parse(JSON.stringify(vehicles.cars))
    formData["name"] = departments.depts.find((val) => val.dept_id === formData.dept_id).name
    cars.push(formData)
    dispatch(addVehicles(cars))

  }

  const handleOptionsChange = (event, selectedCar) => {
    const value = event.target.value;
    if(value){
      setSelectedDept(event.target.value);
      setSelectedCar(selectedCar);
    }else{
      setSelectedDept(null);
      setSelectedCar(null);
    }
  }

  // const getDeptName = (dept_id) => {
  //   const myDept = departments.depts && departments.depts.find(ele => ele.dept_id === dept_id);
  //   return myDept.name;
  // }

  const handleUpdate = () => {
    // const copyOfCars = JSON.parse(JSON.stringify(vehicles.cars));
    // const updatedCars = copyOfCars.map((ele) => {
    //   let changedCar = ele.vehicle_id === selectedCar.vehicle_id;
    //   return {
    //     ...ele,
    //     dept_id: changedCar ? selectedDept : ele.dept_id,
    //     assignment: changedCar ? getDeptName(selectedDept) : ele.assignment 
    //   }
    // })
    dispatch(updateVehicles(selectedCar.vehicle_id, selectedDept))
  }

  const parseData = (cars, dept_id) => {
    return cars && cars.filter(car => car.dept_id === dept_id);
  }

  const handleDelete = (ele) => {
    const pendingVehicles = vehicles.cars.filter((val) => val.vehicle_id !== ele.vehicle_id)
    dispatch(deleteVehicles(pendingVehicles))
  }

  const handleAddVehicle = () => {
    setShowAddForm(!showAddForm)
  }

  const handleLogOut = () => {
    dispatch(isAuth(false));
  }

  return (
    <>
    <div className="logout-btn">
      <button onClick={handleLogOut}>Logout</button>
      </div>
      <Intro currentDate={currentDate} />
      
      <div className="flex-center">
        <SearchForm />
       
      </div>
      <div className="add-vehicle">
      <button onClick={handleAddVehicle}>Add Vehicle</button>
      </div>
      <SummaryTable />
      {showAddForm ?  <NewVehicleForm 
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
              button
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