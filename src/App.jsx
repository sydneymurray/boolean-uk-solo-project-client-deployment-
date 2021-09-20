import { Switch, Route } from "react-router-dom"
import './styles/App.css';
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import LoginSection from "./components/LoginSection.jsx"
import FourOFour from "./components/FourOFour"
import ActivitiesSection from "./pages/ActivitiesSection";
import { ModalContainer } from "./pages/ModalContainer";

function App() {
  return <>
    <div className="app-container">
      <Switch>
        <Route path="/" exact>
          <LoginSection/> 
          <Header/>
          <ActivitiesSection/>
        </Route>
        <Route path="/accounts" exact>
          <LoginSection/> 
          <Header/>
          <ActivitiesSection/>
        </Route>           
        <Route>
         <FourOFour/>
        </Route>
      </Switch>    
      <Footer/>     
      <ModalContainer />
    </div>
  </>
}

export default App;


/*

    <Switch>
      <Route path="/" exact>
        <MainPage/>
        <MenuButtons/>
      </Route>           

      <Route>
         <FourOFour/>
      </Route>
    </Switch>

    <ModalContainer />

    
*/
