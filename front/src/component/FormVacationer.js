import React from 'react'
import './FormAdmin.css'
import UploadImage from './UploadImage'
import { withRouter } from 'react-router-dom'

class FormVacationer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastname: null,
      firstname: null,
      email: null,
      adress: null,
      city: null,
      zip: null,
      username: null,
      password: null,
      phone: null,
      photo: null,
      birthday: null,
      adminId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.savePicture = this.savePicture.bind(this); 
  }

  savePicture(photo) {
    this.setState({photo: `pictures/${photo}`})
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
    <div className = "formContainer">
      <div className='formAdminVacationer'>
        <div className='topComponent'>
          <h1 className='titleVacationer'>Vacancier</h1>
        </div>
        <form>
          <div className='form-example marginBottom'>
            <label htmlFor='lastname'>Nom</label>
            <input
              className='inputInWhite'
              type='text'
              name='lastname'
              id='lastname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='firstname'>Prénom</label>
            <input
              className='inputInWhite'
              type='text'
              name='firstname'
              id='firstname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='adminId'>N° établissement</label>
            <input
              className='inputInWhite'
              type='number'
              name='adminId'
              id='adminId'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='email'>Mail</label>
            <input
              className='inputInWhite'
              type='email'
              name='email'
              id='email'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='adress'>Adresse</label>
            <input
              className='inputInWhite'
              type='text'
              name='adress'
              id='adress'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='city'>Ville</label>
            <input
              className='inputInWhite'
              type='text'
              name='city'
              id='city'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='zip'>Code postal</label>
            <input
              type='text'
              name='zip'
              id='zip'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='username'>Identifiant</label>
            <input
              className='inputInWhite'
              type='text'
              name='username'
              id='username'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='password'>Mot de passe</label>
            <input
              className='inputInWhite'
              type='password'
              name='password'
              id='password'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='phone'>Téléphone</label>
            <input
              className='inputInWhite'
              type='tel'
              name='phone'
              id='phone'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='birthday'>Date de naissance</label>
            <input
              className='inputInWhite'
              type='date'
              name='birthday'
              id='birthday'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example marginBottom'>
            <label htmlFor='photo'>Photo</label>
            <UploadImage
                  savePicture = {this.savePicture}
           />
          </div>
        </form>
        <button 
          className="createButton"
          onClick={() => this.props.postFormDataVacat(this.state)}
          type='submit'
        >
          Créer
        </button>
      </div>
    </div>
    )
  }
}
export default FormVacationer;
