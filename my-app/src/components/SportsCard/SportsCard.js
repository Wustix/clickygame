import React from "react";
import "./SportsCard.css";


const SportsCard = props => (

  <div className="img-container">

    <img alt={props.name} src={props.image} />
  </div>



);





export default SportsCard;