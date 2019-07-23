import React from 'react';

const INITIAL_STATE: State = {
  webinarHeight: undefined,
}

class Webinar extends React.Component {
  state = INITIAL_STATE;
  
  constructor(props){
    super(props)
    this.webinarBox = React.createRef();
  }
  
  componentDidMount() {
    console.log(this.webinarBox.current)
    this.setState({ webinarHeight: (this.webinarBox.current.offsetWidth * 9 ) / 16})
  }
  
  render () {
    const { webinarHeight } = this.state;
    
    return (
      <div className="container container__split_blush">
        <main role="main">
          <div className="box constrained_width box--transparent flex flex--space-between">
            <img className="logo hidden--laptop-down" src={require('../img/CopyCureLogo-black-transpBG.png')} alt="copy cure logo" />
            <h3 className="h3">5 Writing Mistakes That Are Killing Your Sales</h3>
            <img className="callout callout--circles" src={require('../img/circles.png')} alt="circles" />
          </div>
          <div className="box constrained_width box--webinar">
            <div className="full-width relative" ref={this.webinarBox}>
              <iframe 
                className="full-width iframe"
                title="webinar"
                height={webinarHeight}
                src="https://www.youtube.com/embed/_nycDPL7p6E" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <div className="highlight centered cta">
                <button className="btn btn--primary cta__btn">Click Here To Get Started</button>
              </div>
            </div>
          </div>
          <div className="constrained_width flex box box--transparent">
            <div className="highlight accent accent--chat hidden--laptop-sm-down">
              <h6 className="h6 accent__h6">Join the Convo!</h6>
              <img className="callout callout--chat" src={require('../img/LetsChat.svg')} alt="let's chat" />
            </div>
            <iframe 
              className="full-width"
              title="chatroll"
              height="350" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              allowtransparency="true" 
              src="https://chatroll.com/embed/chat/copy-cure?id=Nq2R2PKz79A&platform=html">
            </iframe>
          </div>
        </main>
        <footer className="footer constrained_width box box--transparent centered">
          <div className="footer__links uppercase">
            <a href="https://www.marieforleo.com/" className="link footer__link">© marie forleo international</a>  |
            <a href="https://www.marieforleo.com/" className="link footer__link"> terms</a>  |
            <a href="https://www.marieforleo.com/" className="link footer__link"> privacy policy</a>  |
            <a href="https://www.marieforleo.com/" className="link footer__link"> contact</a>
          </div>
          <div className="footer__policies">
            <p className="p">
              Consumer Testimonials. As with any business-related program, your results using Copy Cure may vary from these consumer testimonials. Your results will be based on many variables, such as your level of effort, business acumen, personal qualities, knowledge, skills, and a host of other factors. Since these factors differ for each individual, we cannot guarantee your success, results, or income level, nor are we responsible for your success or failure. Copy Cure is not a “get rich quick scheme.” It takes time, effort, and dedication. We believe that we provide you a great toolbox to achieve your desired results, and these grads agree.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Webinar;