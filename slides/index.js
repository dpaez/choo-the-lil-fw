const SlideShell = require('../slide');

const slides = [
    require('./00-intro'),
    require('./01-author'),
    require('./02-why'),
    require('./03-difference'),
    require('./04-ok'),
    require('./05-amazing'),
    require('./06-start'),
    require('./07-look'),
    require('./08-thanks')
];

module.exports = slides.map(slide => {
    const shell = SlideShell(slide);
    shell.title = slide.title;
    return shell;
});

