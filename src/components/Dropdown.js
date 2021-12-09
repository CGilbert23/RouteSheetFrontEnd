import React from "react";

const Dropdown = ({ options, handleChange, handleUpdate, disabled, button }) => {
    return (
        <>
            <select id="dept_id" name="dept_id" onChange={handleChange}>
                <option value=''>Select an option</option>
                {options && options.map((ele, idx) =>
                    <option key={idx} value={ele.dept_id}>{ele.name}</option>
                )}
            </select>
            {button ?  <button disabled={disabled} onClick={handleUpdate}>Update</button> : null }
            
        </>
    )
}

export default Dropdown;