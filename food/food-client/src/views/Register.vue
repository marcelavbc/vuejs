<template>
  <div>
    <the-form>
      <div class="container">
        <h2>Create Your Account</h2>
        <form @submit.prevent="register(user)">
          <div class="inputs">
            <input
              id="username"
              type="text"
              placeholder="username"
              name="username"
              v-model="user.username"
              class="form-control"
            />
            <input
              id="email"
              type="text"
              placeholder="Email"
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
            <input type="submit" class="btn" value="Sign up" />
          </div>
        </form>
        <router-link to="/login" class="link btn"
          >Already have an account?</router-link
        >
      </div>
    </the-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      register: "register",
    }),
  },

  computed: {
    ...mapGetters(['getError'])
  }
};
</script>

