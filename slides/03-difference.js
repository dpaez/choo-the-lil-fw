const html = require('choo/html');

const Difference = state => {
    return html`
        <div>
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'>Diferencias</h1>
            <ul class='list p2 tl'>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'>No virtual-dom 😮 </b>
                </li>
                <li class='pa3 b--black-10'>
                    <b class='db f3 mb1'>En cambio, usa otra estrategia llamada: real-dom-diffing 🆒 </b>
                </li>
            </ul>
        </div>
    `;
};

Difference.title = 'Differences B-)';

Difference.backgroundColor = 'bg-light-yellow';
Difference.color = 'dark-gray';

module.exports = Difference;
