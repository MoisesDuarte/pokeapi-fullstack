<template>
  <main>
    <div class="form-group">
      <input v-model="searchString" type="search">
      <button @click="onSearch">🔎</button>
    </div>
    <ul>
      <span v-if="isLoading">Loading...</span>
      <li v-for="(ability, index) in abilities" :key="index">
        {{ ability }}
      </li>
    </ul>
  </main>
</template>

<script>
import ApiResource from '@/resources/ApiResource';

export default {
  name: 'App',
  data() {
    return {
      searchString: '',
      isLoading: false,
      abilities: [],
    };
  },
  methods: {
    onSearch() {
      this.isLoading = true;
      this.abilities = [];

      ApiResource.getPokemonByName(this.searchString)
        .then(res => this.abilities = res)
        .catch(() => {})
        .finally(() => this.isLoading = false);
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  gap: 4px;
}
</style>
