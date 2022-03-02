// NOT YET IMPLEMENTED
import "../styles/LoanModal.css";
import  useStore from "../hooks/useStore";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal)

  return <>
    <form className="modal-background" onClick={() => setModal("")}>
      <div className="modal">
        <h1 className="not-implemented-h1">NOT YET IMPLEMENTED</h1>

        <button type="submit" className="modalregisterbutton">
          Return</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}


