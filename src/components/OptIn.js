import React from 'react';
import { connect } from 'react-redux';
import { RegistrationSuccess } from '../actions';
import LandingPage from './LandingPage';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const INITIAL_STATE: State = {
  name: undefined,
  time: '0',
  showForm: false
}

class OptIn extends React.Component {
  state = INITIAL_STATE;
  
  handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'name': e.target.value })
  }
  
  handleTimeChanged = (selectedOption) => {
    this.setState({ 'time': selectedOption.value })
  }
  
  handleRegistrationSuccess = () => {
    const user = {
      name: this.state.name,
      time: this.state.time
    }
    this.props.RegistrationSuccess(user);
    this.props.history.push('/webinar-success');
  }
  
  handleShowForm = () => {
    this.setState({ showForm: true })
  }
  
  renderDropdown = () => {
    const options = [
      { value: '0', label: 'Select the day/time that works best for you', className: 'Dropdown-hidden' },
      { value: '1', label: 'Wednesday, October 10 1 pm EST' },
      { value: '6', label: 'Wednesday, October 10 6 pm EST' },
    ]

    return (
      <Dropdown className={(this.state.time === '0' && "unselected")} options={options} onChange={this.handleTimeChanged} value={this.state.time}/>
    )
  }
  
  renderBox = () => {
    const { showForm } = this.state;
    
    if (showForm) {
      return (
        <React.Fragment>
          <h2 className="h2">Register Now</h2>
          <h6 className="h6">To save your seat in the webinar</h6>
          <form>
            <div>
              <label htmlFor="time" className="screen-reader-only">Time:</label>
              {this.renderDropdown()}
            </div>
            <div>
              <label htmlFor="name" className="screen-reader-only">Name:</label>
              <input type="text" id="name" name="user_name" placeholder="First Name" className="text_input" onChange={this.handleNameChanged}/>
            </div>
            <div>
              <label htmlFor="mail" className="screen-reader-only">E-mail:</label>
              <input type="email" id="mail" name="user_mail" className="text_input" placeholder="Email Address"/>
            </div>
            <button className="btn btn--primary" onClick={this.handleRegistrationSuccess}>
              button
            </button>
          </form>
          <img className="callout callout--class-small" src={require("../img/FreeClass-ForTabletAndMobile.svg")} alt="free class"/>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h5 className="h5">Register Now:</h5>
          <h2 className="h2">5 Writing Mistakes That <br/>Are <span className="highlight">Killing Your Sales</span></h2>
          <p className="p box__p">Get the 5 easy fixes that take you from "crickets" to clamoring fans and buyers.</p>
          <button className="btn btn--primary" onClick={this.handleShowForm}>
            Yes!! Save my seat!
          </button>
          <img className="callout callout--class-small" src={require("../img/FreeClass-ForTabletAndMobile.svg")} alt="free class"/>
        </React.Fragment>
      )
    }
  }
  
  renderHeadline = () => {
    return (
      <React.Fragment>
        <h1 className="h1 headline__h1">Oh hey future writing genius</h1>
        <img className="callout callout--class-large hidden--laptop-sm-down" src={require("../img/FreeClass-ForDesktop.svg")} alt="free class"/>
      </React.Fragment>
    )
  }
  
  render () {
    return (
      <LandingPage headlineClass="hidden--laptop-sm-down">
        {this.renderHeadline()}
        {this.renderBox()}
      </LandingPage>
    )
  }
}

const mapStateToProps = (state) => {
  return { };
}

export default connect(mapStateToProps, { RegistrationSuccess })(OptIn);