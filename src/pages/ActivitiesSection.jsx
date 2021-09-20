import "../styles/ActivitiesSection.css";

export default function ActivitySection(){
  return <>
    <h2 className="activity-h2">We invest your money safely in the following growth business areas</h2>
    <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
    <section className="activitysection-container">
      <div className="activity-item">
        <img className="activity-image" src="./images/AITechnology.jfif" alt="" />
        <h2>A.I. & Technology</h2>
      </div>
      <div className="activity-item">
        <img className="activity-image" src="./images/Construction.jpeg" alt="" />
        <h2>Construction</h2>
      </div>
      <div className="activity-item">
        <img className="activity-image" src="./images/BusinessCollaboration.jpg" alt="" />
        <h2>Business Collaboration</h2>
      </div>
      <div className="activity-item">
        <img className="activity-image" src="./images/LargeCorporations.jfif" alt="" />
        <h2>Large Corporations</h2>
      </div>
      <div className="activity-item">
        <img className="activity-image" src="./images/property.jfif" alt="" />
        <h2>Property</h2>
      </div>
      <div className="activity-item">
        <img className="activity-image" src="./images/RenewableEnergy.jpg" alt="" />
        <h2>Renewable Energy</h2>
      </div>
    </section>
  </>     
  
}
