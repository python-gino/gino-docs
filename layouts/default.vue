<template>
  <div class="container">
    <div class="blur-bg">
    </div>
    <nav :class="{short: short}">
      <div class="nav-content">
        <a href="/">
          <img class="logo" src="~/assets/logo.svg">
        </a>
        <div class="nav-links">
          <a href="/docs">DOCUMENTATION</a>
          <a href="/credits">CREDITS</a>
          <a href="https://github.com/python-gino/gino" target="_blank"
             class="github-stars">
            <div class="left">
              <img class="github-logo" src="~/assets/github.svg">
              GitHub
            </div>
            <div class="right">
              <img src="~/assets/star.svg">
              {{ stars }}
            </div>
          </a>
        </div>
      </div>
    </nav>

    <nuxt/>

    <footer>
      <div class="footer">
        <div>
          <div>
            <img class="logo" src="~/assets/logo-dark.svg">
            <a href="https://github.com/python-gino/gino/blob/master/LICENSE"
               target="_blank">
              <div class="license">
                <div></div>
                GINO is open source in BSD license.
              </div>
            </a>
          </div>
          <p class="copyright">Copyright &copy; 2017-present, Fantix King. All rights
            reserved.</p>
        </div>
        <div>
          <div class="links">
            <div>
              <h2>DOCUMENTATION</h2>
              <p v-for="row in docs">
                <b>{{ row[0] }}</b>:
                <template v-for="lang in row[1]">
                  <a :href="'/docs/' + lang + '/' + row[0] + '/'">{{ lang === 'en' ? 'English' : 'Chinese' }}</a>
                  {{ ' ' }}
                </template>
              </p>
              <p>
                <b>0.8</b>:
                <a href="https://python-gino.readthedocs.io/en/v0.8.5/" target="_blank">English</a>
                <a href="https://python-gino.readthedocs.io/zh/v0.8.5/" target="_blank">Chinese</a>
              </p>
            </div>
            <div>
              <h2>GITHUB</h2>
              <p><a href="https://github.com/python-gino/gino" target="_blank">Source
                Code</a></p>
              <p><a href="https://github.com/python-gino/gino/issues" target="_blank">Issues
                & Questions</a></p>
              <p><a href="https://github.com/python-gino" target="_blank">Extensions</a>
              </p>
            </div>
            <div>
              <h2>COLLABORATION</h2>
              <p><a
                href="https://www.transifex.com/decentfox-studio/gino_1_0/dashboard/"
                target="_blank">Transifex</a></p>
              <p><a href="https://gitter.im/python-gino/Lobby"
                    target="_blank">Gitter</a></p>
              <p><a href="https://app.codacy.com/gh/python-gino/gino/dashboard"
                    target="_blank">Codacy</a></p>
            </div>
          </div>
          <div class="badges">
            <a href="https://pypi.python.org/pypi/gino" target="_blank">
              <img
                src="https://img.shields.io/pypi/v/gino?logo=python&logoColor=white&style=flat-square"
                alt="PyPI Release Version">
            </a>
            <a href="https://pypi.python.org/pypi/gino" target="_blank">
              <img alt="PyPI - Downloads"
                   src="https://img.shields.io/pypi/dm/gino?color=3E6CDE&logo=pypi&logoColor=white&style=flat-square">
            </a>
            <a href="https://app.codacy.com/gh/python-gino/gino/dashboard"
               target="_blank">
              <img alt="Codacy grade"
                   src="https://img.shields.io/codacy/grade/b6a59cdf5ca64eab9104928d4f9bbb97?color=3E6CDE&logo=codacy&style=flat-square">
            </a>
            <a href="https://github.com/python-gino/gino/actions?query=workflow%3Atest"
               target="_blank">
              <img
                src="https://img.shields.io/github/workflow/status/python-gino/gino/test?label=test&logo=github&style=flat-square"
                alt="GitHub Workflow Status for tests">
            </a>
            <a href="https://app.codacy.com/gh/python-gino/gino/dashboard"
               target="_blank">
              <img alt="Codacy coverage"
                   src="https://img.shields.io/codacy/coverage/b6a59cdf5ca64eab9104928d4f9bbb97?logo=codacy&style=flat-square">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.2rem;
    position: relative;
  }

  nav {
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    transition: 0.5s;
    z-index: 999;

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 15.36rem;
      height: 0.9rem;
      padding: 0.32rem 0.26rem;
      transition: 0.5s;

      > a, .logo {
        height: 100%;
      }

      .nav-links {
        display: flex;
        align-items: center;
        font-weight: 500;

        a {
          margin-left: 0.36rem;
          text-decoration: none;
          color: white;
          padding: 0.18rem;
          font-size: 0.18rem;

          &:hover {
            color: #f8d230;
            text-shadow: #f8d230 0 0 5px;
            transition: 0.2s;
          }

          &.github-stars {
            display: flex;
            align-items: center;
            padding: 0;
            margin-left: 0.54rem;
            border-radius: 0.36rem;

            div {
              border: 1px solid #fff;
              line-height: 0.36rem;
              background-color: #1E2B78;
              transition: 0.1s;
              height: 0.36rem;

              &.left {
                border-bottom-left-radius: 0.36rem;
                border-top-left-radius: 0.36rem;
                border-right: none;
                padding: 0 0.09rem 0 0.45rem;
                position: relative;

                .github-logo {
                  position: absolute;
                  height: calc(0.36rem + 2px);
                  top: -1px;
                  left: -1px;
                }
              }

              &.right {
                border-bottom-right-radius: 0.36rem;
                border-top-right-radius: 0.36rem;
                padding: 0 0.09rem 0 0.09rem;
                display: flex;
                align-items: center;

                img {
                  height: 0.18rem;
                  margin-right: 0.09rem;
                }
              }
            }

            &:hover {
              color: white;
              text-shadow: none;
              box-shadow: #ffffff 0 0 5px;
            }
          }
        }
      }
    }

    &.short {
      background-color: rgba(30, 43, 120, 0.85);

      .nav-content {
        height: 0.72rem;
        padding: 0.14rem 0.26rem;
      }
    }
  }

  footer {
    background-image: url('~assets/footer.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top;
    background-size: var(--bg-width);
    width: 100%;
    height: calc(var(--bg-width) * 0.37447916666666664);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .footer {
      width: calc(var(--bg-width) * 0.75);
      height: 2.16rem;
      margin-bottom: 0.67rem;
      display: flex;
      align-items: stretch;
      justify-content: space-between;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .logo {
          width: 1.5rem;
        }

        .license {
          position: absolute;
          background-color: #F2D354;
          border-radius: 2rem;
          color: #212B73;
          font-size: 0.18rem;
          line-height: 0.16rem;
          padding: 0.14rem 0.3rem;
          margin-top: 0.17rem;
          font-weight: 500;

          div {
            position: absolute;
            left: 50%;
            top: -0.14rem;
            border: 0.15rem solid transparent;
            border-bottom: none;
            border-left-color: #F2D354;
          }
        }

        .copyright {
          font-size: 0.16rem;
          line-height: 0.16rem;
          margin: 0;
        }

        .links {
          display: flex;
          justify-content: space-between;

          h2 {
            font-size: 0.2rem;
          }

          p {
            font-size: 0.18rem;
          }

          a, a:visited {
            color: white;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        }

        .badges {
          display: flex;
          justify-content: space-between;
          height: 20px;

          a:not(:first-of-type) {
            margin-left: 8px;
          }
        }
      }
    }
  }

  @media (min-device-width: 1921px) and (min-width: 1921px) {
    .blur-bg {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background-image: url('~assets/bg.svg');
      background-repeat: repeat;
      background-position-x: 0;
      background-position-y: top;
      background-size: var(--bg-width);
      filter: blur(16px);
      z-index: -1;
    }
  }

  @media (max-width: 992px) {
    nav .nav-content .nav-links a {
      font-size: 0.20rem;
      margin: 0;

      &.github-stars {
        display: none;
      }
    }

    footer .footer {
      flex-direction: column;
      height: auto;
      width: auto;
      margin: 0 0.5rem calc(0.5rem - 8px);

      > div {
        .license {
          margin-top: -1.3rem;
          right: 0.5rem;

          div {
            left: 10%;
            bottom: -0.14rem;
            top: auto;
            border: 0.15rem solid transparent;
            border-top: none;
            border-left-color: #F2D354;
          }
        }

        .links {
          margin: 0.2rem 0;
        }

        .badges {
          flex-wrap: wrap;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
          height: auto;

          a, a:not(:first-of-type) {
            margin: 0 8px 0 0;
          }
        }
      }
    }
  }
</style>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        stars: '',
        short: false,
        docs: [],
      }
    },

    async mounted () {
      if (process.browser) this.onScroll()
      this.loadStars()
      this.loadDocVersions()
    },

    created () {
      if (process.browser)
        window.addEventListener('scroll', this.onScroll)
    },

    destroyed () {
      if (process.browser)
        window.removeEventListener('scroll', this.onScroll)
    },

    methods: {
      onScroll () {
        if (window.scrollY < 64) {
          if (this.short)
            this.short = false
        } else {
          if (!this.short)
            this.short = true
        }
      },

      async loadStars () {
        let num = localStorage.getItem("github-star-num");
        let expire = localStorage.getItem("github-star-expire");
        if (num === null || Date.now() > parseInt(expire)) {
          let resp = await axios.get('https://api.github.com/repos/python-gino/gino')
          num = resp.data.stargazers_count
          localStorage.setItem('github-star-num', num);
          localStorage.setItem('github-star-expire', Date.now() + 3600 * 24 * 1000)
        }
        this.stars = num
      },

      async loadDocVersions () {
        let resp = await axios.get('/docs/versions.json')
        let docs = {}
        for (let [loc, vers] of Object.entries(resp.data)) {
          for (let ver of vers) {
            if (docs[ver]) {
              docs[ver].push(loc)
              docs[ver].sort()
            } else {
              docs[ver] = [loc]
            }
          }
        }
        this.docs = Object.entries(docs).sort().reverse()
      }
    }
  }
</script>
