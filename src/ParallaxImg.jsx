import React from 'react';

class ParallaxImg extends React.Component {
  constructor() {
    super();

    this.state = {
      wait: false,
      backgroundPositionY: 0
    }

    this.throttle = this.throttle.bind(this);
    this.parallax = this.parallax.bind(this);
  }

  throttle(cb, delay) {
    if (this.state.wait) {
      return;
    };

    this.setState({ wait: true });
    cb();

    // setTimeout(() => {
      this.setState({ wait: false });
    // }, delay);
  }

  parallax() {
    this.throttle(() => {
      const x = document.scrollingElement.scrollTop;

      this.setState({ backgroundPositionY: `${parseInt(-x / 4)}px` });
    }, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallax);
  }

  render() {
    const { backgroundPositionY } = this.state;

    return (
      <div class="parallax-img" style={ { backgroundPositionY } } >
        <span>Paige Vogenthaler</span>
      </div>
    );
  }
}

export default ParallaxImg;
