import { useState, useEffect} from 'react';
import useFetch from '../components/fetch'
import List from "./helper/list"
import Intro from "./tables/Intro"
import SummaryTable from "./forms/summaryTable"
import NewVehicleForm from "./forms/form"
import SearchForm from "./forms/searchForm"


const Home = () => {

    /* date */

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1
    var yyyy = today.getFullYear();
    var hr = today.getHours();
    var mn = today.getMinutes();
    var sc = today.getSeconds();
    var ms = today.getUTCMilliseconds()
    var time = today.getHours
    if (dd<10){
      dd='0'+ dd
    }
    if (mm<10){
      mm='0' + mm
    }
    /*
    const currentDate = `${mm}/${dd}/${yyyy}`
   */
  const currentDate=`${yyyy}-${mm}-${dd} T${hr}:${mn}:${sc}.${ms}Z`
  
  /*State Management : All Exisitng Data */
    const {data,setData,isPending,error} = useFetch(`http://localhost:5000/vehicles`)

    
    /*State Management: New Vehicle Form */
    const initialFormState = {
        vehicle_assignment:"",
        vehicle_stock: "",
        vehicle_year:"",
        vehicle_make: "",
        vehicle_model:"",
        date_in: "",
        current_date: currentDate,
        notes:"",
        
      };
      
      /*POST: New Vehicle Form */
      const [formData, setFormData] = useState({ ...initialFormState });
      
      const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value });
      };

      const newCar = (updatedTable) => {
        console.log(data)
      }

      const confirmpost = (newVehicle)=> {
        setData([...data,newVehicle])
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newVehicle = (formData)
        console.log(newVehicle)
        const url = "http://localhost:5000/vehicles"
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newVehicle)
        }
        fetch(url, requestOptions)
          .then((response)=> response.json())
          .then((newVehicle)=> confirmpost(newVehicle))
          .then(response => console.log('Updated Successfully'))
          .catch(error => console.log('Form submit error', error))
          .then(() => newCar(newVehicle))
        
      
        setFormData({ ...initialFormState });
        
      };

      /* Delete A Vehicle */

      const deleteCar = (id) => {
        const table = data.filter((item)=> item.vehicle_id != id)
        setData(table)
      }
     

      const handleDelete = (id,stock) => {
        fetch(`http://localhost:5000/vehicles/${id}`, {
          method: 'DELETE'
        })
        .then(response => console.log("Deleted Car"))
        .then(()=> deleteCar(id))
       
    }

    
    /* Update A Vehicle */

    const [update, setUpdate] = useState("")

    const handleChange2 = ({target}) => {
      setUpdate(target.value)
      console.log(update)
    }

    /*must define updateVehicle*/
    const find = (updatedVehicle) => {
      console.log(updatedVehicle)
    const index = data.findIndex((item)=> item.vehicle_id === updatedVehicle.data.vehicle_id);
    if (index !== -1){
        data.splice(index,1,updatedVehicle);
       
    }
}

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/vehicles/${id}`, {
          method: 'PUT',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({vehicle_assignment: update})
        })
        .then(response => response.json())
        .then(updatedVehicle => find(updatedVehicle))
    }
    
return (
    <div>
        <Intro currentDate ={currentDate}/>
        <SummaryTable />
        <NewVehicleForm formData = {formData} setFormData = {setFormData} handleChange ={handleChange} handleSubmit={handleSubmit}/>
        <SearchForm />
        <List data={data} cut={"Holding"} update= {update} handleChange2={handleChange2} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Service"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Annex"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"AutoExpress"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Outside Vendor"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Recon"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Detail"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Torro"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <List data={data} cut={"Front Line Ready"} isPending={isPending} handleDelete={handleDelete} handleUpdate={handleUpdate} />

    </div>
)


}


export default Home;
