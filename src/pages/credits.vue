<template>
  <div class="credits">
    <div class="clouds"></div>

    <div>
      <h1>YOUR NAME HERE</h1>

      <p>
        Open source loves contribution! Your support is very much appreciated and we'll
        add your names here for:
      </p>
      <ul>
        <li>Accepted Pull Requests</li>
        <li>Accepted Translations</li>
        <li>Sponsorship</li>
      </ul>
      <p>We also appreciate:</p>
      <ul>
        <li>Using, sharing and star⭐!</li>
        <li>Share your story</li>
        <li>Report a bug/issue, or request for new features</li>
        <li>Ask a question</li>
      </ul>

      <h1>CORE TEAM</h1>

      <ul class="name-cards">
        <li>
          <img class="avatar" src="~/assets/fantix.jpg">
          <div>
            <h2>Fantix King</h2>
            <p style="display: flex">
              <img class="icon" src="~/assets/title.svg">
              Lead Architect at The University of Chicago Center for Translational Data Science
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

      <ul class="name-cards">
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
      <ul class="name-cards">
        <li>
          <img src="~/assets/decentfox.png" style="width: auto; margin-top: 0.24rem;">
          <div>
            <p>
              Special thanks to my wife Daisy and her outsourcing company <a
              href="https://decentfox.com/" target="_blank">DecentFoX Studio</a>,
              for offering me the opportunity to build this project. We are open for global
              software project outsourcing on Python, iOS and Android development.
            </p>
            <p>
              Much thanks to Mico Liu from DecentFox for designing this awesome website!
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
      width: 0.64rem;
      height: 0.64rem;
      border: 0.02rem solid #F8D230;
      border-radius: 0.64rem;
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
        width: 4rem;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 0.16rem;
        padding: 0.32rem;
        margin: 0 0.32rem 0.32rem 0;
        display: flex;
        flex: 1 1 auto;
        align-items: top;
      }

      img {
        width: 0.64rem;
        height: 0.64rem;
        margin-right: 0.32rem;
        vertical-align: middle;

        &.icon {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.16rem;
        }

      }

      &.wrap {
        flex-wrap: wrap;

        li {
          width: 3rem;
        }
      }
    }

    > div {
      width: calc(var(--bg-width) * 0.66);
    }

    .clouds {
      position: absolute;
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
</style>

<script>
  import authors from 'assets/authors.json'

  export default {
    data () {
      return {
        authors: authors
      }
    }
  }
</script>
