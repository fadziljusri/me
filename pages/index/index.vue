<template>
  <section class="hero is-link is-fullheight is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-left">
        <h1
          data-aos="zoom-out-right"
          data-aos-duration="600"
          class="title is-1"
        >
          <fa :icon="['far', 'meh-blank']" style="margin-right: 0.5rem" />
          <!-- Hi — I'm  -->
          Fadzil Jusri
        </h1>
        <h2
          data-aos="zoom-out-right"
          data-aos-duration="600"
          data-aos-delay="100"
          class="subtitle is-3"
          style="margin-top: 1rem"
        >
          <b>Full-Stack Developer</b> from Malaysia
        </h2>

        <p
          data-aos="zoom-out-right"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <nuxt-link
            to="/about"
            tag="a"
            class="button is-medium is-dark"
          >
            <span class="has-text-weight-bold">About</span>
            <fa icon="angle-double-right" style="margin-left: 0.5em" />
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>