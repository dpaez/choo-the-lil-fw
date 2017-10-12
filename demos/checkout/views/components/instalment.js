var html = require('choo/html')

module.exports = instalment

function showInterest(interest) {
    if (!interest){
        return html`<span class="green">Sin interés</span>`
    }

    return html`
        <span class="dim mid-gray">Con interés</span>
    `
}

function paymentMethod(pMethod) {
    return html`<i class="pf pf-${pMethod.id} dib fr"/>`
}

function instalment (events, state,  emit) {
    function updateCard(e){
        console.log(e.target);
        e.preventDefault()
        e.stopPropagation()
        // todo (dk): get actions from somewhere else
        // they should come from an initial object.assign btw
        // choo events and app actions
        // Note (dk): get interest as component param
        emit(events.UPDATECARD, state.interest ? 15 : undefined);
    }
    return html`
        <div class="" onclick=${updateCard} >
            <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
              <div class="dtc v-top pl2 w-30">
                <h1 class="f6 f5-ns fw6 lh-title black mv0">${ state.instalment > 0 ? `Cuotas: ${state.instalment}` : '1 pago' }</h1>
                <dl class="mt2 f6">
                  <dd class="ml0">${showInterest(state.interest)}</dd>
                </dl>
              </div>
              <div class="dtc f2 fr w-70">
                ${state.payment_methods.map(paymentMethod)}
              </div>
            </a>
        </div>
    `
}
