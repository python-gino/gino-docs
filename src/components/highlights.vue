<template>
  <div id="highlights">
    <div class="highlights-container">
      <div class="highlight">
        <div class="eagle"></div>
        <h2>asyncpg</h2>
        <p>High performance<br>PostgreSQL driver</p>
      </div>
      <div class="highlight">
        <div class="postgres"></div>
        <h2>SQLAlchemy</h2>
        <p>Robust & mature SQL<br>rendering engine</p>
      </div>
      <div class="highlight">
        <div class="beaver"></div>
        <h2>No Surprise</h2>
        <p>Lightweight & explicit<br>architecture</p>
      </div>
      <div class="highlight">
        <div class="python"></div>
        <h2>Being Pythonic</h2>
        <p>Practical API for <br>development performance</p>
      </div>
    </div>
    <div class="section">
      <h1>&nbsp;HIGHLIGHTS</h1>
      <p>
        GINO is an engineering product, <br>
        built on top of popular tools, <br>
        tailored for asyncio<br>
      </p>
      <a href="https://python-gino.org/docs/en/master/index.html">
        <div class="button small">Read More</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  #highlights {
    height: calc(var(--bg-width) * 0.45);
    margin-top: calc(var(--bg-width) * 0.15);
    display: flex;
    justify-content: space-between;

    .highlights-container {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .highlight {
        background-image: url('~assets/highlight-box.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 2.56rem;
        height: 2.30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 0.18rem 0.18rem 0;

        div {
          height: 0.64rem;
          width: 0.90rem;
          margin: 0.12rem 0;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;

          &.eagle {
            background-image: url('~assets/asyncpg.svg');
          }

          &.postgres {
            background-image: url('~assets/postgres.svg');
          }

          &.beaver {
            background-image: url('~assets/beaver.svg');
          }

          &.python {
            background-image: url('~assets/python.svg');
          }
        }

        h2 {
          margin: 0 0 0.05rem;
          font-size: 0.20rem;
        }

        p {
          margin: 0;
          font-size: 0.16rem;
          text-align: center;
        }
      }
    }

    .section {
      text-align: right;
      margin-left: 1.80rem;
    }
  }
</style>
