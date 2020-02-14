<template>
  <section class="hero is-link is-fullheight is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-left">
        <h1 class="title is-1">
          <fa :icon="['far', 'meh-blank']" style="margin-right:0.5rem;" />Fadzil Jusri
        </h1>
        <h2 class="subtitle is-3" style="margin-top:1rem;">
          <b>Full-Stack Developer</b> from Malaysia
        </h2>

        <p>
          <nuxt-link
            to="/about"
            tag="a"
            @click.native="setPath('/about')"
            class="button is-medium is-default is-outlined has-text-weight-semibold"
            style="border-radius:13px;"
          >
          About
          <fa icon="angle-double-right" style="margin-left:0.5em"/>
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  methods: {
    setPath(path) {
      this.$store.commit("SET_PATH", path);
    }
  }
};
</script>
