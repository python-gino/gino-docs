<template>
  <div id="landing" ref="landing">
    <canvas class="sky" ref="sky"></canvas>
    <div class="lighthouse"></div>
    <div class="title" ref="title">
      <span>GINO is a non-typical</span><br>
      <span>object-relational mapping</span><br>
      <span>library in Python for asyncio.</span><br>
      <a href="https://github.com/python-gino/gino" target="_blank">
        <div class="button">GitHub Project</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  #landing {
    height: calc(var(--bg-width) * 0.4734375);
    width: 100%;

    .sky {
      width: var(--bg-width);
      height: 100%;
      margin-left: calc(50vw - var(--bg-width) / 2);
    }

    .lighthouse {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url('~assets/landing.svg');
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: top;
      background-size: var(--bg-width);
    }

    .title {
      position: absolute;
      top: 36.6%;
      left: calc(328px * var(--factor) - var(--bg-width) / 2 + 52vw);

      span {
        display: inline-block;
        font-family: 'Raleway', sans-serif;
        font-size: 0.45rem;
        line-height: 0.5rem;
        font-weight: 700;
      }

      .button {
        margin-top: 0.72rem;
      }
    }
  }
  @media (max-width: 992px) {
    #landing {
      .title {
        left: 0.5rem;
        right: 0.5rem;
        text-align: center;

        span {
          font-size: 0.36rem;
        }
      }

    }
  }
</style>

<script>
  import meteor from 'assets/meteor.svg'

  export default {
    mounted () {
      if (window.innerWidth <= 992) return
      let sky = this.$refs.sky
      this.width = this.$refs.landing.clientWidth
      this.height = this.$refs.landing.clientHeight
      let padding = 32
      this.noStar = [
        this.$refs.title.offsetLeft - padding,
        this.$refs.title.offsetLeft + this.$refs.title.clientWidth + padding,
        this.$refs.title.offsetTop - padding,
        this.$refs.title.offsetTop + this.$refs.title.clientHeight + padding,
      ]
      sky.width = this.width
      sky.height = this.height
      this.ctx = sky.getContext('2d')
      this.stars = []
      this.meteors = []
      this.meteor = new Image()
      this.meteor.src = meteor
      this.nextBlink = 0
      this.nextMeteor = 0
      this.blinking = 0

      while (this.stars.length < 24) {
        let x = (0.1 + Math.random() * 0.8) * this.width,
          y = (0.2 + Math.random() * 0.7) * this.height
        if (this.noStar[0] < x && x < this.noStar[1] && this.noStar[2] < y && y < this.noStar[3]) continue
        let collision = false
        for (let star of this.stars) {
          if (Math.abs(star[0] - x) < padding && Math.abs(star[1] - y) < padding) {
            collision = true
            break
          }
        }
        if (collision) continue
        this.stars.push([
          x,
          y,
          Math.random() * 4,
          "rgba(255, 255, 255, " + (Math.random() * 0.6 + 0.2) + ")",
          0,
          8,
        ])
      }
      if (process.browser) {
        window.requestAnimationFrame(this.anim)
      }
    },

    methods: {
      anim () {
        if (this.blinking > 0 || this.meteors.length !== 0) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          for (let star of this.stars) {
            if (star[4] > 0) {
              if (star[4] % star[5] === 1)
                this.ctx.fillStyle = star[3]
              else
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
              star[4] -= 1
              if (star[4] === 0) this.blinking -= 1
            } else {
              this.ctx.fillStyle = star[3]
            }
            this.ctx.beginPath();
            this.ctx.arc(star[0], star[1], star[2], 0, 2 * Math.PI);
            this.ctx.fill();
          }
          if (this.meteors.length > 0) {
            this.meteors = this.meteors.filter(m => {
              this.ctx.globalAlpha = Math.max(0, 1 - Math.abs(m[1] * 2 - this.height) / this.height)
              this.ctx.drawImage(this.meteor, m[0], m[1] - 192)
              this.ctx.globalAlpha = 1
              m[0] -= m[2] * 0.8
              m[1] += m[2]
              return m[1] < this.height
            })
          }
        }
        if (this.nextBlink > 0) {
          this.nextBlink -= 1
        } else {
          this.blink()
          this.nextBlink = parseInt(Math.random() * 128)
        }
        if (this.nextMeteor > 0) {
          this.nextMeteor -= 1
        } else {
          this.addMeteor()
          this.nextMeteor = parseInt(Math.random() * 512)
        }
        window.requestAnimationFrame(this.anim)
      },

      blink () {
        let i = parseInt(Math.floor(Math.random() * this.stars.length))
        this.stars[i][4] = parseInt(Math.random() * 32)
        this.stars[i][5] = parseInt(Math.random() * 6) + 4
        if (this.stars[i][4] > 0) this.blinking += 1
      },

      addMeteor () {
        this.meteors.push([
          (0.1 + Math.random() * 0.9) * this.width,
          0, Math.random() * 10 + 10
        ])
      }
    }
  }
</script>
