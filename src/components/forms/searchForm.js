import { useState } from "react";


function SearchForm() {

    /*Log the Stock/Make/Model as an array*/
   
    const [stock,setStock] = useState("")
    

    const handleChange = (event) => {
    setStock(event.target.value)
  }
    
   const handleSubmit = (event) => {
     event.preventDefault()
     console.log("Stock:", stock)

     setStock("")
   }



    /*Output*/
     
    return (
        <form method="GET" action="" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="search-row"> Stock, Make, or Model: 
                  <input type="text" name="name" maxLength="13" size="13" onChange={handleChange} value={stock}></input>
                </td>
                <td className="search-row" colSpan="2"><input type="submit" value="Search"></input></td>
              </tr>
            </tbody>  
            
          </table> 
          
        </form>
      );
    }

    export default SearchForm;