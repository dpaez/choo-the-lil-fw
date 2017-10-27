const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #4568DC;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #B06AB3, #4568DC);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to bottom, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`

const Amazing = state => {
    return html`
        <div >
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'>Genial 😍 </h1>
            <ul class='list measure pa0 tl ba br3 bw3 black-80 bg-washed-red b--washed-red shadow-2 black-60 w-100-ns w-80-m center lh-solid '>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'> 🔋  El stack!  </b>
                    <ul class='list pa3 code measure-wide'>
                        <li class='mb2 lh-copy'> bankai (es como webpack)</li>
                        <li class='mb2 lh-copy'> nanobus (event emitter)</li>
                        <li class='mb2 lh-copy '> bel (como jsx)</li>
                        <li class='mb2 lh-copy'> nanocomponent (componentes declarativos universales)</li>
                        <li class='mb2 lh-copy'> sheetify </li>
                        <li class='mb2 lh-copy'> browserify</li>
                    </ul>
                </li>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'> ⚡️  Tiene su propio starter oficial </b>
                    <span class='f5 db lh-copy measure'>
                        <ul class='list pa1'>
                            <li class='pa2'>
                                <a class='link green hover-bg-lightest-blue bg-animate' href='https://github.com/choojs/create-choo-app'>create-choo-app</a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>
    `;
};

Amazing.title = 'What is so cool about it?';

Amazing.backgroundColor = style;
Amazing.color = 'near-black';

module.exports = Amazing;
