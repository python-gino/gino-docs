<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to GINO
        </h1>
        <p class="subheading font-weight-regular">
          GINO - GINO Is Not ORM - is a lightweight asynchronous ORM <br/>
          built on top of
          <a href="https://www.sqlalchemy.org/" target="_blank">SQLAlchemy</a> core for Python
          <a href="https://docs.python.org/3/library/asyncio.html" target="_blank">asyncio</a>.
          <br/>Now (early 2020) GINO supports only one dialect
          <a href="https://github.com/MagicStack/asyncpg">asyncpg</a>.
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Links</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in links"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',

  data: () => ({
    links: [
      {
        text: 'Source Code',
        href: 'https://github.com/python-gino/gino'
      },
      {
        text: 'Download',
        href: 'https://pypi.python.org/pypi/gino'
      },
      {
        text: 'Community',
        href: 'https://gitter.im/python-gino/Lobby'
      }
    ]
  })
}
</script>
