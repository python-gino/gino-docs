<template>
  <div id="roadmap">
    <div class="section">
      <h1>ROADMAP</h1>
    </div>
    <div class="container">
      <div class="shadow">
        <div class="spinning"></div>
      </div>
      <div class="milestone">
        <img src="~/assets/logo-icon-light.svg">
        <h1>1.0 Release</h1>
      </div>

      <div v-for="(item, i) in items" class="item" :style="{left: lefts[i] + 'rem'}"
           :class="{up: i % 2 === 0, down: i % 2 === 1, on: i <= progress, tall: i % 5 === 2}">
        <h1>{{ item.title }}</h1>
        <hr>
        <div class="window">
          <img src="~/assets/submarine-window.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  #roadmap {
    margin-bottom: -1rem;
    background-image: url('~assets/submarine.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    background-size: var(--bg-width);
    width: 100%;
    height: 10.5rem;
    margin-top: 0.6rem;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    h1 {
      padding-top: 0.48rem;
    }

    .container {
      position: absolute;
      width: var(--bg-width);
      left: calc(50vw - var(--bg-width) / 2);
      bottom: 0;
      height: 8.99rem;

      h1 {
        font-size: 0.2rem;
        line-height: 0.22rem;
        padding: 0.1rem 0.75rem;
        text-align: center;
        margin: 0;
      }

      .shadow {
        position: absolute;
        left: 8.85rem;
        top: 4.16rem;
        filter: drop-shadow(0 0 4px #F2D354);
        animation: 3s linear infinite spin;

        .spinning {
          width: 0.7149rem;
          height: 0.7149rem;
          border-radius: 0.7149rem;
          background: radial-gradient(rgba(255, 255, 255, 1), rgba(247, 237, 209, 1));
          clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 40% 100%, 50% 50%);
        }
      }

      .milestone {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 9.2rem;
        top: 0.2rem;
      }

      .item {
        position: absolute;
        width: 3.14rem;
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgba(255, 255, 255, 0.6);

        hr {
          display: block;
          width: 2px;
          flex: 1 0 auto;
          border: none;
          margin: -0.03rem 0;
        }

        .window {
          height: 0.74rem;
          position: relative;

          img {
            position: absolute;
            display: none;
            top: 0;
            left: -0.27rem;
            height: 100%;
            transform: scaleY(-0.8) skewX(-15deg);
            transform-origin: 50% 95%;
            filter: brightness(20%);
            opacity: 0.2;
            -webkit-mask-image: -webkit-gradient(
                linear, 50% top, 50% bottom,
                color-stop(1.00, rgba(0, 0, 0, 1)),
                color-stop(0.60, rgba(0, 0, 0, 0))
            )
          }
        }

        &.up {
          background-position-y: bottom;
          bottom: 4.32rem;

          hr {
            background: linear-gradient(#636A9D, #212B73);
          }
        }

        &.down {
          top: 3.93rem;
          background-position-y: top;
          justify-content: flex-end;
          flex-direction: column-reverse;

          hr {
            background: linear-gradient(#212B73, #636A9D);
          }
        }

        &.on {
          background-image: url('~assets/submarine-window.svg');
          background-repeat: no-repeat;
          background-position-x: center;
          background-size: 0.54rem;
          color: rgba(255, 255, 255, 1);

          .window img {
            display: block;
          }

          &.up hr {
            background: linear-gradient(rgba(216, 216, 216, 0.2), #d8d8d8);
          }

          &.down hr {
            background: linear-gradient(#d8d8d8, rgba(216, 216, 216, 0.2));
          }
        }

        &.tall {
          height: 3rem;
        }
      }
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        lefts: [
          '1.26', '2.31', '3.36', '4.41', '5.46',
          '9.86', '10.91', '11.96', '13.01', '14.06'
        ],
        items: [
          {title: 'Redo packaging and automation'},
          {title: 'Embed aiocontextvars and move extensions out'},
          {title: 'python-gino.org'},
          {title: 'Release candidates'},
          {title: 'Better documentation'},
          {title: 'Blog post'},
          {title: 'Refine core code'},
          {title: 'Better typing support'},
          {title: 'MySQL support?'},
          {title: 'Patch SQLAlchemy'},
        ],
        progress: 3,
      }
    }
  }
</script>
