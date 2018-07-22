import React from 'react';

import MainCTAs from './MainCTAs';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siteTitle: 'Tom Christian',
      siteDescription: '<p class="header__description-first">Freelance Javascript &amp; React Developer from London, UK</p><p class="header__description-third">With nearly a decade worth of experience in multiple industries, I specialise in building accessible, test driven enterprise applications & responsive frameworks. Fan of all things <span class="header__description-logo-react">React</span><span class="header__description-logo-es6">Javascript</span><span class="header__description-logo-sass">Sass</span></p>',
      siteURL: '#',
    };

    this.setVideoWidth = this.setVideoWidth.bind(this);
  }

  componentDidMount() {
    this.setVideoListeners();
  }

  componentWillUnmount() {
    this.removeVideoListeners();
  }

  setVideoListeners() {
    this.setVideoWidth();

    window.addEventListener('resize', this.setVideoWidth);

    this.videoRef.addEventListener('loadeddata', () => {
      window.setTimeout(() => {
        this.videoRef.play();
      }, 2800);
    }, false);
  }

  setVideoWidth() {
    this.videoRef.width = window.outerWidth;
    this.videoRef.height = window.outerHeight;
  }

  removeVideoListeners() {
    this.videoRef.removeEventListener('loadeddata');
    window.removeEventListener('resize', this.setVideoWidth);
  }

  render() {
    const { siteTitle, siteDescription, siteURL } = this.state;

    return (
      <div className="header">
        <div className="header__bg" />

        <video ref={(video) => { this.videoRef = video; }} className="header__video" muted loop>
          <source src="/static/header-video.mp4" type="video/mp4" />
          <source src="/static/header-video.ogv" type="video/ogg" />
        </video>

        <div className="header__content container">
          <a className="header__link" href={siteURL}>
            <h1 className="header__title display-1">{siteTitle}</h1>
          </a>
          <div
            className="header__description"
            dangerouslySetInnerHTML={{ __html: siteDescription }}
          />
          <MainCTAs />
        </div>
      </div>
    );
  }
}
