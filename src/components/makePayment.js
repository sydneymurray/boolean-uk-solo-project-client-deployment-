import {transactionsURL} from "./data.js"

export default async function makePayment(transactionData, history, setModal) {
  let dbResponse = await fetch(transactionsURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transactionData)
  })
  if (dbResponse.ok){
    setModal("")
    alert("Payment Succesful")  
    history.push("/accounts")
  } 
  else {
    if (dbResponse.status===404){ 
      alert(`Payee Account ${transactionData.payeeAccount} Does Not Exist.`)
      return
    }
    if (dbResponse.status===901){ 
      alert(`Payment Unsuccesful. Insuffient Funds.`)
      return
    }
    alert("An Error Occurred.")   
  }
}
















