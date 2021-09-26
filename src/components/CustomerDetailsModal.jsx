import saveUpdatedCustomer from "./saveUpdatedCustomer";
import "../styles/RegisterModal.css";
import  useStore from "../hooks/useStore";
import {useHistory} from "react-router-dom";

export default function ModalPopUp() {
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  let setLoggedInCustomer = useStore(store => store.setLoggedInCustomer)

  const history = useHistory();
  
  function updateCustomer(event){
    event.preventDefault()
    const updatedCustomer = {
      firstName: capFirstChar(event.target.firstName.value),
      lastName: capFirstChar(event.target.lastName.value),
      userName: event.target.userName.value,
      email: event.target.email.value,
      active: true
    }
    function capFirstChar(name){  
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
    saveUpdatedCustomer(updatedCustomer, history, setModal)
    loggedInCustomer.firstName = updatedCustomer.firstName
    loggedInCustomer.lastName = updatedCustomer.lastName
    setLoggedInCustomer(loggedInCustomer)
  }

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
}

/*
  function registerNewCustomer(event){
    event.preventDefault();
    const {
      formalName: name,
      username: username,
      email: email,
      password: password,
    } = event.target

    const newUser = {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value
    }
*/

