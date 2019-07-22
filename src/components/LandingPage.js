import React from 'react';

class LandingPage extends React.Component {
  
  render () {
    return (
			<main role="main">
        <div className="container container__flex container__blush">
					   {this.props.children[0]}
					<div className="content">
						<div className="box">
              {this.props.children[1]}
						</div>
					</div>
      </div>
		</main>
    )
  }
}

export default LandingPage;