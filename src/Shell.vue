<template>
  <v-app>
    <v-content id="content">
      <v-container>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <!-- <header>
            <h2>Vue, Vuetify, Webpack Demo</h2>
          </header>-->
          <router-view :recipes="recipes"></router-view>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      recipes: []
    };
  },
  created() {
    fetch('src/json/recipes.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.recipes = data.list;
        this.loading = false;
        this.addSlug();
      });
  },
  methods: {
    addSlug() {
      this.recipes.forEach(recipe => {
        Object.assign(recipe, {
          slug: recipe.title.toLowerCase().replace(/ /gi, '-')
        });
      });
    }
  }
};
</script>
<style lang="scss">
html {
  font-family: "Roboto", sans-serif;
}
#content {
  width: 80%;
  margin: 0 auto;
}
header h2 {
  color: #b22222;
  margin: 1em 0;
}
#recipes a {
  color: #060606;
}
</style>