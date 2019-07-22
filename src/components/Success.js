import React from 'react';
import { connect } from 'react-redux';

class Success extends React.Component {
  componentDidMount() {
    const { time } = this.props.user;
    setTimeout(() => { 
      this.props.history.push(`/webinar/${time}`);
    }, 15000)
  }
  
  render () {
    const { name } = this.props.user;
    
    return <div>{name} is registered!</div>;
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
  };
}

export default connect(mapStateToProps)(Success);