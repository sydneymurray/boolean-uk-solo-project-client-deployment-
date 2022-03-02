import "../styles/Footer.css"
import {useState, useEffect} from "react"

export default function Footer(){
  const [sigTime, setSigTime] = useState()
  
  useEffect(() => setInterval(() => setSigTime(new Date().toString().slice(15,24)), 1000), [])  

  return <>
    <div className="Footer">
      <div className="signature">
        <h4>&copy; Safe-Bank</h4>
        <span className="sig-time">{sigTime}</span>
      </div>
      <div>
        <h4>Contact us:</h4>
        <span>0118 999 881 999 119 7253</span>
      </div>
      <div>
        <h4>Address:</h4>
        <p>City of London</p>
      </div>
      <div>
        <h4>Email:</h4>
        <span>info@Safebank.com</span>
      </div>
    </div>
  </>
 }

