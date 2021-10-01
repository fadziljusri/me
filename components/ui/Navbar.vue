<template>
  <!-- Navigation bar -->
  <nav class="navbar is-fixed-top" :class="whichTheme">
    <div class="navbar-brand" style="cursor: pointer">
      <!-- <nuxt-link
        to="/"
        tag="div"
        @click.native="changeView(true)"
        class="navbar-item"
      >
        <fa :icon="['far', 'meh-blank']" class="fa-2x" style="margin-right:0.5rem" />
        <span class="title is-4 has-text-white">Fadzil</span>
      </nuxt-link> -->

      <div ref="burger" class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" ref="navMenu" class="navbar-menu">
      <div class="navbar-start" style="justify-content: center; margin: auto;">
        <nuxt-link 
          v-for="(i, index) in navItems" 
          :key="index" 
          :to="i.to" 
          tag="a" 
          class="navbar-item has-text-centered"
          :class="{'is-active': i.to === location.pathname }"
          @click.native="changeView()"
        >
          <span>{{ i.label }}</span>
        </nuxt-link>
        <a 
          ref="resume"
          class="navbar-item has-text-centered" 
          href="https://drive.google.com/file/d/0B74ktrbYaAtobExsWTljZEtZYmM/view" 
          target="_blank" 
          @click="changeView()"
        >
          <span>
            Resume
            <!-- <sup>
              <fa
                icon="external-link-alt"
                style="font-size:0.6rem;"
              />
            </sup> -->
          </span>
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
      navItems: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
      ],
      location: location,
      mobileMenuOpen: false,
    }
  },
  mounted() {
    const _this = this;
    let burger = this.$refs.burger;
    let menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      _this.mobileMenuOpen = !_this.mobileMenuOpen;;
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
          if (screen.width < 1024) burger.click();
        });
      });
    }

    window.addEventListener('resize', function () {
      if (screen.width >= 1024) {
        _this.mobileMenuOpen = false;;
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
      }
    });

    const resume = this.$refs.resume;
    resume.addEventListener("click", function() {
      resume.blur();
    })
  },
  computed: {
    whichTheme() {
      if (this.mobileMenuOpen) return '';
      return this.$route.path === '/' ? 'is-link' : 'is-dark';
    }
  },
  methods: {
    changeView(close) {
      if (screen.width >= 1024) return;
      this.mobileMenuOpen = !close;
      if (close) {
        this.$refs.burger.classList.remove('is-active');
        this.$refs.navMenu.classList.remove('is-active');
      }
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .navbar {
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 25%)
  }
}

a.navbar-item:focus {
  background-color: unset;
  outline: none;
}
</style>
