<template>
  <div>
    <the-register-form>
      <div class="container">
        <appear :delay="100" :translate="['-100px', 0]">
          <h2>Create Your Account</h2>
        </appear>
        <form @submit.prevent="registerUser">
          <div class="inputs">
            <appear :delay="200" :translate="['100px', 0]">
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              />
            </appear>
            <appear :delay="300" :translate="['100px', 0]">
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
              />
            </appear>
            <appear :delay="400" :translate="['100px', 0]">
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
              />
            </appear>
            <appear :delay="500" :translate="['100px', 0]">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              />
            </appear>
            <appear :delay="600" :translate="['100px', 0]">
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
              />
            </appear>
            <appear :delay="700" :translate="['-100px', 0]">
              <input type="submit" class="btn" value="Sign up" />
            </appear>
          </div>
        </form>
        <appear :delay="900" :translate="[0, '100px']">
          <router-link to="/login" class="link btn"
            >Already have an account?</router-link
          >
        </appear>
      </div>
    </the-register-form>
  </div>
</template>

<script>
import TheRegisterForm from "../components/utils/TheRegisterForm.vue";
export default {
  components: { TheRegisterForm },
  name: "Register",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
      };
      this.$store
        .dispatch("users/register", user)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 4rem;
}
</style>