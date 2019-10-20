<template>
  <div class="buttons social is-centered">
    <a
      href="https://github.com/fadziljusri/"
      target="_blank"
      class="button github is-text is-shadowless"
    >
      <fa :icon="['fab', 'github']" class="fa-2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/fadziljusri/"
      target="_blank"
      class="button linkedin is-text is-shadowless"
    >
      <fa :icon="['fab', 'linkedin']" class="fa-2x" />
    </a>
    <a
      href="https://twitter.com/fadziljusri/"
      target="_blank"
      class="button twitter is-text is-shadowless"
    >
      <fa :icon="['fab', 'twitter']" class="fa-2x" />
    </a>
    <a
      href="https://codetrace.com/users/fadziljusri"
      target="_blank"
      class="button codetrace is-text is-shadowless"
    >
      <fa icon="code" style="font-size:1.5rem;" />
    </a>
  </div>
</template>

<script>
export default {
  name: "AppSocial"
};
</script>

<style scoped>
.button.github {
  color: #24292e;
  background-color: white;
}

.button.twitter {
  color: #55acee;
  background-color: white;
}

.button.linkedin {
  color: #0077b5;
  background-color: white;
}

.button.codetrace {
  color: #823dd0;
  background-color: white;
}
</style>