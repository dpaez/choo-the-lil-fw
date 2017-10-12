var html = require('choo/html')

module.exports = payment

function selectCCard(ccards, emit){

    function updateCard(e){
        console.log(e.target);
        e.preventDefault()
        e.stopPropagation()
        // todo (dk): get actions from somewhere else
        // they should come from an initial object.assign btw
        // choo events and app actions
        emit(state.events.UPDATECARD, e.target.value);
    }

    return html`
        <select name="ccard" onchange=${updateCard}>
            ${ccards.map(card => {
                return html`
                    <option>${card.id}</option>
                `
            })}
        </select>
    `
}

function payment(payment, emit){
    return html`
        <fieldset class="checkout-user ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Información de pago</legend>
            <div class="mt3">
                ${selectCCard(payment.available_cards, emit)}
            </div>
            <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address"></label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address">
            </div>
        </fieldset>
    `
}
