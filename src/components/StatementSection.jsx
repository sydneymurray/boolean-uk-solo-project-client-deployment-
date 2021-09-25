import "../styles/StatementSection.css"
import useStore from "../hooks/useStore"
import RenderTransaction from "./RenderTransaction"
import processAccountStatement from "./processAccountStatement"

export default function StatementSection(){
  let accountStatement = useStore(store => store.accountStatement)

  if (!accountStatement) {
    return <>
      <section className="statement-section-container">
        <img className="safe-image" src="./images/MoneySafe.jpeg" alt="Safe"/>
      </section>
    </>
  } 
  
  let processedStatement = processAccountStatement(accountStatement)

  return <>
    <section className="statement-section-container">
      {processedStatement.map((transaction, index) =>
        <RenderTransaction transaction={transaction} key={index}/>)}
    </section>
  </>       
}

