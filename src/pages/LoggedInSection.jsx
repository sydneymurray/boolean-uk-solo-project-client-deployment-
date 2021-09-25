import "../styles/LoggedInSection.css"
import AccountsSideBar from "../components/AccountsSideBar"
import PaymentSideBar from "../components/PaymentSideBar"
import StatementSection from "../components/StatementSection"

export default function LoggedInSection(){

return <>
    <section className="loggedInsection-container">
      <AccountsSideBar/>
      <PaymentSideBar/>
      <StatementSection/>  
    </section>
  </>       
}


