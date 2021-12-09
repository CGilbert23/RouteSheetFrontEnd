import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVehicles } from "../../redux/actions/vehicles";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.vehicles);

  const handleChange = (event) => {
    const value = event.target.value
    setSearchValue(value);
    dispatch(searchVehicles(vehicles.cars, value));
  }

  return (
    <form>
      <label htmlFor="search">Search by Stock, Make & Model : </label>
      <input className="search-vehicle" type="text" name="search" placeholder="Search Vehicle" onChange={handleChange} value={searchValue}></input>
    </form>
  );
}

export default SearchForm;