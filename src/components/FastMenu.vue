<template>
  <div
    id="fastMenu"
    class="fixed z-50 flex max-h-screen w-[62.5vw] flex-col items-center overflow-auto bg-[#34559D] p-[18px] duration-200 md:w-[240px]"
    :class="{ '-translate-x-[62.5vw]': isToggle.is }"
  >
    <div class="pointer-events-none w-[37.5vw] md:w-[144px]">
      <img :src="fac" alt="快速選單" />
    </div>
    <div class="h-[15px]"></div>
    <ul
      class="w-[48.125vw] text-[3.75vw] font-semibold text-white md:w-[184.8px] md:text-[14.4px]"
    >
      <li>
        <a
          v-for="list in details"
          :href="list.link"
          :key="list.id"
          @click="closeMenu"
          class="mb-2 flex h-[10vw] items-center justify-center rounded-[5px] bg-[#EC6261] md:h-[38.4px]"
          >{{ list.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import fac from "../assets/Freshmen-area-content.png";
export default {
  props: {
    details: Array,
    isToggle: Object,
    closeMenu: Function,
  },
  setup(props) {
    const { details, isToggle, closeMenu } = props;
    return {
      details,
      isToggle,
      fac,
      closeMenu,
    };
  },
};
</script>

<style lang="scss" scoped></style>
