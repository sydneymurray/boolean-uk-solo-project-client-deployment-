import "../styles/PaymentSideBar.css"
import useStore from "../hooks/useStore"

export default function PaymentSideBar(){
  const setModal = useStore(store => store.setModal)

  return <>
    <section className="payment-sidebar-container">
      <span className="payment-sidebar-option" onClick={()=>setModal("payment")}>Make a Payment</span> 
      <span className="payment-sidebar-option" onClick={()=>setModal("withdraw")}>Withdraw Funds</span> 
      <span className="payment-sidebar-option" onClick={()=>setModal("loan")}>Apply for a Loan</span> 
    </section>
  </>       
}

