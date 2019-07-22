import React from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';

class Success extends React.Component {
  componentDidMount() {
    const { time } = this.props.user;
    setTimeout(() => { 
      this.props.history.push(`/webinar/${time}`);
    }, 15000)
  }
  
  renderHeadline = () => {
    const { name } = this.props.user;
    
    return (
      <div className="headline uppercase">
        <h1>"{name} always finds the best stuff."</h1>
        <h6>- Your friends, after you share this free class</h6>
      </div>
    )
  }
  
  renderBox = () => {
    return (
      <React.Fragment>
        <h3>You're In!</h3>
        <h5>Get ready to swim in a pile of money, because that's what happens when you get your copy ish in order.</h5>
        <hr />
        <p>
          Check your email inbox now for a special message about your upcoming class.
          Can't find it after a few minutes?
          Write support@marieforleo.com and we'll help you out! More soon,
        </p>
        <img src="" alt=""/>
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
  return { 
    user: state.user,
  };
}

export default connect(mapStateToProps)(Success);