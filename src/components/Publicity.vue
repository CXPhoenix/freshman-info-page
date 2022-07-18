<template>
  <div
    id="publicity"
    class="flex w-full flex-col items-center bg-[#34559D] pt-[10px]"
  >
    <div class="pointer-events-none w-[84.375vw] md:w-[324px]">
      <img :src="title" alt="" class="w-full" />
    </div>
    <div class="h-[26px]"></div>
    <div
      class="grid grid-cols-2 gap-x-[4.687vw] gap-y-[25vw] md:grid-cols-3 md:gap-x-[18px] md:gap-y-[81px] lg:grid-cols-4"
    >
      <a
        v-for="(pub, index) in publicityData.content"
        target="_blank"
        :href="pub.link"
        :key="index"
        class="group w-[42.187vw] text-center md:w-[221px] md:hover:w-[206px] md:hover:scale-110"
      >
        <div class="relative">
          <div
            class="absolute top-[10px] right-0 h-[12.5vw] w-[40.625vw] rounded-full bg-[#E8C541] md:h-[48px] md:w-[200px] md:group-hover:shadow-[0_0_15px_#fff]"
          ></div>
          <div
            class="absolute left-0 top-0 flex h-[12.5vw] w-[40.625vw] items-center justify-center rounded-full bg-white p-4 md:h-[48px] md:w-[200px]"
          >
            <p
              v-html="pub.title"
              class="text-[3.75vw] font-bold leading-[4.5vw] md:text-[14.4px] md:leading-[17.3px] md:group-hover:text-[17px]"
            ></p>
          </div>
        </div>
      </a>
    </div>
    <div class="h-[14vw]"></div>
    <div class="w-full">
      <img :src="bg" alt="" class="w-full" />
    </div>
  </div>
</template>

<script>
import title from "../assets/Publicity-matters.png";
import bg from "../assets/Background4.png";
export default {
  props: { publicityData: Object },
  setup(props) {
    const { publicityData } = props;
    return { title, bg, publicityData };
  },
};
</script>

<style lang="scss" scoped></style>
