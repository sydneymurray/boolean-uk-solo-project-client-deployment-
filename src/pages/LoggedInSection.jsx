import "../styles/LoggedInSection.css"


import AccountsSideBar from "../components/AccountsSideBar"
import StatementSection from "../components/StatementSection"

export default function LoggedInSection(){


return <>
    <section className="loggedInsection-container">
      <AccountsSideBar/>
      <StatementSection/>  
    </section>
  </>       
}


