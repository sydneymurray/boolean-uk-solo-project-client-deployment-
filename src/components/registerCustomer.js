import {registerURL} from "./data.js"

export default function registerCustomer(newCustomer, history, setModal){
  fetch(registerURL,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newCustomer)
  })
  .then(res=>{
    if (res.ok) {
      setModal("")
      alert(`Registration Successful: Please Login with username ${newCustomer.userName}`)
      history.push("/accounts")
    }else alert("Incorrect Registration Details. Try using a different username.")
  })
}



