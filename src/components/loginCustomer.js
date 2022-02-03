import {loginURL} from "./data.js"

export default async function loginCustomer(customer, history, setModal, setLoggedInCustomer) {
  let dbResponse = await fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(customer),
  })
  if (dbResponse.ok){
    setModal("")  
    let customerDetails = await dbResponse.json()
    console.log(customerDetails)
    setLoggedInCustomer(customerDetails)  
    history.push("/accounts")
  } else alert("Incorrect Login Details.")   
}

















