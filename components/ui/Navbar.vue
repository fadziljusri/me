<template>
  <!-- Navigation bar -->
  <nav class="navbar is-fixed-top" :class="whichTheme">
    <div class="navbar-brand" style="cursor: pointer">
      <nuxt-link
        to="/"
        tag="div"
        @click.native="changeView(true)"
        v-show="showNavBrand"
        class="navbar-item"
      >
        <fa :icon="['far', 'meh-blank']" class="fa-2x" style="margin-right:0.5rem" />
        <span class="title is-4 has-text-white">Fadzil</span>
      </nuxt-link>

      <div ref="burger" class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" ref="navMenu" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="about" tag="a" class="navbar-item" @click.native="changeView()">
          <!-- <span class="icon">
            <fa icon="info" />
          </span> -->
          <span>About</span>
        </nuxt-link>
        <!-- <a class="navbar-item" @click.native="changeView()">
          <span class="icon">
            <fa icon="bars" />
          </span>
          <span>Services</span>
        </a>-->
        <!-- <a class="navbar-item" @click.native="changeView()">
          <span class="icon">
            <fa icon="file-alt" />
          </span>
          <span>Resume</span>
        </a>-->
        <!-- <a class="navbar-item" href="#contact">
          <span class="icon">
            <fa icon="envelope"/>
          </span>
          <span>Contact</span>
        </a>-->
        <!-- <a class="navbar-item" href="https://blog.fadzil.me">
          <span class="icon">
            <fa :icon="['fab','blogger-b']" />
          </span>
          <span>Blog</span>
        </a> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppNavbar",
  created() {
    this.$store.commit("SET_PATH", this.$route.path);
  },
  mounted() {
    let burger = this.$refs.burger;
    let menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });

    const $navbarItems = Array.prototype.slice.call(
      document.querySelectorAll("a.navbar-item"),
      0
    );
    if ($navbarItems.length > 0) {
      $navbarItems.forEach(el => {
        el.addEventListener("click", () => {
          el.removeEventListener("click", function() {});
          burger.click();
        });
      });
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      showNavBrand: state => state.showNavBrand
    }),
    whichTheme() {
      return this.$route.path === '/' ? 'is-link' : 'is-dark';
    }
  },
  methods: {
    changeView(close) {
      if (close) {
        this.$refs.burger.classList.remove('is-active');
        this.$refs.navMenu.classList.remove('is-active');
      }
      this.$store.commit("SET_PATH", this.$route.path);
    }
  }
};
</script>

<style scoped>
a.navbar-item:focus {
  background-color: unset;
  outline: none;
}
</style>
