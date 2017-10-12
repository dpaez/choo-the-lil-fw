var html = require('choo/html')
var instalment = require('./instalment');

module.exports = instalments

function instalments (state, emit) {
  return html`
    <fieldset class="checkout-user ba b--transparent ph0 mh0">
        <legend class="f4 pa2 f4 bg-near-white br3 br--top black-60 mb2 pv2 ph3">Forma de Pago</legend>
        <div class="">
            ${state.checkout.instalments.map( iData => {
                return instalment(state.events, iData, emit);
            })}
        </div>
    </section>
  `
}
