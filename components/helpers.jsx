/* global document */
const scrollToElement = (e, id) => {
  const SmoothScroll = require('smooth-scroll');
  e.preventDefault();
  const element = document.getElementById(id);
  SmoothScroll().animateScroll(element);
};

const extractErrors = (error) => {
  console.log(error)
};

export {
  scrollToElement,
  extractErrors,
};
