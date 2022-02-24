<template>
  <main>
    <div class="container pt-6">
      <h1 class="title is-1">Pokemon Info Search</h1>

      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            v-model="searchString"
            class="input"
            type="text"
            placeholder="Input a valid pokemon name"
            @keydown.enter="onSearch"
          />
        </div>
        <div class="control">
          <a role="button" class="button is-link px-3" :class="{ 'is-loading': isLoading }" @click="onSearch">
            Busca
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <template v-if="currentPokemon">
            <div class="media">
              <div class="media-left">
                <figure class="image is-24x24">
                  <img :src="currentPokemon.image" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ currentPokemon.name }}</p>
                <p class="subtitle is-6 mb-2">
                  Types: <br>
                  <span v-for="(type, index) in currentPokemon.types" :key="'type_' + index" class="tag is-primary mt-1">
                    {{ type }}
                  </span>
                </p>
                <p class="subtitle is-6 mb-2">
                  Abilities: <br>
                  <span v-for="(ability, index) in currentPokemon.abilities" :key="'ability_' + index" class="tag is-info mt-1 mr-1">
                    {{ ability }}
                  </span>
                </p>
                <p class="subtitle is-6">
                  Games: <br>
                  <span v-for="(game, index) in currentPokemon.gameAppearances" :key="'game_' + index" class="tag is-link mt-1 mr-1">
                    {{ game }}
                  </span>
                </p>
              </div>
            </div>
          </template>

          <template v-if="isLoading">
            Loading current pokemon data...
          </template>

          <template v-if="!currentPokemon && !networkError && !isLoading">
            Search a pokemon and see it's attributes here!
          </template>

          <template v-if="networkError">
            {{ networkError }}
          </template>
        </div>
      </div>
    </div>  
      
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
      currentPokemon: null,
      networkError: null,
    };
  },
  methods: {
    onSearch() {
      this.isLoading = true;
      this.currentPokemon = null;
      this.networkError = null;

      ApiResource.getPokemonByName(this.searchString)
        .then(res => this.currentPokemon = res)
        .catch(() => {
          this.networkError = 'Error fetching pokemon. Please try a new search';
        })
        .finally(() => this.isLoading = false);
    },
  },
};
</script>

<style lang="scss" >
@import '@/assets/main.scss';

.form-group {
  display: flex;
  gap: 4px;
}
</style>
