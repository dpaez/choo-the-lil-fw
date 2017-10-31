const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #56CCF2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`

const Notes = () => html`
    <div>
        <h3>Sobre <em>real-dom-diffing</em></h3>
        <ul class="list">
            <li class="f5 lh-copy bb b--white-30">
                <b class="f4 blue">what?</b> Diff a tree of HTML elements against another tree of HTML elements and create a patched result that can be applied on the DOM.
            </li>
            <li class="f5 lh-copy bb b--white-30">
                El DOM es reactivo, JS no.
            </li>
            <li class="f5 lh-copy bb b--white-30">
                VDOM tiene un costo en performance (mínimo pero nunca 0) y complejidad (nueva capa para mantener).
            </li>
            <li class="f5 lh-copy bb b--white-30">
                <a href="https://github.com/patrick-steele-idem/morphdom#faq" class="link green">El DOM es lento? No, la estructura de datos DOM no es lenta. Sin embargo, un DOM reflow si es lento.</a>
            </li>
            <li class="f5 lh-copy bb b--white-30">
                Ver mas: 
                <a href="https://github.com/adamhaile/surplus#why-real-dom-nodes" class="link green">Surplus</a>, 
                <a href="https://github.com/patrick-steele-idem/morphdom" class="link green">Morphdom</a>
            </li>
        </ul>
    </div>
`

const Difference = state => {
    return html`
        <div>
            <h1 class='f2-m f-subheadline-l fw6 tc'>Diferencias</h1>
            <ul class='list p2 measure-wide tl pa4 tl ba br3 bw3 bg-light-yellow  b--light-yellow shadow-2 black-80 w-100-ns w-80-m center lh-solid'>
                <li class='pa3 lh-copy'>
                    <span class='db f3 mb1'>No virtual-dom 😮  ⛔️ </span>
                </li>
                <li class='pa3 lh-copy'>
                    <span class='db f3 mb1'>Usa otra estrategia llamada: <i>real-dom-diffing</i> 🆒 </span>
                </li>
                <li class='pa3 lh-copy'>
                    <span class='db f3 mb1'>Implementación: <a class='link orange hover-bg-lightest-blue bg-animate' href='https://github.com/choojs/nanomorph'>nanomorph </a></span>
                </li>
            </ul>
        </div>
    `;
};

Difference.title = 'Differences';

Difference.backgroundColor = style;
Difference.color = 'dark-gray';
Difference.notes = Notes;

module.exports = Difference;
