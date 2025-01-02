<template>
  <q-layout view="hHh lpR fff">
    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="animationTime"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      animationTime: 300,
    };
  },
};
</script>
