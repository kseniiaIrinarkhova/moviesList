
import { useState } from "react"

function Form({searchMovie}) {
//State to hold the data of our form
const[formData, setFormData] = useState({query : ""});

//handle change on input field
function handleChange(e){
  let newFormData = {...formData};
  newFormData[e.target.name] = e.target.value
  setFormData(newFormData);
}


  return (
    <form >
        <input type="search" placeholder="Movie title..." />
        <input type="submit" value="Search" />
    </form>
  )
}

export default Form