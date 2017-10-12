// button.js
var Nanocomponent = require('nanocomponent')
var html = require('bel')

// create new nanocomponent
class Button extends Nanocomponent {
  constructor () {
    super()
    this.color = null
  }

  handleClick (color) {
    console.log('choo choo!')
  }

  createElement (color) {
    this.color = typeof color === 'object' ? color.color : color;
    console.log('>> color', JSON.stringify(this.color))
    return html`
      <button class="b ph3 pv2 input-reset ba br-pill dim grow pointer f1" onclick=${this.handleClick} style="background-color: ${this.color}">
        Click Me
      </button>
    `
  }

  update (color) {
    return newColor !== this.color
  }
}

module.exports = Button;
