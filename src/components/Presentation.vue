<template>
  <div class="full-width">
    <div class="q-mb-xs">
      <a class="title text-h2 cursor-pointer" href="#about">
        {{ basics.name }}
      </a>
    </div>

    <div class="subtitle q-mb-md">
      {{ basics.label }}
    </div>

    <p class="text-basic-summary">
      {{ basics.summary }}
    </p>
  </div>
</template>

<script>
import resume from "./../resume.json";

export default {
  name: "Presentation",
  data() {
    return {
      basics: resume.basics,
    };
  },
  methods: {
    focusFirstSection() {
      this.$emitter.emit("section-reached", "about");
      this.$emitter.emit("scroll-to-section", "about");
    },
  },
};
</script>

<style scoped>
.text-basic-summary {
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
}
</style>
