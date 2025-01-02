<template>
  <div v-if="!mobile" class="glow-wrapper">
    <div class="glow-background" ref="glow"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlowingCursor",
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    this.checkIfMobile();
    document.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    checkIfMobile() {
      this.mobile = this.$q.platform.is.mobile;

      if (this.mobile) {
        return true;
      }
    },
    handleMouseMove(e) {
      const glow = this.$refs.glow;

      if (!glow) {
        return;
      }

      let { clientX: x, clientY: y } = e;

      glow.style.transform = `translate(${x}px, ${y}px)`;
    },
  },
};
</script>

<style scoped>
.glow-wrapper {
  position: relative;
}

.glow-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.glow-background::before {
  content: "";
  position: fixed;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(
    circle,
    rgba(51, 49, 123, 0.7) 0%,
    rgba(51, 18, 38, 0) 67%
  );
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}

.content span {
  position: relative;
  display: inline-block;
}

.content span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;
  mix-blend-mode: lighten;
  opacity: 0;
  transition: opacity 0.3s;
}

.glow-wrapper:hover .content span::before {
  opacity: 1;
}
</style>
