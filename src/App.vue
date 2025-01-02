<template>
  <div id="q-app" :class="['', { mobile }]">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    mobile() {
      return this.$q.platform.is.mobile;
    },
  },
};
</script>
