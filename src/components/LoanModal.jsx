// NOT YET IMPLEMENTED
import "../styles/LoanModal.css";
import  useStore from "../hooks/useStore";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal)
  console.log("Loan Moadal Selected")
  
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


