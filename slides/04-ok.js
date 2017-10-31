const html = require('choo/html');

const Cool = state => {
    return html`
        <header class='relative vh-100 bg-near-black dt w-100'>
             <div
                style='background:url(https://images.unsplash.com/photo-1431620828042-54af7f3a9e28?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center right;background-size: cover;'
                class='dtc v-mid cover ph3 ph4-m ph5-l'>
                <h1 class='f2 yellow f-subheadline-l measure lh-title fw6'>
                   Esta bien ser diferente. 👍
                </h1>
                <a class='absolute left-1 bottom-1 f5 f4-ns link near-white db pv2 ph3 hover-light-purple f6' href='https://unsplash.com/photos/UzHQOxVxqgw' target='_blank' rel='noopener noreferrer'>📷  Photo by Ales Krivec</a>
            </div>
        </header>
    `;
};

Cool.title = "It's OK";

module.exports = Cool;
