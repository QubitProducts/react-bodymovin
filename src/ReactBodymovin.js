const React = require('react')
var bodymovin
const isDOM = typeof window === 'object' && typeof window.document === 'object'

/* global BODYMOVIN_EXPRESSION_SUPPORT */

// Use Bodymovin Light if running in browser
if (isDOM && (typeof BODYMOVIN_EXPRESSION_SUPPORT === 'undefined' || BODYMOVIN_EXPRESSION_SUPPORT == null || BODYMOVIN_EXPRESSION_SUPPORT === false)) {
  bodymovin = require('bodymovin/build/player/bodymovin_light.min')
// Use Bodymovin w/ expressions
} else if (isDOM && BODYMOVIN_EXPRESSION_SUPPORT === true) {
  bodymovin = require('bodymovin/build/player/bodymovin.min')
}

class ReactBodymovin extends React.Component {
  componentDidMount () {
    if (!isDOM) {
      return
    }
    const options = Object.assign({}, this.props.options)
    options.wrapper = this.wrapper
    options.renderer = 'svg'
    this.animation = bodymovin.loadAnimation(options)
  }

  componentWillUnmount () {
    if (!isDOM) {
      return
    }
    this.animation.destroy()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const storeWrapper = (el) => {
      this.wrapper = el
    }

    return <div className='react-bodymovin-container' ref={storeWrapper} />
  }
}

module.exports = ReactBodymovin
