<template>
  <div>
    <!-- About -->
    <section class="section" id="about">
      <!-- Title -->
      <div class="section-heading">
        <h3 data-aos="zoom-in" data-aos-duration="600" data-aos-easing="linear" class="title is-2 has-text-white">About Me</h3>
        <!-- <h4 class="subtitle is-5 has-text-light">"IT Geek"</h4> -->
        <p data-aos="zoom-in" data-aos-duration="600" data-aos-easing="linear" style="font-size:1.1em;">
          IT geek with more than
          <strong class="has-text-warning">
            <span>{{years}}</span> years
          </strong> of experience with a degree in the field
          of
          <strong
            class="has-text-warning"
          >Information Technology</strong>, extensive knowledge of modern Web techniques and love for
          <strong
            class="has-text-warning"
          >JavaScript</strong>. Looking for an opportunity to work and upgrade.
        </p>
      </div>

      <div data-aos="flip-left" data-aos-duration="600" data-aos-easing="linear" id="me-box" class="columns is-tablet is-gapless">
        <!-- Profile -->
        <div class="column">
          <div class="card profile">
            <div class="card-content">
              <h3 data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom" class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tbody>
                    <tr>
                      <th colspan="1"></th>
                      <th colspan="2"></th>
                    </tr>
                    <tr>
                      <td data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                        <fa icon="map-marker-alt" style="margin-right:10px;" />
                        <span>Kuala Lumpur, Malaysia</span>
                      </td>
                    </tr>
                    <tr>
                      <td data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                        <fa icon="phone" style="margin-right:10px;" />
                        <a href="tel:+6010-6505576">+6010-6505576</a>
                      </td>
                    </tr>
                    <tr>
                      <td data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                        <fa icon="envelope" style="margin-right:10px;" />
                        <a
                          href="mailto:fadziljusri@gmail.com?Subject=Hi%20Fadzil"
                        >fadziljusri@gmail.com</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figure data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom" class="image is-3by2">
                <img src="~assets/me.jpg" />
              </figure>

              <br />

              <social data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom"/>

              <div data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom" class="resume">
                <a
                  href="https://drive.google.com/file/d/0B74ktrbYaAtobExsWTljZEtZYmM/view"
                  target="_blank"
                  class="button is-link is-medium is-shadowless"
                >
                  <!-- <span class="icon">
                    <fa icon="file-alt" />
                  </span> -->
                  <span style="margin-right:0.5em;">resume.pdf</span>
                  <fa
                    icon="external-link-alt"
                    style="font-size:0.6rem; top:5px; right:5px; position:absolute;"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="column">
          <div class="card skills">
            <div class="card-content skills-content">
              <h3 data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom" class="title is-4">Skills</h3>
              <div class="content skills">
                <article v-for="(i, index) in skills" :key="index" class="media">
                  <div class="media-content">
                    <div class="content">
                      <p data-aos="zoom-in-right" :data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                        <strong>{{i.label}}</strong>
                        <br />
                        <progress class="progress is-success" :value="i.progress" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills tags -->
    <!-- <div class="tags custom-tags">
    <span class="tag is-light">Node.js</span><span class="tag is-light">Express.js</span><span
      class="tag is-light">VueJS</span><span class="tag is-light">JavaScript</span><span
      class="tag is-light">HTML5</span><span class="tag is-light">Canvas</span><span
      class="tag is-light">CSS3</span><span class="tag is-light">Bulma</span><span
      class="tag is-light">Bootstrap</span><span class="tag is-light">jQuery</span><span
      class="tag is-light">Pug</span><span class="tag is-light">Stylus</span><span
      class="tag is-light">SASS/SCSS</span><span class="tag is-light">Webpack</span><span
      class="tag is-light">Git</span><span class="tag is-light">ASP.NET Web Forms</span><span
      class="tag is-light">MSSQL</span><span class="tag is-light">MongoDB</span><span class="tag is-light">Apache
      Cordova</span><span class="tag is-light">Chrome Extensions</span>
    </div>-->

    <!-- Services -->
    <!-- <section class="section" id="services">
      <div class="section-heading">
        <h3 class="title is-2 has-text-white">Services</h3>
        <h4 class="subtitle is-5 has-text-light">What can I do for you?</h4>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5">Front End Web Development</h4>Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript frameworks
              (such as Vue.js)
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5">Back End Web Development</h4>Develop Back End application/service using Flask or Node.js and Firebase or Mongo DB databases.
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <!-- Achievement Level -->
    <!-- <section class="section">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Tweets</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>
    </section>-->

    <!-- <contact-form/> -->
  </div>
</template>

<script>
// import ContactForm from "~/components/ContactForm";
import Social from "~/components/ui/Social";
export default {
  name: "PortfolioContent",
  components: { Social },
  data() {
    return {
      skills: [
        {
          label: 'JavaScript / ECMAScript',
          progress: '80'
        },
        {
          label: 'NodeJS / NestJS',
          progress: '60'
        },
        {
          label: 'Flask',
          progress: '70'
        },
        {
          label: 'Nuxt / Vue.js',
          progress: '70'
        },
        {
          label: 'Angular / AngularJS',
          progress: '70'
        },
        {
          label: 'Ionic Mobile Development',
          progress: '70'
        },
        {
          label: 'MongoDB',
          progress: '75'
        },
        {
          label: 'Firestore / Firebase',
          progress: '75'
        },
        {
          label: 'MySQL',
          progress: '60'
        },
        {
          label: 'Git',
          progress: '80'
        },
        {
          label: 'AWS',
          progress: '30'
        },
        {
          label: 'Tailwindcss',
          progress: '65'
        },
        {
          label: 'Bulma CSS',
          progress: '60'
        },
        {
          label: 'Bootstrap 3/4',
          progress: '55'
        }
      ]
    }
  },
  computed: {
    years() {
      return new Date().getFullYear() - 2010 + 1;
    }
  }
};
</script>

<style scoped>
section.section {
  max-width: 920px;
  margin: auto;
}

#me-box .column {
  display: flex;
}

#me-box .column >.card {
  width: 100%;
}

.card.profile {
  border-radius: 5px 5px 0 0;
}

.card.skills {
  border-radius: 0 0 5px 5px;
}

.resume {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}

.resume a {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

@media only screen and (min-width: 769px) {
  .card.profile {
    border-radius: 5px 0 0 5px;
  }

  .card.skills {
    border-radius: 0 5px 5px 0;
  }
}

.image img {
  border-radius: 5px;
}

.content.skills .media {
  margin-bottom: 0.25rem !important;
}

.table-profile td,
th {
  border: none !important;
}

.table-profile td:first-of-type {
  font-weight: bold;
}

.skills-content .media {
  margin: 0 !important;
  padding: 4px !important;
  border: 0 !important;
}

.skills-content .progress {
  height: 4px !important;
}

.portfolio-container .card {
  margin-bottom: 2em;
}

.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 3em;
}
</style>

