// native
// npm
var html = require('choo/html')
// local
var user = require('./components/user')
var instalments = require('./components/instalments')
var pricebox = require('./components/pricebox')

var TITLE = 'Checkout de compra'

module.exports = checkout

function checkout (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif w-100">
      <h1 class="pa3 pa4-ns">
        checkout demo
      </h1>
      <article class="cf ph3 ph5-ns pv5">
        <form class="fl w-100 w-70-ns pr0 black-80" action="" method="post">
          ${user(state.checkout.user,emit)}
          ${instalments(state, emit)}
          <div class="cb bg-light-gray pa2 w-100">
            <input type="submit" class="ba b--transparent dim br3 input-reset ph3 pv2 dib white bg-red" value="Comprar">
          </div>
        </form>
        <aside class="fl w-100 w-30-ns pl0 br2 bg-light-yellow dark-gray b--black-10 ">
          ${pricebox(state.checkout.price)}
        </aside>
      </article>
    </body>
  `
}
