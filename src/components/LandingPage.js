import React from 'react';

class LandingPage extends React.Component {
  
  render () {
    return (
      <main role="main" className="container container__blush flex flex__wrap">
        <div className={`headline ${this.props.headlineClass}`}>
          {this.props.children[0]}
        </div>
        <div className="content">
          <div className={`content__background ${this.props.contentClass}`}>
            <img className="content__background_image" src={require('../img/iPhoneAndCirclesCropped.png')} alt="marie on iphone" />
          </div>
          <div className={`box box--landing full-width ${this.props.boxClass}`}>
            {this.props.children[1]}
          </div>
        </div>
      </main>
    )
  }
}

export default LandingPage;