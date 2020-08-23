import '../css/function.scss';

export const component = function component() {
    const element = document.createElement('h1');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello worl';
  
    return element;
  }