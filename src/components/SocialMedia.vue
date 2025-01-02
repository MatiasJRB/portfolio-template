<template>
  <div :class="`row ${behavior}`">
    <div v-for="(profile, index) in profiles" :key="index">
      <q-icon
        :name="profile.icon"
        size="24px"
        @click="handleURL(profile)"
        style="margin-right: 24px"
        :class="[
          'cursor-pointer icon-color',
          {
            mobile,
          },
        ]"
      >
      </q-icon>
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
import resume from "src/resume.json";

export default {
  props: {
    behavior: {
      type: String,
      default: "justify-start",
    },
  },
  data() {
    return {
      profiles: resume.basics.profiles,
      mobile: this.$q.platform.is.mobile,
    };
  },
  methods: {
    handleURL(profile) {
      const { target, url } = profile;

      if (url.includes("https://")) {
        openURL(url);
        return;
      }

      this.$router.push(url);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.icon-color {
  color: #94a3b8;
}
.mobile {
  font-size: 24px;
}

.q-icon {
  transition: color 0.3s;
}

.q-icon:hover {
  color: var(--q-color-accent);
}

.q-btn {
  transition: color 0.3s;
}

.q-btn .q-focus-helper {
  color: #ffffff;
}
</style>
