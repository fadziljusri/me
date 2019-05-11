<template>
  <!-- Contact -->
  <section class="section" id="contact">
    <div class="section-heading is-marginless-bottom has-text-centered">
      <h3 class="title is-2 has-text-white">Contact</h3>
    </div>
    <br>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name">
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <fa icon="envelope"/>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Message"></textarea>
            </div>
          </div>

          <div class="field is-grouped has-text-centered">
            <div class="control">
              <button class="button is-link">
                <span class="icon">
                  <fa icon="envelope"/>
                </span>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>

