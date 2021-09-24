import "../styles/SideBarAccount.css"
import useStore from "../hooks/useStore"

export default function SideBarAccount({account, index}){
  function handleClick(){}

  return <>
    <h4 className="account-h2" key={account.accountID} onClick={handleClick}>
      <span className="sidebar-account-type">{account.type}: </span> 
      <span className="sidebar-account-number">{account.accountID}</span>
    </h4>
  </>       
}

