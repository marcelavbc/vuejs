<template>
  <div class="input">
    <input
      type="text"
      placeholder="Type to search"
      @keyup="$event = $store.commit('setInput', $event.target.value)"
      v-model="input"
    />
    <div class="icon-input">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TheSearchBar",
  methods: {
    ...mapGetters(["getSearchInput"]),
    ...mapActions(["SET_INPUT"]),
  },
  computed: {
    input: {
      get() {
        return this.getSearchInput();
      },
      set(newValue) {
        return this.SET_INPUT(newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 1.2rem;
  input {
    width: 100%;
    background-color: rgba(250, 248, 248);
    border: 0;
    outline: none;
    padding: 0.7rem;
    padding-left: 2rem;
    border-radius: 10px;
    @media only screen and (min-width: 768px) {
      padding: 1.2rem 1.2rem 1.2rem 2rem;
      font-size: 1rem;
    }
  }
  .icon-input {
    position: absolute;
    margin-left: 0.5rem;
  }
}
</style>