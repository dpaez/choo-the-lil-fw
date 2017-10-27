const html = require('choo/html');

const directionalButtons = (emit) => {
    const movefw = () => {
        emit('choo-slides:fw');
    }

    const movebw = () => {
        emit('choo-slides:bw');
    }

    return html`
        <section class='absolute bottom-1 right-2'>
            <button onclick=${movebw} class='pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1 '>◀</span>
            </button>
            <button onclick=${movefw} class='pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1 '>▶</span>
            </button>
        </section>
    `;
}


const Slide = children => (state, emit) => {

    emit('log:debug', 'Rendering slide view');
    emit(state.events.DOMTITLECHANGE, children.title);
    // defaults
    if (typeof children.centered === 'undefined') children.centered = true;

    const navigate = (e) => {
        switch (e.keyCode){
            case 32:
            case 39:
                // move to the next slide
                emit('choo-slides:fw');
                break;
            case 37:
                // move to the previous slide
                emit('choo-slides:bw');
                break;
            default:
                // do nothing
                break;
        }
    };

    return html`
        <body class='relative sans-serif' onkeydown=${navigate}>
            <article class='vh-100 dt w-100 ${children.backgroundColor}'>
                <div class='dtc v-mid ${children.centered ? 'tc': ''} ${children.color} ph3 ph4-l'>
                    ${children(state)}
                </div>
            </article>
            ${directionalButtons(emit)}
        </body>
    `;
}

module.exports = Slide;
