const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #5614B0;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #DBD65C, #5614B0);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #DBD65C, #5614B0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`

const Notes = () => html`
    <div>
        <h3>Sobre los demos</h3>
        <ul class="list">
            <li class="f5 lh-copy bb b--white-30">
                <span class="silver">Checkout app:</span> nos muestra choo en lo que simula ser una app mas "real" que un todo list. Puede usarse de ejemplo para ver como puede crecer una app choo.
            </li>
            <li class="f5 lh-copy bb b--white-30">
                <span class="silver">Nanocomponents:</span> Explora la idea experimental de <a href="https://github.com/choojs/nanocomponent" class="link green">nanocomponents</a>. Esto es, <b>reusabilidad a nivel de componentes</b>. La demo incluye un componente de ejemplo que puede emplearse tanto en apps choo así como tambien react.
            </li>
        </ul>
    </div>
`

const Look = state => {
    return html`
        <div class='mw5 mw7-ns measure-wide center pa3 ph5-ns'>
            <h1 class='absolute bg-red br-100 pa2 left-2 pa3-l top-1 white'> V6 </h1>
            <section class='pa4 measure-wide tl ba br3 bw3 b--light-gray shadow-2 bg-light-gray black-60 center lh-solid'>
                <pre class='code ws-normal measure-wide'>
                    const choo = require('choo');<br>

                    const myComponent = require('./someComponent'); <br>
                    <br>
                    ...
                    <br>
                    <br>
                    DEMO TIME ⏰
                </pre>
                <ul class="list pl0 code">
                    <li class="pa3 lh-copy">
                        <span class='f5 db lh-copy measure'>
                            <a class="f4 fw6 green bg-animate link hover-bg-yellow" href="https://github.com/dpaez/choo-the-lil-fw/tree/master/demos/checkout" target="_blank" rel="noopener noreferrer"> 💰 Checkout app </a>
                        </span>
                    </li>
                    <li class="pa3 lh-copy">
                        <span class='f5 db lh-copy measure'>
                            <a class="f4 fw6 green bg-animate link hover-bg-yellow" href="https://github.com/dpaez/choo-the-lil-fw/tree/master/demos/nano-example" target="_blank" rel="noopener noreferrer"> 🎁  Nanocomponents: choo & react </a>
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    `;
};

Look.title = "Demo";
Look.centered = false;
Look.backgroundColor = style;
Look.color = 'near-black';
Look.notes = Notes;

module.exports = Look;
