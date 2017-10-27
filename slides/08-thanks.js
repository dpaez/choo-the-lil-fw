const html = require('choo/html');

const Thanks = state => {
    return html`
        <div>
            <h1 class='f2 tc'> Ch o  o 🚂 🚋🚋 : el pequeño framework que puede 💪 </h1>
            <h2 class='f3 f2-m f-subheadline-l fw6 bg-animate hover-white-40'> GRACIAS 🎉 </h2>
            <section class="center br3 w-30-l w-60-ns w-50-m bw3 pa3 pa4-ns ba b--black-10">
              <div class="dib mr3 tc v-mid">
                <h1 class="f3 mb2"><a href="https://twitter.com/carax" class="link">@carax</a></h1>
                <h2 class="f4 mb2">aka: DEKA</h1>
                <h3 class="f5 fw4 gray mt0">JS Developer</h2>
              </div>
              <img src="https://pbs.twimg.com/profile_images/799493028348129280/FKiV5x49_400x400.jpg" class="b--black-05 ba br-100 dib h4 v-mid w-40" title="Photo of a kitty staring at you">
            </section>
        </div>
    `;
};

Thanks.title = 'Thanks';

Thanks.backgroundColor = 'bg-light-green';
Thanks.color = 'dark-gray';

module.exports = Thanks;
