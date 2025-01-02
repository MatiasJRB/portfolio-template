<template>
  <div class="full-width" id="about">
    <div v-html="about" />
  </div>
</template>

<script>
import resume from "../resume.json";

const {
  basics: { about },
} = resume;

export default {
  name: "About",
  data() {
    return {
      about,
      mobile: this.$q.platform.is.mobile,
    };
  },
};
</script>
