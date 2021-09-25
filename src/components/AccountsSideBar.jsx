import "../styles/AccountsSideBar.css"
import useStore from "../hooks/useStore"
import SideBarAccount from "./SideBarAccount"
import {useEffect, useState} from "react"
import {accountsURL} from "./data"

export default function AccountsSideBar(){
  let [accounts, setAccounts] = useState(null)
  useEffect(retrieveAccounts,[])
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>
  if (!accounts) return<></>

  function retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => setAccounts(accounts))
  }

  const firstName = loggedInCustomer.firstName.charAt(0).toUpperCase() + loggedInCustomer.firstName.slice(1);
  const lastName = loggedInCustomer.lastName.charAt(0).toUpperCase() + loggedInCustomer.lastName.slice(1);

  return <>
    <section className="account-sidebar-container">
      <h2 className="sidebar-customer-name" onClick={() => setModal("customerDetails")}>
        {firstName} {lastName}</h2>    
      {accounts.map((account, index) => <SideBarAccount key={index} account={account}/>)}    
    </section>
  </>       
}
