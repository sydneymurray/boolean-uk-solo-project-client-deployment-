import {updateCustomerURL} from "./data.js"

export default function saveUpdatedCustomer(updatedCustomer, setModal, loggedInCustomer, setLoggedInCustomer){
  fetch(updateCustomerURL,{
    credentials: "include",
    method:'PATCH',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(updatedCustomer)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      updatedCustomer.customerID = loggedInCustomer.customerID
      setLoggedInCustomer(updatedCustomer)
      console.log(updatedCustomer)
      alert(`Update Successful`)
    } else alert("Update unsuccessful. Try a different username")
  })
}

/*
import {updateCustomerURL} from "./data.js"

export default function saveUpdatedCustomer(updatedCustomer, setModal, retrieveLoggedInCustomer){
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
      retrieveLoggedInCustomer()
    } else alert("Update unsuccessful. Try a different username")
  })
}

*/