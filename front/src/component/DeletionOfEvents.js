import React from 'react';
import './Display.css';
import axios from 'axios'

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/vacationers/${id}`)
    .then(response => {
      (response.status === 200) && (alert("le compte Vacancier est supprimé !"))
    })

function DeletionOfEvents({id, title, date, time}){
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      <p className="nameVac">ID:{id} {title}</p>
    </div>
    <div className="adresseVac">
      <p>{date.slice(0,10)} {time.slice(0,5)}</p>
    </div>
    <button id="buttonDelete" type="button" onClick={deleteFormData} type='submit' value='Supprimer'> </button>  
  </div>
  )
}

export default DeletionOfEvents;
