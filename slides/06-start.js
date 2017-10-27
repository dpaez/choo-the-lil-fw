const html = require('choo/html');

const Ready = state => {
    return html`
        <section class='relative vh-100 dt w-100'>
            <div
                style='background:url(https://i.pinimg.com/736x/27/b4/8d/27b48d139d6ddd403978da73e425176b.jpg) no-repeat center right;background-size: cover;'
                class='dtc v-mid cover ph3 ph4-m ph5-l'>
                <h1 class='f2 bg-light-gray ttu bg-animate hover-bg-lightest-blue  blue tc f-subheadline-l measure lh-title fw9'>
                    Manos a la obra 🛠
                </h1>
            </div>
        </section>
    `;
};

Ready.title = "Let's get started";

//Ready.backgroundColor = 'bg-washed-red';
//Ready.color = 'near-black';

module.exports = Ready;
