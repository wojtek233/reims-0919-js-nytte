import React from 'react';
import './EventCard.css';

function EventCard(props){
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
      <img className="photoCardProfil" src={props.place.local_photo} alt="profil du lieu touristique"></img>
      <button type="button" onClick="">{props.event.happening_category}</button>  
    </div>
  </div>
  )
}

export default EventCard;