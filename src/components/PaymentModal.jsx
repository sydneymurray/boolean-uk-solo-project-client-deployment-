import "../styles/PaymentModal.css";
import {accountsURL} from "./data";
import  useStore from "../hooks/useStore";
import {useEffect, useState} from "react";

export default function ModalPopUp() {
  let [accounts, setAccounts] = useState(null)
  useEffect(retrieveAccounts,[])
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>
  if (!accounts) return<></>
  accounts = [{type: "", accountID: "---SELECT-AN-ACCOUNT---"}, ...accounts]

  function retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => setAccounts(accounts))
  }
  function handleSubmit(){

  }

  return <>
    <form onSubmit={handleSubmit} className="modal-background">
      <div className="modal">
        <h1>Make A Payment</h1>
        <div className="pay-modal-container">

          <label className="payment-account-label">Account Number:</label>
          <select name="accountNumber" className="payment-account-selection">
            {accounts.map(account => <option key={account.accountID} value={account.accountID}>
              {account.type+": "+account.accountID}</option>)}
          </select>

          <label className="payment-amount-label">Amount:</label>
          <input className="payment-amount-input" type="number" name="payAmount"
            defaultValue="" required/>

          <label className="payee-account-label">Account:</label>
          <input className="payee-account-input" type="number" name="payeeAccountNumber"
            defaultValue="" required/>

        </div>
        <button type="submit" className="modal-pay-button" onSubmit={handleSubmit}>
          Pay</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}

/*
  return <>
    <form onSubmit={updateCustomer} className="modal-background">
      <div className="modal">
        <h1>DETAILS</h1>
        <div className="register-input-container">
          <label className="register-label-firstname">First Name:</label>
          <input className="register-input-firstname" type="text" name="firstName" 
            defaultValue={loggedInCustomer.firstName} required/>
          <label className="register-label-lastname">Last Name:</label>
          <input className="register-input-lastname" type="text" name="lastName"
            defaultValue={loggedInCustomer.lastName} required/>
          <label className="register-label-email">eMail:</label>
          <input className="register-input-email" type="email" name="email"
            defaultValue={loggedInCustomer.email} required/>
          <label className="register-label-username">Username:</label>
          <input className="register-input-username" type="text" name="userName"
            defaultValue={loggedInCustomer.userName} required/>
        </div>
        <button type="submit" className="modalregisterbutton" onSubmit={updateCustomer}>
          Update</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
*/

