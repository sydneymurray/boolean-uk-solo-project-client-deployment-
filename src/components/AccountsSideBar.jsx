import "../styles/AccountsSideBar.css"
import useStore from "../hooks/useStore"
import SideBarAccount from "./SideBarAccount"

export default function AccountsSideBar(){
  const setModal = useStore(store => store.setModal)
  const retrieveLoggedInCustomer = useStore(store => store.retrieveLoggedInCustomer)
  let accounts = useStore(store => store.accounts)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)

  if (!accounts || accounts.err==='Not Logged In') return <></>
  if (!loggedInCustomer) {
    retrieveLoggedInCustomer()
    return <></>
  }

  return <>
    <section className="account-sidebar-container">
      <h3 className="sidebar-customer-name" onClick={() => setModal("customerDetails")}>
        {loggedInCustomer.firstName} {loggedInCustomer.lastName}</h3>    
      {accounts.map((account, index) => <SideBarAccount key={index} account={account}/>)}    
    </section>
  </>       
}

