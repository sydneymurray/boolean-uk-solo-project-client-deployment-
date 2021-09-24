import {updateCustomerURL} from "./data.js"

export default function saveUpdatedCustomer(updatedCustomer, setModal){
  fetch(updateCustomerURL,{
    credentials: "include",
    method:'PATCH',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(updatedCustomer)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      alert(`Update Successful`)
    } else alert("Update unsuccessful.")
  })
}



