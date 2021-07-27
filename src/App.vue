<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img
          class="logo animate__animated animate__bounceInDown"
          alt="Vue logo"
          src="./assets/logo.png"
        />
        <img
          class="logo animate__animated animate__bounceInDown"
          alt="Vue logo"
          src="./assets/bootstrap-logo.svg"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h1 class="animate__animated animate__bounceInLeft">
          To-do List with Composition API
        </h1>
        <p class="animate__animated animate__bounceIn">
          Powered by
          <a target="_blank" href="https://v3.vuejs.org/guide/introduction.html"
            >Vue.Js 3</a
          >
          +
          <a target="_blank" href="https://next.router.vuejs.org/guide/"
            >Vue Router 4</a
          >
          &
          <a
            target="_blank"
            href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
            >Bootstrap 5</a
          >
        </p>
      </div>
    </div>
    <hr />

    <div class="row">
      <div class="col-sm-12">
        <ul
          class="
            nav
            justify-content-center
            animate__animated animate__bounceInRight
          "
          style="font-size: 1.3rem"
        >
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo">Todo App</router-link>
          </li>
          <li class="nav-item">
            <!-- named routes -->
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
        </ul>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <transition 
          enter-active-class="animate__animated animate__bounceInLeft animate__faster"
        >
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img.logo {
  width: 128px;
}




</style>
