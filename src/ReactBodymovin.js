const React = require('react')
var bodymovin;
//Use Bodymovin Light
if (typeof BODYMOVIN_EXPRESSION_SUPPORT === 'undefined' || BODYMOVIN_EXPRESSION_SUPPORT == null || BODYMOVIN_EXPRESSION_SUPPORT === false) {
  bodymovin = require('bodymovin/build/player/bodymovin_light.min');
//Use Bodymovin w/ expressions
} else if (BODYMOVIN_EXPRESSION_SUPPORT === true){
  bodymovin = require('bodymovin/build/player/bodymovin.min');
}

class ReactBodymovin extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, this.props.options)
    options.wrapper = this.wrapper
    options.renderer = 'svg'
    this.animation = bodymovin.loadAnimation(options)
  }

  componentWillUnmount () {
    this.animation.destroy()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {

    const storeWrapper = (el) => {
      this.wrapper = el
    }

    return (
      <div className='react-bodymovin-container' ref={storeWrapper}>
        { this.props.children }
      </div>
    );
  }
}

module.exports = ReactBodymovin
