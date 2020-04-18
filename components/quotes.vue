<template>
  <div id="quotes">
    <img class="quote" src="~/assets/quote.svg">
    <p>
      I built GINO because I found it difficult to access database in Python with
      asyncio in 2017, and I wanted all three of explicitness, development performance
      and runtime performance in a single library.
    </p>

    <p>
      Following GNU’s naming style, GINO is recursively defined as GINO Is Not ORM,
      indicating that it’s almost an ORM but refuses to inherit the implicit behaviors
      found in typical ORMs.
    </p>

    <img class="avatar" src="~/assets/fantix.jpg">
    <img class="sig" src="~/assets/signature.svg">
  </div>
</template>

<style lang="scss">
  #quotes {
    height: calc(var(--bg-width) * 0.55);
    margin-top: calc(var(--bg-width) * 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;

    .quote {
      width: 3.14rem;
    }

    p {
      margin: 0.3rem 14%;
      font-size: 0.24rem;
      line-height: 0.30rem;
      text-align: center;
    }

    .avatar {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 1.8rem;
      border: 0.08rem solid #F2D354;
      margin: 0.2rem 0;
    }

    .sig {
      width: 2rem;
    }
  }

  @media (max-width: 992px) {
    #quotes {
      width: auto;
    }
  }
</style>
