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
  if (!loggedInCustomer || !accounts) return <></>

  function retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => setAccounts(accounts))
  }
  if(!accounts) return <></>
  
  return <>
    <section className="account-sidebar-container">
      <h2 className="sidebar-customer-name" onClick={() => setModal("customerDetails")}>
        {loggedInCustomer.firstName} {loggedInCustomer.lastName}</h2>    
      {accounts.map((account, index) => <SideBarAccount key={index} account={account}/>)}    
    </section>
  </>       
}

