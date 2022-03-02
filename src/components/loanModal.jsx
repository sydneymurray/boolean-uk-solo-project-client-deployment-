// NOT YET IMPLEMENTED

import "../styles/LoanModal.css";
import {accountsURL} from "./data";
import  useStore from "../hooks/useStore";
import {useEffect, useState} from "react";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal)


  return <>
    <form className="modal-background">
      <div className="modal">
        <h1>NOT YET IMPLEMENTED</h1>

        <button type="submit" className="modalregisterbutton">
          Update</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}


