import React from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';

class Success extends React.Component {
  componentDidMount() {
    const time = this.props.user.time !== undefined ? this.props.user.time : '1';
    
    setTimeout(() => { 
      this.props.history.push(`/webinar/${time}`);
    }, 15000)
  }
  
  renderHeadline = () => {
    const name = this.props.user.name !== undefined ? this.props.user.name : 'She';
    
    return (
      <React.Fragment>
        <h1 className="h1 contrast_color headline__h1 headline__h1--small">"{name} always finds the best stuff."</h1>
        <h4 className="h4 full-width">- Your friends, after you share this free class</h4>
        <div className="social">
          <a className="link social__link" href="https://facebook.com">
            <img className="social__icon" src={require("../img/facebook.svg")} alt="facebook icon"/> Share on Facebook
          </a>
          <a className="link social__link" href="https://twitter.com">
            <img className="social__icon" src={require("../img/twitter.svg")} alt="twitter icon" /> Share on Twitter
          </a>
        </div>
      </React.Fragment>
    )
  }
  
  renderBox = () => {
    return (
      <React.Fragment>
        <h2 className="h2">You're In!</h2>
        <h6 className="h6">Get ready to swim in a pile of money, because that's what happens when you get your copy ish in order.</h6>
        <hr />
        <p className="p box__p box__p--small">
          Check your email inbox now for a special message about your upcoming class.
          Can't find it after a few minutes?
          Write <a className="link" href="mailto:support@marieforleo.com">support@marieforleo.com</a> and we'll help you out! More soon,
        </p>
        <img className="signature" src={require("../img/XOXOMarie.svg")} alt="xoxo marie signature"/>
      </React.Fragment>
    )
  }
  
  render () {
    return (
      <LandingPage boxClass="box--sm-bottom-padding" contentClass="content__background--hidden-small">
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