import "../styles/LoggedInSection.css"
//import AccountsSideBar from "../components/AccountsSideBar"
//import PaymentSideBar from "../components/PaymentSideBar"
//import StatementSection from "../components/StatementSection"
import useStore from "../hooks/useStore"
//import {useEffect} from "react"

export default function LoggedInSection(){
  let retrieveAccounts = useStore(store => store.retrieveAccounts)
  //useEffect(retrieveAccounts)
  let dummy = null
  dummy = retrieveAccounts 
  retrieveAccounts  = dummy
  
  return <>
    <section className="loggedInsection-container">

    </section>
  </>       
}


/*

      <AccountsSideBar/>
      <PaymentSideBar/>
      <StatementSection/>  

*/
