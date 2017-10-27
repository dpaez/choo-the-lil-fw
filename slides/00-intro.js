const html = require('choo/html');

const Intro = state => {
    return html`
        <h1 class='f2-m f-subheadline-l fw6 tc'> Ch o  o 🚂 🚋🚋 : el pequeño framework que puede 💪 </h1>
    `;
};

Intro.title = 'Intro';

Intro.backgroundColor = 'bg-light-green';
Intro.color = 'dark-gray';

module.exports = Intro;
