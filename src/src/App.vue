<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="GINO Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="GINO Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('./assets/logo-name.png')"
          width="100"
        />
      </div>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn href="docs/en/master/" text>
        <v-icon>mdi-book-open</v-icon>
        <span class="ml-2">Documentation</span>
      </v-btn>

      <router-link :to="{name: 'authors'}">
        <v-btn text>
          <v-icon>mdi-account-group</v-icon>
          <span class="ml-2">Authors</span>
        </v-btn>
      </router-link>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
