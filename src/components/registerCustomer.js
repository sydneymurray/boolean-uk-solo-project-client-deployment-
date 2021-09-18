import {REGISTER_NEW_USER} from "./data.js"
//import { History } from "../../node_modules/@types/history/index"
//import ModalData from "../hooks/useStore"

export default function registerUser(newUser, history, setModal){
  fetch(REGISTER_NEW_USER,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newUser)
  })
  .then(res=>{
    if (res.ok) {
      setModal("")
      history.push("/search")
    }else setModal("signupFailed") /// Syd Do an ALERT
  })
}




