<template>
  <div class="scroll-nav" v-if="!mobile">
    <div
      v-for="item in navItems"
      :key="item.id"
      class="cursor-pointer row flex flex-center text-grey-8"
      :class="{ active: selectedSection === item.id }"
      @mouseover="hoveredSection = item.id"
      @mouseleave="hoveredSection = null"
    >
      <span
        :class="[
          'dash',
          {
            expanded: selectedSection === item.id || hoveredSection === item.id,
          },
        ]"
      />

      <a
        :class="[
          'text-uppercase q-ml-sm selector-label',
          {
            'text-bold text-white': selectedSection === item.id,
            'text-grey-8': selectedSection !== item.id,
          },
        ]"
        :href="'#' + item.id"
        style="padding-bottom: 0.75rem; padding-top: 0.75rem"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollNav",
  data() {
    return {
      mobile: this.$q.platform.is.mobile,
      navItems: [
        { id: "about", label: "About" },
        { id: "history", label: "Experience" },
      ],
      selectedSection: "about",
      hoveredSection: null,
    };
  },
  mounted() {
    this.$emitter.on("section-reached", (sectionId) => {
      this.selectedSection = sectionId;
    });
  },
  methods: {
    scrollToSection(sectionId) {
      this.selectedSection = sectionId;
      this.$emitter.emit("scroll-to-section", sectionId);
    },
  },
};
</script>

<style scoped>
.selector-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.q-btn {
  margin: 5px 0;
}

.scroll-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-item-container {
  display: flex;
  align-items: center;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  color: #d1d1d1;
  opacity: 0.8;
}

.nav-item-container:hover,
.nav-item-container.active {
  /* transform: translateX(10px); */
  color: #fff;
  /* // el boton tiene que tener color blanco */
  .nav-btn {
    color: #fff;
  }
}

.dash {
  width: 2rem;
  height: 1px;
  background-color: #8d8d8d;
  margin-right: 10px;
  transition: width 0.1s ease, background-color 0.1s ease;
}

.dash.expanded {
  width: 4rem;
  background-color: #fff;
}

.nav-item-container:hover .dash {
  background-color: #fff;
  color: #fff;
}

.nav-btn {
  transition: color 0.1s ease, background-color 0.1s ease;
}

.nav-btn:hover {
  color: #fff;
  /* background-color: #007bff; */
}
</style>
