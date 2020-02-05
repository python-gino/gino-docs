<template>
  <div id="architecture">
    <div class="section">
      <h1>ARCHITECTURE&nbsp;</h1>

      <h2>
        <img class="arch-icon" src="~/assets/arch-3.svg">
        Query Builder
      </h2>
      <p>
        For applications using asyncpg directly, <br>
        GINO adds the ingredient of building SQLs <br>
        conveniently with SQLAlchemy core.
      </p>

      <h2>
        <img class="arch-icon" src="~/assets/arch-4.svg">
        Async SQLAlchemy
      </h2>
      <p>
        GINO provides SQLAlchemy-like Engine <br>
        with async APIs.
      </p>

      <h2>
        <img class="arch-icon" src="~/assets/arch-5.svg">
        Object Loader
      </h2>
      <p>
        GINO could load data into POPOs <br>
        (Plain Old Python Objects) for <br>
        easier data access.
      </p>

      <a href="/docs/en/master/how-to/schema.html">
        <div class="button small">Read More</div>
      </a>
    </div>
    <div class="diagram">
      <div class="top">
        <div class="right"><span>SQLAlchemy core</span></div>
        <div class="center"><span>GINO Async Wrapper</span></div>
        <div class="left">GINO Loader</div>
      </div>
      <div class="mid">GINO Dialect</div>
      <div class="bottom">asyncpg</div>
    </div>
  </div>
</template>

<style lang="scss">
  #architecture {
    display: flex;
    justify-content: space-between;
    height: calc(var(--bg-width) * 0.7);

    h2 {
      position: relative;
      font-weight: 700;

      .arch-icon {
        display: block;
        position: absolute;
        width: 0.5rem;
        left: -1rem;
        vertical-align: middle;
        top: -0.16rem;
      }

      &:last-of-type .arch-icon {
        top: 0;
      }
    }

    .diagram {
      margin-top: 1rem;

      div {
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0.2rem 0;
        width: 5.14rem;
        transition: 0.3s;
        font-size: 0.24rem;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &:hover {
          /*transform: scale(1.2);*/
        }
      }

      div.top {
        position: relative;
        height: 3.84rem;
        transform: none;

        div {
          margin: 0;
          top: 0;
          position: absolute;
        }

        .left {
          background-image: url('~assets/arch-5.svg');
          width: 2.06rem;
          height: 1.02rem;
          left: 0;
        }

        .center {
          background-image: url('~assets/arch-4.svg');
          clip-path: url(#top-center-clip);
          width: 3.55rem;
          height: 3.85rem;
          left: 0;

          span {
            margin-top: -0.1rem;
          }
        }

        .right {
          background-image: url('~assets/arch-3.svg');
          width: 3.62rem;
          height: 3.84rem;
          right: 0;

          span {
            margin-top: 2.5rem;
          }
        }
      }

      .mid {
        background-image: url('~assets/arch-2.svg');
        height: 1.13rem;
      }

      .bottom {
        background-image: url('~assets/arch-1.svg');
        height: 1.16rem;
      }
    }
  }
</style>
