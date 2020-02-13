<template>
  <section class="has-background-dark has-text-white">
    <client-only>
      <navbar />
    </client-only>

    <nuxt-child keep-alive />

    <app-footer v-show="path !== '/'" />
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

import { mapState } from "vuex";

import Navbar from "~/components/ui/Navbar";
import AppFooter from "~/components/ui/Footer";
export default {
  components: {
    Navbar,
    AppFooter
  },
  computed: {
    ...mapState({
      path: state => state.path
    })
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

