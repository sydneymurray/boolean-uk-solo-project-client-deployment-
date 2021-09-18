//import loginUser from "./loginCustomer";
import "../styles/LoginModal.css";
import  useStore from "../hooks/useStore";
import { useHistory } from "react-router-dom";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  const history = useHistory();
  
  function loginCustomer(event){
    event.preventDefault()

    const newCustomer = {
      username: event.target.username.value,
      password: event.target.password.value
    }
        
    //loginUser(newCustomer, history, setModal)
  }

  return <>
    <form onSubmit={loginCustomer} className="modal-background">
      <div className="modal">
        <h1>SIGN IN</h1>
        <div className="login-input-container">
          <label className="login-label-username">Username:</label>
          <input className="login-input-username" type="text" name="username" required/>
          <label className="login-label-password">Password:</label>
          <input className="login-input-password" type="password" name="password" required/>
        </div>
        <button type="submit" className="modalloginbutton">Login</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
}


