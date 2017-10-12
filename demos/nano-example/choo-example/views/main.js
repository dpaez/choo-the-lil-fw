var html = require('choo/html')
var universal = require('universal-components');
var button = new universal.Button();

var TITLE = '🚂🚋🚋'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns">
       Nanocomponents example
      </h1>
      <h3 class="f2 pa3 pa4-ns mid-gray"> >>> Choo Project</h3>
	  <main class="center tc">
	    ${button.render('pink')}
      </main>
    </body>
  `
}
