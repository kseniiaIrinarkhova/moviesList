
import { useState } from "react"

function Form({ searchFunction }) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({ query: "" });

  //handle change on input field
  function handleChange(e) {
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value
    setFormData(newFormData);
  }
  function handleSubmit(e) {
    // Prevent page from refreshing on form submission
    e.preventDefault();
    //Pass the query to search function
    searchFunction(formData.query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="search" 
      placeholder="Movie title..." 
      name="query"
      onChange={handleChange}
      value={formData.query}/>
      <input type="submit" value="Search" />
    </form>
  )
}

export default Form