<template>
  <section class="has-background-dark has-text-white">
    <no-ssr>
      <navbar />
    </no-ssr>
    <app-header />
    <app-content />

    <app-footer />
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
import AppHeader from "~/components/ui/Header";
import AppFooter from "~/components/ui/Footer";
import AppContent from "~/components/views/PortfolioContent";
export default {
  components: {
    Navbar,
    AppHeader,
    AppContent,
    AppFooter
  }
};
</script>

<style>
body {
  font-family: 'Titillium Web', sans-serif;
}

.is-marginless-bottom {
  margin-bottom: 0 !important;
}

.card-content h3 {
  text-align: center;
}
</style>

