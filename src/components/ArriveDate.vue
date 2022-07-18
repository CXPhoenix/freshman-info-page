<template>
  <div
    id="arrive-date"
    class="flex w-full flex-col items-center bg-[#E8C541] pt-[20px] pb-[50px]"
  >
    <div class="pointer-events-none w-[87.5vw] md:w-[336px]">
      <img :src="title" alt="" class="w-full" />
    </div>
    <div class="h-[24px]"></div>
    <div
      class="grid grid-cols-1 gap-y-5 gap-x-10 text-[6.25vw] font-semibold text-white md:grid-cols-2 md:text-[24px] lg:grid-cols-3"
    >
      <a
        v-for="date in arriveData.content"
        :href="date.link ? date.link : null"
        :key="date.id"
        :id="date.id"
        class="flex h-[31.25vw] w-[68.75vw] cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#EC6261] text-center md:h-[120px] md:w-[264px] md:leading-[28.8px] md:hover:border-[5px] md:hover:border-white"
      >
        <p v-html="date.title"></p>
        <p v-html="date.title2"></p>
        <p v-html="date.time"></p>
      </a>
    </div>
  </div>
</template>

<script>
import title from "../assets/date.png";
export default {
  props: { arriveData: Object },
  setup(props) {
    const { arriveData } = props;
    return { arriveData, title };
  },
};
</script>

<style lang="scss" scoped></style>
