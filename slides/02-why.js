const html = require('choo/html');
const css = require('sheetify');

const style = css`
    :host {
        background: #3E5151;
        background: -webkit-linear-gradient(to bottom, #DECBA4, #3E5151);
        background: linear-gradient(to bottom, #DECBA4, #3E5151);
    }
`

const Features = state => {
    return html`
        <div>
            <h1 class='f2-m f-subheadline-l fw6 tc'>Características</h1>
            <ul class='list measure-wide pa4 tl ba br3 bw3 bg-light-blue  b--light-blue shadow-2 black-80 w-100-ns w-80-m center lh-solid'>
                <li class='pa1 lh-copy b--black-10'>
                    <b class='db f3 mb1'> ✔️ API reducida (facil de aprender):</b>
                    <ul class='list pa1 measure-wide '>
                        <li class='pa3'><code>app = choo([opts])</code></li>
                        <li class='pa3'><code>app.use( fn(state,emit) )</code></li>
                        <li class='pa3'><code>app.route( ruta, handler(state,emit) )</code></li>
                        <li class='pa3'><code>app.mount( selector )</code></li>
                        <li class='pa3'><code>app.start()</code></li>
                        <li class='pa3'><code>app.toString( ruta, [state] )</code></li>
                    </ul>
                </li>
                <li class='pa1 lh-copy b--black-10'>
                    <b class='db f3 mb1'> ✔️  Isomórfico </b>
                </li>
                <li class='pa1 lh-copy b--black-10'>
                    <b class='db f3 mb1'> ✔️  Tooling basado en browserify</b>
                </li>
                <li class='pa1 lh-copy b--black-10'>
                    <b class='db f3 mb1'> ✔️  Vistas, ruteo, estado: built-in</b>
                </li>
            </ul>
        </div>
    `;
};

Features.title = 'Features';
Features.backgroundColor = style;
Features.color = 'dark-gray';

module.exports = Features;
