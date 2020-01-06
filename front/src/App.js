import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayAdmin from './component/DisplayAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import FormAdmin from './component/FormAdmin.js'
import FormPlace from './component/FormPlace'
import LoginAdmin from './component/LoginAdmin.js'
import DisplayVacationer from './component/DisplayVacationer.js'
import Uploader from './component/Uploader.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campings: null,
      currentCamping: 0,
      place : {},
      vacationer :{}
    }
    this.nextCamping = this.nextCamping.bind(this)
  }

  nextCamping() {
    this.setState(prevState => {
      return {
        currentCamping:
          (prevState.currentCamping + 1) % prevState.campings.length
      }
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/admins')
      .then(response => response.data)
      .then(data => {
        this.setState({
          campings: data
        })
      })
    axios.get('http://localhost:8000/api/places')
      .then(response => {
        return response.data
      })
      .then(data =>{
        this.setState({
          place: data[0]});
        });
     axios.get('http://localhost:8000/api/vacationers')
        .then(response => {
          return response.data
      })
      .then(data =>{
      this.setState({
      vacationer: data[0]});
  });
}


  render() {
    return (
      <div>
        <LoginAdmin />
        {this.state.campings && (
          <DisplayAdmin
            camping={this.state.campings[this.state.currentCamping]}
          />
        )}
        <button type='button' onClick={this.nextCamping}>
          Suivant
        </button>
        <FormAdmin />
        <FormPlace />
        <DisplayPlace place={this.state.place}/>
        <DisplayVacationer vacationer={this.state.vacationer}/>
      </div>
    )
  }
}
export default App

