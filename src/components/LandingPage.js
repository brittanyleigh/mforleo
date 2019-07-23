import React from 'react';

class LandingPage extends React.Component {
  
  render () {
    return (
  			<main role="main" className="container container__blush flex">
          <div className="headline hidden--tablet">
  				   {this.props.children[0]}
          </div>
					<div className="content">
						<div className="box box--landing full-width">
              {this.props.children[1]}
						</div>
					</div>
    		</main>
    )
  }
}

export default LandingPage;