const html = require('choo/html');

const Amazing = state => {
    return html`
        <div>
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'>Genial 😍 </h1>
            <ul class='list p2 tl'>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'>El stack! 🔋 </b>
                    <span class='f5 db lh-copy measure'>
                        <ul class='list pa1'>
                            <li class='pa2'> bankai (es como webpack)</li>
                            <li class='pa2'> nanobus (event emitter)</li>
                            <li class='pa2'> bel (como jsx)</li>
                            <li class='pa2'> nanocomponent (componentes declarativos universales)</li>
                            <li class='pa2'> sheetify </li>
                            <li class='pa2'> browserify</li>
                        </ul>
                    </span>
                </li>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'>Tiene su propio starter oficial ⚡️ </b>
                    <span class='f5 db lh-copy measure'>
                        <ul class='list pa1'>
                            <li class='pa2'>
                                <a class='link near-black hover-light-purple' href='https://github.com/choojs/create-choo-app'>create-choo-app</a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>
    `;
};

Amazing.title = 'What is so cool about it?';

Amazing.backgroundColor = 'bg-washed-red';
Amazing.color = 'near-black';

module.exports = Amazing;
