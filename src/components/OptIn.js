import React from 'react';
import { connect } from 'react-redux';
import { RegistrationSuccess } from '../actions';

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
  
  render () {
    const { showForm } = this.state;
    
    return (
			<main role="main">
        <div className="container container__flex container__blush">
					<div className="headline uppercase">
						<h1 className="contrast_color">Oh Hey Future Writing Genius</h1>
					</div>
					<div className="content">
						<div className="box">
							{showForm ?
								<React.Fragment>
									<h3>Register Now</h3>
									<h5>To save your seat in the webinar</h5>
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
											<input type="text" id="name" name="user_name" placeholder="First Name" onChange={this.handleNameChanged}/>
										</div>
										<div>
											<label htmlFor="mail" className="hidden">E-mail:</label>
											<input type="email" id="mail" name="user_mail" placeholder="Email Address"/>
										</div>
										<button onClick={this.handleRegistrationSuccess}>
											button
										</button>
									</form>
								</React.Fragment>
								: 
								<React.Fragment>
									<h4>Register Now:</h4>
									<h2>5 Writing Mistakes That Are <span className="highlight">Killing Your Sales</span></h2>
									<p>Get the 5 easy fixes that take you from "crickets" to clamoring fans and buyers.</p>
									<button onClick={this.handleShowForm}>
										Yes!! Save my seat!
									</button>
								</React.Fragment>
							}
						</div>
					</div>
      </div>
		</main>
    )
  }
}

const mapStateToProps = (state) => {
  return { };
}

export default connect(mapStateToProps, { RegistrationSuccess })(OptIn);