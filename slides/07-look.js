const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #5614B0;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #DBD65C, #5614B0);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #DBD65C, #5614B0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
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
                            <a class="f4 fw6 green bg-animate link hover-bg-yellow" href=""> 💰 Checkout app </a>
                        </span>
                    </li>
                    <li class="pa3 lh-copy">
                        <span class='f5 db lh-copy measure'>
                            <a class="f4 fw6 green bg-animate link hover-bg-yellow" href=""> 🎁  Nanocomponents: choo & react </a>
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

module.exports = Look;
