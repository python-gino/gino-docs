<template>
  <div class="content">
    <Landing/>
    <Highlights/>
    <Architecture/>
    <Showcases/>
    <Quotes/>
    <Roadmap/>
  </div>
</template>

<script>
  import Landing from '~/components/landing.vue'
  import Highlights from '~/components/highlights.vue'
  import Architecture from '~/components/architecture.vue'
  import Showcases from '~/components/showcases.vue'
  import Quotes from '~/components/quotes.vue'
  import Roadmap from "../components/roadmap";

  export default {
    components: {
      Roadmap,
      Landing,
      Highlights,
      Architecture,
      Showcases,
      Quotes,
      Roadmap,
    }
  }
</script>

<style lang="scss">
  .content {
    background-image: url('~assets/bg.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top;
    background-size: var(--bg-width);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    font-size: 0.22rem;

    .button {
      margin-top: 0.36rem;
    }

    > div {
      position: relative;
      width: calc(var(--bg-width) * 0.66)
    }

    .section {
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
        margin: 0.48rem 0 0.18rem;
      }

      p {
        font-size: 0.22rem;
        line-height: 0.30rem;
        white-space: nowrap;
      }
    }
  }
</style>
