// Note (deka): we are using choo v6 B-)
// And now, introducing the code behing the talk or is it the talk behind the code? :-P

// The requires
const choo = require('choo');
const html = require('choo/html');
const css = require('sheetify');

// components
const slides = require('./slides');

css('tachyons');

const app = choo();

if (process.env.NODE_ENV !== 'production') {
    app.use(require('choo-log')());
    app.use(require('choo-expose')());
}

// The store
const presentationStore = (state, emitter) => {
    // initialize things
    if (!state.presentation) {
        state.presentation = {};
        state.presentation.slides = slides;
        state.presentation.current = 0; // the first slide
    }

    emitter.on(state.events.DOMCONTENTLOADED, () => {
        emitter.on('choo-slides:fw', forward);
        emitter.on('choo-slides:bw', backward);
        emitter.on('choo-slides:goto', goto);
    });

    const forward = () => {
        state.presentation.current += 1;
        emitter.emit(state.events.PUSHSTATE, `/${state.presentation.current}`);
        emitter.emit('log:debug', `forward, go to next slide: ${state.presentation.current}`);
    }

    const backward = () => {
        (state.presentation.current <= 0) ? state.presentation.current = 0 : state.presentation.current -= 1;
        emitter.emit(state.events.PUSHSTATE, `/${state.presentation.current}`);
        emitter.emit('log:debug', `backward, go to previous slide: ${state.presentation.current}`);
    }

    const goto = (idx) => {
        state.presentation.current = idx;
        emitter.emit('render');
    }
}

// The views
const routeView = (state, emit) => {
    if (state.params.slideIdx >= slides.length) return NotFoundView(state, emit);
    state.presentation.current = Number(state.params.slideIdx) || 0;
    return slides[state.presentation.current](state, emit);
};

const NotFoundView = (state, emit) => {
    emit(state.events.DOMTITLECHANGE, 'Not Found');
    return html`
    <body>
        <section class='vh-100 bg-washed-blue baskerville'>
            <header class='tc ph5 lh-copy'>
                <h1 class='f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple'>404</h1>
                <h2 class='tc f1-l fw1'>🚉  Missing train?</h2>
            </header>
            <p class='fw1 i tc mt4 mt5-l f4 f3-l'>Previous stations:</p>
            <ul class='list tc pl0 w-100 mt5'>
                ${state.presentation.slides.map((slide, idx) => {
                    return html`
                        <li><a class='f5 f4-ns link black db pv2 ph3 hover-light-purple' href='/${idx}'>💺  ${slide.title}</a></li>
                    `;
                })}
            </ul>
        </section>
    </body>
    `;
}

// initialize everything
app.use(presentationStore);
app.route('/', routeView);
app.route('/:slideIdx', routeView);
app.mount('body');
