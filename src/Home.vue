<template>
  <section id="recipes">
    <v-row>
      <v-col v-for="(recipe,i) in recipes" :key="i" class="recipe col-4">
        <v-card raised tile>
          <router-link :to="recipe.slug" class="recipe-link">
            <v-img :src="recipe.img" :alt="recipe.title" class="recipe-img align-end">
              <v-card-title v-html="recipe.title"></v-card-title>
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.recipe {
  .recipe-link {
    text-decoration: none;
  }
  .v-card__title {
    background-color: rgba(245, 245, 255, 0.7);
    word-break: break-word;
  }
  .recipe-img {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  // .recipe {
  //   width: 100%;
  // }
}
</style>