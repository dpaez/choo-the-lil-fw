const html = require('choo/html');
const css = require('sheetify');

let showGoto = false;

const menuStyle = css`
    :host .menu {
        min-height: 0;
        max-height: 0;
        transition: max-height 0.4s;
    }

    :host .menu--open {
        max-height: 25rem;
    }
`

const directionalButtons = (state, emit) => {
    const movefw = () => {
        emit('choo-slides:fw');
    }

    const movebw = () => {
        emit('choo-slides:bw');
    }

    const toggleGoto = () => {
        showGoto = !showGoto;
        emit('render');
    }

    const gotoItem = (title, idx) => {
        const gotoSlide = () => {
            showGoto = false;
            emit('choo-slides:goto', idx);
        }
        return html`
            <li onclick=${gotoSlide} class="lh-copy pa2 pointer">${title}</li>
        `
    }

    return html`
        <section class='${menuStyle} w-50 w-40-m w-auto-ns overflow-y-auto absolute tr bottom-1 right-2'>
            <button onclick=${movebw} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1'>◀</span>
            </button>
            <button onclick=${toggleGoto} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1'>❖ </span>
            </button>
            <button onclick=${movefw} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1 '>▶</span>
            </button>
            <aside class="overflow-x-hidden  menu ${ showGoto ? "menu--open" : ""} db-l w-100 tc mv0 f3 fw3 f5-l bg-black-80 white-90">
                <div class="pb2 ph4-l ph3 ph5-xl tl measure-wide">
                    <ul class="list">
                        ${state.presentation.slides.map((slide, idx) => {
                            return gotoItem(slide.title, idx)
                        })}
                    </ul>
                </div>
            </aside>
        </section>
    `;
}

const notes = (children, emit) => {
    // Note (dk): notes can be turned into somekind of HOC
    // if that its the case then we can move this out of here
    // making things smaller.

    if (!children.notes) return '';

    const toogleNotes = () => {
        children.on = !children.on;
        emit('render');
    }

    return html`
        <section class="${menuStyle} w-50 w-40-m w-auto-ns overflow-y-auto absolute items-center bottom-1 left-2 justify-center">
            <button class="outline-transparent pointer f5 no-underline black bg-animate bg-transparent hover-white inline-flex items-center pa3 ba b--transparent border-box mr4" onclick="${toogleNotes}"> Notas ${children.on ? '▼': '▲' } </button>
            <aside class="overflow-x-hidden menu ${children.on ? "menu--open" : ""} db-l w-100 tc mv0 f3 fw3 f5-l bg-black-80 white-90">
                <div class="pb2 ph4-l ph3 ph5-xl tl measure-wide">
                    ${ children.notes ? children.notes() : ""}
                </div>
            </aside>
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
            ${directionalButtons(state, emit)}
            ${notes(children, emit)}
        </body>
    `;
}

module.exports = Slide;
