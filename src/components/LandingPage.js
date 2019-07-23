import React from 'react';

class LandingPage extends React.Component {
  
  render () {
    return (
  			<main role="main" className="container container__blush flex">
          <div className={`headline ${this.props.headlineClass}`}>
  				   {this.props.children[0]}
          </div>
					<div className={`content ${this.props.contentClass}`}>
						<div className={`box box--landing full-width ${this.props.boxClass}`}>
              {this.props.children[1]}
						</div>
					</div>
    		</main>
    )
  }
}

export default LandingPage;