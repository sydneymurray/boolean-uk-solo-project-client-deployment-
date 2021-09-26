import {transactionsURL} from "./data.js"

export default async function makePayment(transactionData, history, setModal) {
  let dbResponse = await fetch(transactionsURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transactionData)
  })
  console.log(dbResponse.status)  
  if (dbResponse.ok){
    setModal("")
    alert("Payment Succesful")  
    history.push("/accounts")
  } 
  else {
    if (dbResponse.status===404) 
      alert(`Payee Account ${transactionData.payeeAccount} Does Not Exist.`)
    else
      alert("An Error Occurred.")   
  }
}
















