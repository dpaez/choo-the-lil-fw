const html = require('choo/html');

const Author = state => {
    return html`
    <article class="measure-wide center" data-name="article-full-bleed-background">
        <h1 class='f6 f2-m f-subheadline-l fw6 tc'>El autor</h1>
        <div class="vh-50 dt w-100-ns w-50-m tc bg-dark-gray white cover ba b--black bw3  center" style="background:url(https://pbs.twimg.com/profile_images/889222391007719424/VZb5oY8a_400x400.jpg) no-repeat center;">
            <div class="dtc v-mid">
              <header class="pv4 w-50 w-80-ns center">
                <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Yoshua Wuyts</h3>
                <h4 class="f3 fw4 i lh-title mt0">& collaborators</h4>
              </header>
              <section class="measure pt5 pb4 center">
                <ul class="avenir list center w-80-ns tl f4 mt0">
                    <li class="lh-copy">
                        🐦  <a href="https://twitter.com/yoshuawuyts" class="link bg-animate white-80 hover-bg-black-80">@yoshuawuyts</a>
                    </li>
                    <li class="lh-copy">
                        🚂  <a class="link bg-animate white-80 hover-bg-black-80" href="https://github.com/choojs/choo">Repositorio</a>
                    </li>
                    <li class="lh-copy">
                        🛤  <a class="link bg-animate white-80 hover-bg-black-80" href="https://github.com/choojs">Ecosistema Oficial</a>
                    </li>
                    <li class="lh-copy">
                        📓  <a href="https://medium.com/@yoshuawuyts/choo-v6-6e494267b57e" class="link bg-animate white-80 hover-bg-black-80">Choo v6 Intro</a>
                    </li>
                    <li class="lh-copy">
                        📓  <a href="https://medium.com/@yoshuawuyts/choo-architecture-performance-f6f0c44e8a6a" class="link bg-animate white-80 hover-bg-black-80">Arquitectura y performance</a>
                    </li>
                </ul>
              </section>
            </div>
        </div>
    </article>
    `;
};

Author.title = 'The author';

Author.backgroundColor = 'bg-light-green';
Author.color = 'dark-gray';

module.exports = Author;
