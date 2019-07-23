import React from 'react';
import { connect } from 'react-redux';
import { RegistrationSuccess } from '../actions';
import LandingPage from './LandingPage';

const INITIAL_STATE: State = {
	name: undefined,
	time: '1',
  showForm: false
}

class OptIn extends React.Component {
  state = INITIAL_STATE;
  
  handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'name': e.target.value })
  }
  
  handleTimeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'time': e.target.value })
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
	
	renderBox = () => {
		const { showForm } = this.state;
		
		if (showForm) {
			return (
				<React.Fragment>
					<h2>Register Now</h2>
					<h6>To save your seat in the webinar</h6>
					<form>
						<div>
							<label htmlFor="time" className="hidden">Time:</label>
							<select defaultValue={'DEFAULT'} name="time" onChange={this.handleTimeChanged}>
								<option value="DEFAULT" disabled>Select the day/time that works best for you</option>
								<option value="1">Wednesday, October 10 1 pm EST</option>
								<option value="6">Wednesday, October 10 6 pm EST</option>
							</select>
						</div>
						<div>
							<label htmlFor="name" className="hidden">Name:</label>
							<input type="text" id="name" name="user_name" placeholder="First Name" className="text_input" onChange={this.handleNameChanged}/>
						</div>
						<div>
							<label htmlFor="mail" className="hidden">E-mail:</label>
							<input type="email" id="mail" name="user_mail" className="text_input" placeholder="Email Address"/>
						</div>
						<button className="btn btn--primary" onClick={this.handleRegistrationSuccess}>
							button
						</button>
					</form>
					<img className="callout callout--small" src={require("../img/FreeClass-ForTabletAndMobile.svg")} alt="free class"/>
				</React.Fragment>
			)
		} else {
			return (
				<React.Fragment>
					<h5>Register Now:</h5>
					<h2>5 Writing Mistakes That Are <span className="highlight">Killing Your Sales</span></h2>
					<p className="box__p">Get the 5 easy fixes that take you from "crickets" to clamoring fans and buyers.</p>
					<button className="btn btn--primary" onClick={this.handleShowForm}>
						Yes!! Save my seat!
					</button>
					<img className="callout callout--small" src={require("../img/FreeClass-ForTabletAndMobile.svg")} alt="free class"/>
				</React.Fragment>
			)
		}
	}
	
	renderHeadline = () => {
		return (
			<React.Fragment>
				<h1 className="headline__h1">Oh hey future writing genius</h1>
				<img className="callout callout--large" src={require("../img/FreeClass-ForDesktop.svg")} alt="free class"/>
			</React.Fragment>
		)
	}
  
  render () {
    return (
			<LandingPage>
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