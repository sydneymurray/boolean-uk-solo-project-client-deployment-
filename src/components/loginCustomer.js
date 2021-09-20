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
    setLoggedInCustomer(customerDetails)  
    history.push("/accounts")
  } else alert("Incorrect Login Details.")   
}

/*
   history.push("/accounts")


export default function loginCustomer(customer, history, setModal, setLoggedInCustomer) {
  fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(customer),
  })
  .then(res => {
    if (res.ok) {
      setLoggedInCustomer(res.customer)  
      setModal("")  
      history.push("/accounts")
    } else alert("Incorrect Login Details.")
  })
  .catch((Error) => console.error(Error))
}















*/
