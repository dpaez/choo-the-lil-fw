const html = require('choo/html');

const Features = state => {
    return html`
        <div>
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'>Características:</h1>
            <ul class='list p2 tl'>
                <li class='pa1 b--black-10'>
                    <b class='db f3 mb1'>🛤  API reducida (facil de aprender):</b>
                    <ul class='list'>
                        <li class='pa3 bb b--black-10'><code>app = choo([opts])</code></li>
                        <li class='pa3 bb b--black-10'><code>app.use( fn(state,emit) )</code></li>
                        <li class='pa3 bb b--black-10'><code>app.route( ruta, handler(state,emit) )</code></li>
                        <li class='pa3 bb b--black-10'><code>app.mount( selector )</code></li>
                        <li class='pa3 bb b--black-10'><code>app.start()</code></li>
                        <li class='pa3 bb b--black-10'><code>app.toString( ruta, [state] )</code></li>
                    </ul>
                </li>
                <li class='pa1 b--black-10'>
                    <b class='db f3 mb1'>🛤  Isomórfico </b>
                </li>
                <li class='pa1 b--black-10'>
                    <b class='db f3 mb1'>🛤  Tooling basado en browserify</b>
                </li>
                <li class='pa1 b--black-10'>
                    <b class='db f3 mb1'>🛤  Vistas, ruteo, estado: built-in (incorporado al fw)</b>
                </li>
            </ul>
        </div>
    `;
};

Features.title = 'Features';
Features.backgroundColor = 'bg-light-blue';
Features.color = 'dark-gray';

module.exports = Features;
