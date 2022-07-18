<template>
  <div id="banner">
    <img :src="desktop" alt="封面" class="hidden md:block" />
    <img :src="mobile" alt="封面" class="md:hidden" />
  </div>
</template>

<script>
import desktop from "../assets/computer.jpeg";
import mobile from "../assets/phone.jpeg";
export default {
  setup() {
    return { desktop, mobile };
  },
};
</script>

<style lang="scss" scoped></style>
