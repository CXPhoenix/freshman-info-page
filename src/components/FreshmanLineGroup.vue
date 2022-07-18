<template>
  <div class="relative w-full bg-[#EC6261] pt-5">
    <div
      class="absolute left-0 bottom-28 w-[28.125vw] md:w-[216px] lg:left-16 lg:bottom-52"
    >
      <img :src="gril" alt="gril" />
    </div>
    <div class="h-20 md:h-10"></div>
    <div
      id="line"
      class="flex w-full items-center justify-center bg-[#EC6261] pb-6 pt-10"
    >
      <a
        :href="lineData.link"
        target="_blank"
        class="z-10 w-[67.812vw] rounded-[10px] border-[3px] border-white bg-[#009A35] py-2 text-center text-[5vw] font-semibold text-white md:w-[660px] md:py-2 md:text-[19.2px] md:hover:shadow-[0_0_15px_#fff]"
      >
        <p class="pointer-events-none">高一家長LINE@群組</p>
      </a>
    </div>
    <div class="w-full">
      <img :src="bg" alt="" />
    </div>
  </div>
</template>

<script>
import gril from "../assets/girl.png";
import bg from "../assets/Background2.jpeg";
export default {
  props: {
    lineData: Object,
  },
  setup(props) {
    const { lineData } = props;
    return { gril, lineData, bg };
  },
};
</script>
