import React from 'react';

class Webinar extends React.Component {
  componentDidMount() {
    console.log('Webinar')
  }
  
  render () {
    return (
      <React.Fragment>
      <main role="main">
        <div className="container">
          <div className="box">
            <iframe 
              title="webinar"
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/_nycDPL7p6E" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="box">
            <iframe 
              title="chatroll"
              width="450" 
              height="350" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              allowtransparency="true" 
              src="https://chatroll.com/embed/chat/copy-cure?id=Nq2R2PKz79A&platform=html">
            </iframe>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer__links">
          © marie forleo international  |  terms  |  privacy policy  |  contact
        </div>
        <div className="footer__policies">
          <p>
            Consumer Testimonials. As with any business-related program, your results using Copy Cure may vary from these consumer testimonials. Your results will be based on many variables, such as your level of effort, business acumen, personal qualities, knowledge, skills, and a host of other factors. Since these factors differ for each individual, we cannot guarantee your success, results, or income level, nor are we responsible for your success or failure. Copy Cure is not a “get rich quick scheme.” It takes time, effort, and dedication. We believe that we provide you a great toolbox to achieve your desired results, and these grads agree.
          </p>
        </div>
      </footer>
      </React.Fragment>
    )
  }
}

export default Webinar;