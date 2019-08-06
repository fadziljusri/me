<template>
  <!-- Navigation bar -->
  <nav class="navbar is-link is-fixed-top">
    <div class="navbar-brand">
      <div v-show="showNavBrand" class="navbar-item">
        <fa :icon="['far', 'meh']" class="fa-2x" style="margin-right:0.5rem" />
        <span class="title is-4 has-text-white">Fadzil</span>
      </div>

      <div ref="burger" class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" @click="intoView('about')">
          <span class="icon">
            <fa icon="info" />
          </span>
          <span>About</span>
        </a>
        <a class="navbar-item" @click="intoView('services')">
          <span class="icon">
            <fa icon="bars" />
          </span>
          <span>Services</span>
        </a>
        <a class="navbar-item" @click="intoView('resume')">
          <span class="icon">
            <fa icon="file-alt" />
          </span>
          <span>Resume</span>
        </a>
        <!-- <a class="navbar-item" href="#contact">
          <span class="icon">
            <fa icon="envelope"/>
          </span>
          <span>Contact</span>
        </a>-->
        <a class="navbar-item" href="https://blog.fadzil.me">
          <span class="icon">
            <fa :icon="['fab','blogger-b']" />
          </span>
          <span>Blog</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      showNavBrand: window.pageYOffset + 50 > window.innerHeight
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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
  methods: {
    intoView(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
    handleScroll(event) {
      this.showNavBrand = window.pageYOffset + 50 > window.innerHeight;
    }
  }
};
</script>