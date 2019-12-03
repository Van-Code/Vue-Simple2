<template>
  <v-flex row justify-center class="recipe-detail">
    <h1 v-html="recipe.title"></h1>
    <p>
      <strong v-html="recipe.caption"></strong>
    </p>
    <img :src="recipe.img" :alt="recipe.title" />
    <p v-html="recipe.description"></p>
  </v-flex>
</template>
<script>
export default {
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      recipe: ''
    };
  },
  created() {
    this.getRecipe();
  },
  methods: {
    getRecipe: function() {
      const that = this;
      this.recipe = this.recipes.find(
        recipe => recipe.slug === that.$route.params.slug
      );
    }
  }
};
</script>
<style scoped>
.recipe-detail {
  background-color: #fff;
  padding: 2em 3em;
}
</style>