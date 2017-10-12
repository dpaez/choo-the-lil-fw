var html = require('choo/html')

module.exports = pricebox

function showInterest(interest){
    if (!interest) return ''
    return html`
        <dl class="f6 lh-title mv2">
            <dt class="dib b">➕ Gastos financieros:</dt>
            <dd class="dib ml0 gray">${interest}</dd>
        </dl>
    `
}

function showAdditionalCharges(charges){
    if (!charges) return ''
    return html`
        <dl class="f6 lh-title mv2">
            <dt class="dib b">➕  Cargos:</dt>
            <dd class="dib ml0 gray">${charges}</dd>
        </dl>
    `
}

function pricebox (state, emit) {
    return html`
        <div class="checkout-user pa2 ph3-ns pb3-ns ba b--transparent ph0 mh0">
            <div class="dt w-100 mt1 b--black-10 bb ">
              <div class="dtc">
                <h1 class="f5 f4-ns mv0">Detalle de su compra</h1>
              </div>
              <div class="dtc tr">
              </div>
            </div>
            <div class="pa3 mt2 measure lh-copy mid-gray">
              <dl class="f6 lh-title mv2">
                <dt class="dib b">Desde 🛫:</dt>
                <dd class="dib ml0 gray">${state.detail.from}</dd>
              </dl>
              <dl class="f6 lh-title mv2">
                <dt class="dib b">Hasta 🛬:</dt>
                <dd class="dib ml0 gray">${state.detail.to}</dd>
              </dl>
              ${ showInterest(state.interest) }
              ${ showAdditionalCharges(state.additionalCharges) }
            </div>
            <div class="tr">
              <span class="b">Total: </span>
              <h2 class="dib mv0">${state.currency} ${state.total}</h2>
            </div>
        </div>
    `
}
