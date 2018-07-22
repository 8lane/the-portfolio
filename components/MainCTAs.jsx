import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.SmoothScroll = null
    this.cvDownloadUrl = 'https://www.dropbox.com/s/4m28soy02jkc4zf/tc2017.pdf?dl=0';
  }

  componentDidMount() {
    this.SmoothScroll = require('smooth-scroll')
  }

  scrollToElement = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    this.SmoothScroll().animateScroll(element);
  }

  render() {
    const btnClass = (type = 'secondary') => `btn btn-outline-${type} btn-lg`;

    return (
      <div className="main-ctas">
        <a
          className={`main-ctas__btn main-ctas__btn--folio ${btnClass('success')}`}
          href="#tc-projects"
          onClick={e => this.scrollToElement(e, 'tc-projects')}
        >
          View projects
        </a>
  
        <span className="main-ctas__sep hidden-xs-down">or</span>
  
        <a className={`main-ctas__btn main-ctas__btn--cv ${btnClass()}`} href={this.cvDownloadUrl} target="_blank">
          Download CV
        </a>
      </div>
    );
  }
}
