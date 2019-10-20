<template>
  <section class="hero is-link is-fullheight is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <!-- Hello! I am -->
        <h1 class="title is-1">
          <fa :icon="['far', 'meh']"/> Fadzil Jusri
        </h1>
        <h2 class="subtitle is-3 is-capitalized">Full Stack Developer</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Header"
}
</script>
