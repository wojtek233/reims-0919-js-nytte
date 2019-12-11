import React from 'react';
import './FormAdmin.css'


class FormAdmin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
      <div className = "formAdminContainer">
        <img src = 'https://zupimages.net/up/19/50/0b2g.png' className = 'LogoNytte' alt='logo Nytte'></img>
        <form>
            <div className="form-example">
                <label htmlFor="company">Nom établissement</label>
                <input type="text" name="company" id="company" required/>
            </div> 
            <hr/>
            <div className = 'form-example'>
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname" required/>
            </div>
            <hr/>
            <div className = 'form-example'>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="email">Mail</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="adress">Adresse</label>
                <input type="text" name="adress" id="adress" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="city">Ville</label>
                <input type="text" name="city" id="city" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="zip">Code postal</label>
                <input type="number" name="zip" id="zip" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="username">Identifiant</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" name="phone" id="phone" required/>
            </div>
            <hr/>
            <div className= 'inputForm'>
                <input  type="submit" value="VALIDER  >"/>
            </div>
        </form>
      </div>
    );
    }}
export default FormAdmin;
