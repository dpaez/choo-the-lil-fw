const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #56CCF2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`

const Difference = state => {
    return html`
        <div>
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'>Diferencias</h1>
            <ul class='list p2 measure-wide tl pa4 tl ba br3 bw3 bg-light-yellow  b--light-yellow shadow-2 black-80 w-100-ns w-80-m center lh-solid'>
                <li class='pa3 lh-copy'>
                    <b class='db f3 mb1'>No virtual-dom 😮 </b>
                </li>
                <li class='pa3 lh-copy'>
                    <b class='db f3 mb1'>En cambio, usa otra estrategia llamada: <a class='link orange hover-bg-lightest-blue bg-animate' href='https://github.com/choojs/nanomorph'>real-dom-diffing</a> 🆒 </b>
                </li>
            </ul>
        </div>
    `;
};

Difference.title = 'Differences B-)';

Difference.backgroundColor = style;
Difference.color = 'dark-gray';

module.exports = Difference;
