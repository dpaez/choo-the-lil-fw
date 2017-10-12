const html = require('choo/html');

const Cool = state => {
    return html`
        <header class='relative vh-100 bg-near-black dt w-100'>
             <div
                style='background:url(https://images.unsplash.com/photo-1453053507108-9f5456eb481f) no-repeat center right;background-size: cover;'
                class='dtc v-mid cover ph3 ph4-m ph5-l'>
                <h1 class='f2 yellow f-subheadline-l measure lh-title fw9'>
                   Esta bien ser diferente. 👍
                </h1>
                <a class='absolute left-1 bottom-1 f5 f4-ns link near-white db pv2 ph3 hover-light-purple f6' href='https://unsplash.com/@bockman?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' target='_blank' rel='noopener noreferrer'>📷  Darren Bockman</a>
            </div>
        </header>
    `;
};

Cool.title = "It's OK";

//Cool.backgroundColor = 'bg-washed-red';
//Cool.color = 'near-black';

module.exports = Cool;
