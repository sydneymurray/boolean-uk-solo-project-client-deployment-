import "../styles/LoggedInSection.css"
import AccountsSideBar from "../components/AccountsSideBar"
import PaymentSideBar from "../components/PaymentSideBar"
import StatementSection from "../components/StatementSection"
import useStore from "../hooks/useStore"
import {useEffect} from "react"

export default function LoggedInSection(){
  console.log("Logged In Section")
  let retrieveAccounts = useStore(store => store.retrieveAccounts)
  useEffect(retrieveAccounts)

  return <>
    <section className="loggedInsection-container">
      <AccountsSideBar/>
      <PaymentSideBar/>
      <StatementSection/>  
    </section>
  </>       
}


