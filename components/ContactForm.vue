<template>
  <!-- Contact -->
  <section class="section" id="contact">
    <div class="section-heading is-marginless-bottom has-text-centered">
      <h3 class="title is-2 has-text-white">Contact</h3>
    </div>
    <br>
    <form
      ref="form"
      action="https://formspree.io/fadziljusri@gmail.com"
      method="POST"
      @submit.stop="submitForm($event)"
    >
      <!-- <form ref="form" @submit.prevent="submitForm($event)"> -->
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  name="Name"
                  v-model="form.name"
                  placeholder="Name"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  name="_replyto"
                  v-model="form.email"
                  placeholder="Email"
                  required
                >
                <span class="icon is-small is-left">
                  <fa icon="envelope"/>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  name="Message"
                  v-model="form.message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped has-text-centered">
              <div class="control">
                <button type="submit" class="button is-link" :disabled="isDisabled">
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
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      isDisabled: true,
      form: {
        email: "",
        name: "",
        message: ""
      }
    };
  },
  created() {
    this.defaultForm = Object.freeze({ ...this.form });
    this.$multiwatch(
      ["form.email", "form.password", "form.message"],
      function() {
        const valid = this.$refs.form.checkValidity();
        this.isDisabled = !valid;
      }
    );
  },
  methods: {
    submitForm(e) {
      e.target.reset();
      this.form = { ...this.defaultForm };
      this.isDisabled = true;
    }
  }
};
</script>

