<template>
  <div id="timeline" class="flex w-full flex-col items-center justify-center">
    <div class="w-3/4 max-w-sm pb-4 md:pb-8">
      <img :src="fas" class="" alt="新生入學時程表" />
    </div>
    <div
      class="flex w-full place-items-center items-center justify-center md:w-3/4"
    >
      <img :src="tmobile" class="mx-auto md:hidden" alt="時程表" />
      <img :src="t" class="hidden md:flex" alt="" />
    </div>
    <div class="w-full pt-10 text-center">
      <a
        :href="checkTable.link"
        target="_blank"
        class="mx-auto flex w-[87.5vw] items-center justify-center rounded-xl bg-[#EC6261] py-5 text-[6.25vw] font-semibold text-white md:h-[80px] md:w-3/4 md:py-10 md:px-20 md:text-[24px] md:hover:border-[5px] md:hover:border-white"
      >
        <p>{{ checkTable.title }}</p>
      </a>
    </div>

    <div class="w-full">
      <img :src="bg" alt="" />
    </div>
  </div>
</template>

<script>
import fas from "../assets/Freshman-Admission-Schedule.png";
import tmobile from "../assets/timeline-phone.png";
import t from "../assets/Timeline.png";
import bg from "../assets/Background1.jpeg";
export default {
  props: {
    checkTable: Object,
  },
  setup(props) {
    const { checkTable } = props;
    return { checkTable, fas, tmobile, t, bg };
  },
};
</script>

<style lang="scss" scoped></style>
