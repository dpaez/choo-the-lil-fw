var html = require('choo/html')

module.exports = user

function user (state, emit) {
  return html`
    <fieldset class="checkout-user ba b--transparent ph0 mh0">
        <legend class="f4 pa2 f4 bg-near-white br3 br--top black-60 mb2 pv2 ph3">Datos del pasajero</legend>
        <div class="measure">
            <label for="name" class="f6 b db mb2">Nombre <span class="normal black-60">(Requerido)</span></label>
            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" required />
            <label for="lastname" class="f6 b db mb2">Apellido<span class="normal black-60">(Requerido)</span></label>
            <input id="lastname" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="lastname-desc" required />
            <label for="phone" class="f6 b db mb2">Teléfono</label>
            <input type="tel" id="phone" name="tel" class="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="phone-number" />
        </div>
    </fieldset>
  `
}
