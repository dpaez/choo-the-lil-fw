const html = require('choo/html');

const Thanks = state => {
    return html`
        <div>
            <h1 class='f6 f2-m f-subheadline-l fw6 tc'> Ch o  o 🚂 🚋🚋 : el pequeño framework que puede 💪 </h1>
            <h2 class='f3 f2-m fw6'> GRACIAS </h2>
        </div>
    `;
};

Thanks.title = 'Thanks';

Thanks.backgroundColor = 'bg-light-green';
Thanks.color = 'dark-gray';

module.exports = Thanks;
