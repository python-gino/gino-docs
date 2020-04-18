<template>
  <div class="credits">
    <div class="clouds" ref="clouds"></div>

    <div>
      <h1>YOUR NAME HERE</h1>

      <p>
        Open source loves contribution! Your support is very much appreciated and we'll
        add your names here for:
      </p>
      <ul>
        <li>Accepted Pull Requests</li>
        <li>Accepted Translations</li>
        <li><a href="https://www.patreon.com/fantixking" target="_blank">Sponsorship</a>
        </li>
      </ul>
      <p>We also appreciate:</p>
      <ul>
        <li>Using, sharing and adding stars⭐!</li>
        <li>Sharing your story</li>
        <li>Reporting a bug/issue, or requesting for new features</li>
        <li>Asking a question</li>
      </ul>

      <h1>CORE TEAM</h1>

      <ul class="name-cards grow">
        <li>
          <img class="avatar" src="~/assets/fantix.jpg">
          <div>
            <h2>Fantix King</h2>
            <p style="display: flex">
              <img class="icon" src="~/assets/title.svg">
              Lead Architect at The University of Chicago Center for Translational Data
              Science
            </p>
            <p style="display: flex">
              <img class="icon" src="~/assets/location.svg">
              Chicago, IL
            </p>
            <p>
              <a href="https://github.com/fantix">GitHub</a>
              <a href="https://twitter.com/fantix">Twitter</a>
            </p>
          </div>
        </li>
        <li>
          <img class="avatar" src="~/assets/avatars/Tony Wang.jpeg">
          <div>
            <h2>Tony Wang</h2>
            <p style="display: flex">
              <img class="icon" src="~/assets/title.svg">
              Software Engineer at Grab
            </p>
            <p style="display: flex">
              <img class="icon" src="~/assets/location.svg">
              Singapore
            </p>
            <p>
              <a href="https://github.com/wwwjfy">GitHub</a>
              <a href="https://twitter.com/wwwjfy">Twitter</a>
            </p>
          </div>
        </li>
      </ul>

      <h1>ACKNOWLEDGEMENTS</h1>

      <ul class="name-cards wrap">
        <li>
          <img src="~/assets/pycharm.svg">
          <div>
            <h2>PyCharm</h2>
            <p>
              GINO is developed proudly with <a
              href="https://www.jetbrains.com/?from=GINO" target="_blank">PyCharm</a>.
            </p>
          </div>
        </li>
        <li>
          <img class="avatar" src="~/assets/avatars/Sergey Bershadsky.jpeg">
          <div>
            <h2>Sergey Bershadsky</h2>
            <p>
              <a href="https://www.patreon.com/user/creators?u=11152292"
                 target="_blank">Patreon</a>
            </p>
          </div>
        </li>
        <li>
          <img class="avatar" src="~/assets/avatars/Venky Iyer.jpeg">
          <div>
            <h2>Venky Iyer</h2>
            <p>
              <a href="https://www.patreon.com/user/creators?u=9555446" target="_blank">Patreon</a>
            </p>
          </div>
        </li>
        <li>
          <img class="avatar" src="~/assets/avatars/Dima Veselov.png">
          <div>
            <h2>Dima Veselov</h2>
            <p>
              Former
              <a href="https://www.patreon.com/dveselov" target="_blank">Patreon</a>
            </p>
          </div>
        </li>
      </ul>

      <h1>DECENTFOX</h1>
      <ul class="name-cards grow">
        <li>
          <img src="~/assets/decentfox.png" style="width: auto; margin-top: 0.24rem;">
          <div>
            <p>
              Special thanks to my wife Daisy and her outsourcing company <a
              href="https://decentfox.com/" target="_blank">DecentFoX Studio</a>, for
              offering me the opportunity to build this project in 2018. They are open
              for global software project outsourcing on Python, Web, iOS and Android
              development.
            </p>
            <p>
              Much thanks to <a href="https://www.behance.net/momo568007544"
                                target="_blank">Mico Liu</a> from DecentFox for
              designing this awesome website, and <a href="https://github.com/YUMEYA"
                                                     target="_blank">Aobo Shi</a> for
              maintaining the extensions!
            </p>
          </div>
        </li>
      </ul>

      <h1>CONTRIBUTORS</h1>
      <ul class="name-cards wrap">
        <li v-for="author in authors">
          <div>
            <h2>{{ author.name }}</h2>
            <p>{{ author.email }}</p>
          </div>
        </li>
      </ul>

      <h1>OTHER PROJECTS</h1>
      <p>GINO is built on top of these awesome projects:</p>
      <ul>
        <li><a href="https://www.sqlalchemy.org/" target="_blank">SQLAlchemy</a></li>
        <li><a href="https://github.com/MagicStack/asyncpg" target="_blank">asyncpg</a>
        </li>
      </ul>
      <p>Projects using GINO (please
        <a
          href="https://github.com/python-gino/python-gino.org/blob/src/pages/credits.vue"
          target="_blank">create a pull request</a> to add your projects here):</p>
      <ul>
        <li>
          <a href="https://github.com/python-gino/gino-starlette" target="_blank">gino-starlette</a>
        </li>
        <li>
          <a href="https://github.com/python-gino/gino-aiohttp" target="_blank">gino-aiohttp</a>
        </li>
        <li>
          <a href="https://github.com/python-gino/gino-tornado" target="_blank">gino-tornado</a>
        </li>
        <li>
          <a href="https://github.com/python-gino/gino-sanic"
             target="_blank">gino-sanic</a>
        </li>
        <li>
          <a href="https://github.com/python-gino/gino-quart"
             target="_blank">gino-quart</a>
        </li>
        <li>
          <a href="https://github.com/fantix/aintq" target="_blank">AintQ</a>
           - asyncio task queue on PostgreSQL
        </li>
        <li>
          <a href="https://github.com/madisvain/exchangeratesapi" target="_blank">ExchangeratesAPI</a>
           - Foreign exchange rates API with currency conversion
        </li>
      </ul>
      <p>GINO was inspired by these projects:</p>
      <ul>
        <li><a href="https://github.com/CanopyTax/asyncpgsa"
               target="_blank">asyncpgsa</a></li>
        <li><a href="https://github.com/05bit/peewee-async"
               target="_blank">peewee-async</a></li>
        <li><a href="https://github.com/monobot/asyncorm" target="_blank">asyncorm</a>
        </li>
      </ul>
      <p>Other similar Python asyncio ORM projects:</p>
      <ul>
        <li><a href="https://tortoise.github.io/" target="_blank">Tortoise ORM</a> since
          2018.
        </li>
        <li>
          <a href="https://github.com/encode/orm" target="_blank">ORM</a> by
          <a href="https://www.encode.io/" target="_blank">Encode OSS</a>
          since 2019.
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">
  .credits {
    margin-top: calc(var(--bg-width) * 0.1);
    font-size: 0.20rem;
    line-height: 0.26rem;
    display: flex;
    justify-content: center;

    .avatar {
      border: 2px solid #F8D230;
      border-radius: 0.64rem;
      flex: 0 0 0.64rem;
    }

    a {
      color: #fff;
    }

    h1 {
      display: inline-block;
      font-size: 0.30rem;
      font-weight: 500;
      padding: 0.48rem 0 0.30rem;
      border-bottom: 0.04rem solid #3E6CDE;
    }

    h2 {
      font-size: 0.24rem;
      font-weight: 500;
    }

    p {
      vertical-align: middle;
    }

    .name-cards {
      display: flex;
      margin: 0.24rem 0 0 0;
      padding: 0;

      li {
        list-style: none;
        width: 3.2rem;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 0.16rem;
        padding: 0.32rem;
        margin: 0 0.32rem 0.32rem 0;
        display: flex;
        flex: 0 1 auto;
        align-items: top;
      }

      &.grow li {
        flex: 1 1 auto;
      }

      img {
        width: 0.64rem;
        height: 0.64rem;
        margin-right: 0.32rem;

        &.icon {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.16rem;
        }

      }

      &.wrap {
        flex-wrap: wrap;
      }
    }

    > div {
      width: calc(var(--bg-width) * 0.66);
    }

    .clouds {
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      background-image: url('~assets/clouds.svg');
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: top;
      background-size: var(--bg-width);
      width: 100%;
      height: calc(var(--bg-width) * 0.4734375);
    }
  }

  @media (max-width: 992px) {
    .credits {
      font-size: 0.24rem;
      line-height: 0.3rem;

      h1, h2 {
        align-self: center;
      }

      .name-cards {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        &.wrap {
          text-align: center;
        }

        img {
          margin-right: 0;
        }

        li {
          flex-direction: column;
          align-items: center;
          margin: 0 0 0.32rem;
        }
      }

      > div {
        width: auto;
        margin: 0 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &.clouds {
          margin: 0;
        }
      }
    }
  }
</style>

<script>
  import authors from 'assets/authors.json'

  export default {
    data () {
      return {
        authors: authors
      }
    },

    mounted () {
      let clouds = this.$refs.clouds
      let requested = false
      clouds.style.transform = 'translateY(-' + (window.scrollY / 4) + 'px)'
      window.onscroll = () => {
        if (requested) return
        requested = true
        window.requestAnimationFrame(() => {
          requested = false
          clouds.style.transform = 'translateY(-' + (window.scrollY / 4) + 'px)'
        })
      }
    }
  }
</script>
