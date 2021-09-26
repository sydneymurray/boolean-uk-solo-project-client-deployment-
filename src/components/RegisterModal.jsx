import registerCustomer from "./registerCustomer";
import "../styles/RegisterModal.css";
import  useStore from "../hooks/useStore";
import {useHistory} from "react-router-dom";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  const history = useHistory();
  
  function registerNewCustomer(event){
    event.preventDefault()

    const newCustomer = {
      firstName: capFirstChar(event.target.firstName.value),
      lastName: capFirstChar(event.target.lastName.value),
      userName: event.target.userName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      active: true
    }
    function capFirstChar(name){  
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
    registerCustomer(newCustomer, setModal)
  }

  return <>
    <form onSubmit={registerNewCustomer} className="modal-background">
      <div className="modal">
        <h1>REGISTER</h1>
        <div className="register-input-container">
          <label className="register-label-firstname">First Name:</label>
          <input className="register-input-firstname" type="text" name="firstName" required/>
          <label className="register-label-lastname">Last Name:</label>
          <input className="register-input-lastname" type="text" name="lastName" required/>
          <label className="register-label-email">eMail:</label>
          <input className="register-input-email" type="email" name="email" required/>
          <label className="register-label-username">Username:</label>
          <input className="register-input-username" type="text" name="userName" required/>
          <label className="register-label-password">Password:</label>
          <input className="register-input-password" type="password" name="password" required/>
        </div>
        <button type="submit" className="modalregisterbutton" onSubmit={registerNewCustomer}>
          Register</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
}

/*
  const firstName = loggedInCustomer.firstName.charAt(0).toUpperCase() + loggedInCustomer.firstName.slice(1);
  const lastName = loggedInCustomer.lastName.charAt(0).toUpperCase() + loggedInCustomer.lastName.slice(1);

capFirstChar(name){  
  return name.charAt(0).toUpperCase() + name.slice(1)
}
*/

