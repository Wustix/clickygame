import React from "react";
import "./SportsCard.css";


const SportsCard = props => (

  <div className="img-container" onClick={props.imageClick}>

    <img alt={props.image.replace(".jpg", "")} src={props.image} />
  </div>



);





export default SportsCard;