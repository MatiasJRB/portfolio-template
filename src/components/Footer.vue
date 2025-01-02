<template>
  <div v-html="footer" style="opacity: 0.8; font-size: 13px" />
</template>

<script>
import resume from "../resume.json";
const { footer } = resume;

export default {
  name: "Footer",
  data() {
    return {
      footer,
    };
  },
};
</script>
