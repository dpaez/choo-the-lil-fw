const html = require('choo/html');

const Look = state => {
    return html`
        <article class='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
            <h1 class='absolute bg-red br-100 left-2 pa3-l top-1 white'> V6 </h1>
            <section class='code pa2'>
                const choo = require('choo');

                const myComponent = require('./someComponent');
 
                DEMO...

            </section>
        </article>
    `;
};

Look.title = "Demo";

Look.backgroundColor = 'bg-light-gray';
Look.color = 'near-black';

module.exports = Look;
