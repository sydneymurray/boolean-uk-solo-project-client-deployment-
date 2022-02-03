import "../styles/LoggedInSection.css"

import useStore from "../hooks/useStore"
import {useEffect} from "react"

export default function LoggedInSection(){
  let retrieveAccounts = useStore(store => store.retrieveAccounts)
  useEffect(retrieveAccounts)

  return <>
    <section className="loggedInsection-container">

    </section>
  </>       
}


/*
import AccountsSideBar from "../components/AccountsSideBar"
import PaymentSideBar from "../components/PaymentSideBar"
import StatementSection from "../components/StatementSection"

<AccountsSideBar/>
      <PaymentSideBar/>
      <StatementSection/>  

*/
