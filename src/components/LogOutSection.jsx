import "../styles/LogOutSection.css"
import {logOutURL} from "./data" 
import {useHistory} from "react-router-dom"
import  useStore from "../hooks/useStore"

export default function LogOutSection(){
  const history = useHistory()
  const setLoggedInCustomer = useStore(store => store.setLoggedInCustomer)
  const setAccountStatement = useStore(store => store.setAccountStatement)

  function handleLogOut(){
    fetch(logOutURL, {
      credentials: "include",
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    setLoggedInCustomer(null)
    setAccountStatement(null)
    history.push("/")
  }

return <>
    <section className="logoutsection-container">
      <button className="logout-button" onClick={handleLogOut}>Log Out</button>      
    </section>
  </>       
}
