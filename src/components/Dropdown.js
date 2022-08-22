import React from "react";

const Dropdown = ({ options, handleChange, handleUpdate, disabled, button, name, value }) => {
    return (
        <>
            <select id={name} name={name} value={value} onChange={handleChange}>
                <option value=''>Select an option</option>
                {options && options.map((ele, idx) =>
                    <option key={idx} value={`${name}___${ele.dept_id}___${ele.name}`}>{ele.name}</option>
                )}
            </select>
            {button ?  <button style={{ marginLeft: 8 }} disabled={disabled} onClick={handleUpdate}>Update</button> : null }
            
        </>
    )
}

export default Dropdown;