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
      <div>
      {showForm ?
        <form>
          <div>
            <label htmlFor="time">Time:</label>
            <select name="time" onChange={this.handleTimeChanged}>
              <option value="1">1 pm</option>
              <option value="6">6 pm</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" onChange={this.handleNameChanged}/>
          </div>
          <div>
            <label htmlFor="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail"/>
          </div>
          <button onClick={this.handleRegistrationSuccess}>
            button
          </button>
        </form>
        : 
        <div>
          <button onClick={this.handleShowForm}>
            button
          </button>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { };
}

export default connect(mapStateToProps, { RegistrationSuccess })(OptIn);