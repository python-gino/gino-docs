<template>
  <div id="showcase">
    <div class="section">
      <h1>SHOWCASE</h1>
    </div>
    <div class="cases">
      <div class="case third hidden" v-if="current < 2"></div>
      <div class="case secondary hidden" v-if="current === 0"></div>
      <div class="case"
           :class="{ current: index === current, secondary: Math.abs(index - current) === 1, third: Math.abs(index - current) === 2}"
           v-for="(showcase, index) in cases" @click="current = index">
        <pre v-highlightjs="showcase.src.trim()"><code class="python"></code></pre>
        <img src="~/assets/logo-icon.svg">
        <h2>{{ showcase.title }}</h2>
        <p>{{ showcase.desc }}</p>
      </div>
      <div class="case third hidden" v-if="current > cases.length - 3"></div>
      <div class="case secondary hidden" v-if="current === cases.length - 1"></div>
    </div>
    <div class="dots">
      <div :class="{ current: index === current }" v-for="(item, index) in cases"
           @click="current = index"></div>
    </div>
  </div>
</template>

<style lang="scss">
  #showcase {
    height: calc(var(--bg-width) * 0.7);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #212B73;
    }

    .cases {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: var(--bg-width);
      height: 8rem;
      transition: 0.5s;

      .case {
        display: none;
        transition: 0.5s;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;

        pre {
          position: absolute;
          opacity: 0;
          background-color: #212B73;
          color: #fff;
          font-size: 0.16rem;
          line-height: 0.2rem;
          border-radius: 0.12rem;
          margin: 0;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 6.6rem;
          padding: 0.24rem;
          transform: scale(0.4);
          transform-origin: center 10%;
          transition: 0.5s;
        }

        img {
          width: 0.82rem;
          height: 0.77rem;
          display: none;
        }

        h2 {
          opacity: 0;
          transition: 0.5s;
          text-align: center;
          font-size: 0.20rem;
          line-height: 0.20rem;
          color: #fff;
          font-weight: 400;
        }

        &.hidden {
          visibility: hidden;
        }

        &.secondary {
          display: flex;
          width: 2.9rem;
          height: 2.46rem;
          background-image: url('~assets/highlight-box.svg');
          background-size: contain;
          background-repeat: no-repeat;
          cursor: pointer;
          justify-content: center;

          h2 {
            opacity: 1;
          }

          img {
            display: block;
          }

          p {
            display: none;
          }
        }

        &.third {
          display: flex;
          width: 1.46rem;
          height: 1.24rem;
          background-image: url('~assets/highlight-box.svg');
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.6;
          cursor: pointer;

          h2 {
            padding: 0.24rem;
            opacity: 1;
          }

          p {
            display: none;
          }
        }

        &.current {
          display: block;
          width: 8.3rem;
          height: 8rem;
          background-color: #fff;
          border-radius: 0.12rem;
          box-shadow: #aaa 0 0 0.1rem;

          pre {
            opacity: 1;
            transform: scale(1);
            left: 0.12rem;
            top: 0.12rem;
            right: 0.12rem;
          }

          h2 {
            position: absolute;
            opacity: 1;
            text-align: center;
            font-size: 0.24rem;
            line-height: 0.24rem;
            color: #212B73;
            bottom: 0.25rem;
            width: 100%;
            font-weight: 600;
          }

          p {
            position: absolute;
            text-align: center;
            font-size: 0.2rem;
            color: #212B73;
            bottom: 0.01rem;
            width: 100%;
          }
        }
      }
    }

    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;

      div {
        background-color: #212B73;
        width: 0.15rem;
        height: 0.15rem;
        border-radius: 0.15rem;
        opacity: 0.3;
        margin: 0 0.1rem;
        cursor: pointer;

        &.current {
          opacity: 1;
          background-color: #3E6CDE;
          width: 0.19rem;
          height: 0.19rem;
          border-radius: 0.19rem;
        }
      }
    }
  }
</style>

<script>
  import showcases from 'assets/showcase.json'

  export default {
    data () {
      return {
        current: 0,
        cases: []
      }
    },

    async mounted () {
      this.cases = []
      for (let item of showcases) {
        item.src = (await import('assets/' + item.src + '.py')).default
        this.cases.push(item)
      }
    }
  }
</script>
