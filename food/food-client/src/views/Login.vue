<template>
  <div>
    <the-form>
      <div class="container">
        <h2>Create Your Account</h2>
        <form @submit.prevent="login(user)">
          <div class="inputs">
            <input
              id="email"
              type="text"
              placeholder="Your email"
              name="email"
              v-model="user.email"
              class="form-control"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              id="password"
              v-model="user.password"
            />
            <p>{{getError}}</p>
            <input type="submit" class="btn" value="Login" />
          </div>
        </form>
        <router-link to="/register" class="link btn"
          >Need an account?</router-link
        >
      </div>
    </the-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      login: "login",
    }),
  },

  computed: {
    ...mapGetters(['getError'])
  }
};
</script>