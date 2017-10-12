var css = require('sheetify')
var choo = require('choo')
var checkoutStore = require('./stores/checkout');

css('tachyons')
css('paymentfont/css/paymentfont.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
}

app.use(checkoutStore)

app.route('/', require('./views/checkout'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
