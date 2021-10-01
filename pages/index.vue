<template>
  <section class="has-background-dark has-text-white">
    <client-only>
      <navbar />
    </client-only>

    <nuxt-child />

    <app-footer v-show="hasFooter" />
  </section>
</template>

<script>
// import Vue from 'vue';
// Vue.prototype.$multiwatch = function (props, watcher) {
//   var iterator = function(prop) {
//     this.$watch(prop, watcher);
//   };
//   props.forEach(iterator, this);
// }

import Navbar from "~/components/ui/Navbar";
import AppFooter from "~/components/ui/Footer";
export default {
  components: {
    Navbar,
    AppFooter
  },
  computed: {
    hasFooter() {
      return this.$route.path !== '/';
    }
  }
};
</script>

<style>
body {
  font-family: "Titillium Web", sans-serif;
}

.is-marginless-bottom {
  margin-bottom: 0 !important;
}

.card-content h3 {
  text-align: center;
}
</style>

