<template>
  <q-page id="index">
    <div
      class="page-container"
      :style="
        mobile ? 'padding: 24px' : 'padding-left: 96px; padding-right: 96px; '
      "
    >
      <div class="row justify-center">
        <!-- first column -->
        <div
          :class="'column col-md-6 col-lg-6 col-xs-12 col-sm-12'"
          :style="mobile ? ' margin-top: -64px' : ''"
        >
          <Presentation
            style="padding-top: 92px"
            :class="mobile ? 'q-mb-sm' : 'q-mb-xl'"
          />

          <Selector />

          <q-space />

          <SocialMedia
            :style="mobile ? 'margin-bottom: 76px;' : 'margin-bottom: 96px;'"
          />
        </div>

        <!-- second column -->
        <div
          class="col-md-6 col-lg-6 col-sm-12"
          :style="mobile ? '' : 'height: 100vh; ;'"
        >
          <!-- If anyone knows a better way to do this, without repeating code, please let me know. -->
          <q-scroll-area
            ref="scrollArea"
            :style="mobile ? '' : 'height: 100vh; ;'"
            v-if="!mobile"
            @scroll="updateScrollState"
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            class="no-scroll"
          >
            <div :style="`margin-top: ${marginTop}px;`" />

            <About style="margin-bottom: 9rem" />

            <History style="margin-bottom: 9rem" class="position-absolute" />

            <Footer id="footer" style="margin-bottom: 6rem" />
          </q-scroll-area>

          <div v-else>
            <h2 class="text-subtitle1 q-mb-lg text-uppercase" v-if="mobile">
              About
            </h2>

            <About class="q-mb-xl" />

            <h2 class="text-subtitle1 q-mt-xl text-uppercase" v-if="mobile">
              History
            </h2>

            <History class="q-mb-xl" />

            <Footer />
          </div>
        </div>
      </div>
    </div>

    <GlowingCursor style="z-index: 1" />
  </q-page>
</template>

<script>
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import History from "../components/History.vue";
import Presentation from "../components/Presentation.vue";
import Selector from "../components/Selector.vue";
import SocialMedia from "../components/SocialMedia.vue";
import GlowingCursor from "components/GlowingCursor.vue";

import resume from "../resume.json";

export default {
  name: "PageIndex",
  watch: {
    scrollState() {
      // console.log(this.scrollState);
    },
  },
  data() {
    return {
      basics: resume.basics,
      scrollState: 0,
      mobile: this.$q.platform.is.mobile,
      marginTop: 96,
      thumbStyle: {
        opacity: 0.0,
      },
      barStyle: {
        opacity: 0.0,
      },
    };
  },
  components: {
    About,
    Footer,
    GlowingCursor,
    History,
    Presentation,
    Selector,
    SocialMedia,
  },
  methods: {
    updateScrollState(event) {
      const { verticalPosition } = event;

      // console.log(verticalPosition);

      // si me voy de los margenes, no hago nada
      if (verticalPosition < 0) {
        return;
      }

      // si no es entero, no hago nada
      if (!Number.isInteger(verticalPosition)) {
        return;
      }

      this.scrollState = verticalPosition;

      const aboutSection = document.getElementById("about");
      const historySection = document.getElementById("history");

      if (!aboutSection || !historySection) {
        return;
      }

      const aboutSectionTop = aboutSection.offsetTop;
      const historySectionTop = historySection.offsetTop;

      const aboutReached = verticalPosition >= aboutSectionTop;

      if (aboutReached && verticalPosition < historySectionTop) {
        this.$emitter.emit("section-reached", "about");
        return;
      }

      const historyReached = verticalPosition >= historySectionTop;

      if (historyReached) {
        this.$emitter.emit("section-reached", "history");
        return;
      }
    },
    handleScroll(event) {
      if (this.mobile) {
        return;
      }

      const { deltaY } = event;

      const goingUp = deltaY < 0;
      const goingDown = deltaY > 0;

      const scrollArea = this.$refs.scrollArea;

      if (!scrollArea) {
        return;
      }

      const percentage = scrollArea.getScrollPercentage();

      if (goingDown && percentage >= 0.999) {
        return;
      }

      if (goingUp && percentage <= 0) {
        return;
      }

      if (!this.scrollState) this.scrollState = 0;

      this.scrollState += deltaY;

      try {
        scrollArea.setScrollPosition(this.scrollState, 0, 990000);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    document.addEventListener("wheel", (event) => {
      this.handleScroll(event);
    });

    this.$emitter.on("scroll-to-section", (sectionId) => {
      const scrollArea = this.$refs.scrollArea;

      if (!scrollArea) {
        return;
      }

      const section = document.getElementById(sectionId);

      if (!section) {
        return;
      }

      const scrollPosition = scrollArea.getScrollPosition();

      const deltaY = section.offsetTop - scrollPosition;

      if (!this.scrollState) this.scrollState = 0;

      this.scrollState += deltaY;

      this.scrollState -= this.marginTop;

      try {
        scrollArea.setScrollPosition(this.scrollState, 0, 990000);
      } catch (error) {
        console.error(error);
      }
    });
  },
};
</script>

<style>
.page-container {
  max-width: 1280px;
  margin: 0 auto; /* Centrar el contenedor horizontalmente */
}

@media (min-width: 1280px) {
  .page-container {
    max-width: 1280px;
  }
}
</style>
