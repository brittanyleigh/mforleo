import React from 'react';

class LandingPage extends React.Component {
  
  render () {
    return (
      <div className="container container__blush">
  			<main role="main" className="flex-container">
          <div className="headline">
  				   {this.props.children[0]}
          </div>
					<div className="content">
						<div className="box box--landing full-width">
              {this.props.children[1]}
						</div>
					</div>
    		</main>
      </div>
    )
  }
}

export default LandingPage;