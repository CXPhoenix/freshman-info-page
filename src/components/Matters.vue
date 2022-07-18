<template>
  <div
    id="matters"
    class="relative flex w-full flex-col items-center bg-[#34559D] py-5"
  >
    <div class="w-[81.25vw] md:w-[312px]">
      <img :src="title" class="w-full" alt="" />
    </div>
    <div class="h-8"></div>
    <div
      class="grid grid-cols-1 justify-center gap-y-8 md:grid-flow-col md:grid-rows-3 lg:grid-rows-2"
    >
      <div class="w-[71.875vw] md:row-span-1 md:w-[276px]">
        <div class="relative">
          <div
            class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
          ></div>
          <div
            class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
          >
            <p>線上訂購校服<br />(超商繳費)</p>
          </div>
        </div>
        <div class="h-[30vw] md:h-[115px]"></div>
        <ul
          class="mt-5 flex cursor-pointer list-disc flex-col gap-y-3 pl-7 text-[5vw] font-semibold text-white md:text-[19.2px] md:leading-[28.8px]"
        >
          <a
            :href="matter.link ? matter.link : null"
            :key="matter.id"
            target="_blank"
            v-for="matter in mattersData.content[0]"
          >
            <li v-html="matter.title" class="md:hover:text-[20px]"></li>
          </a>
        </ul>
      </div>
      <div class="w-[71.875vw] md:row-span-2 md:w-[276px] lg:order-last">
        <div class="relative">
          <div
            class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
          ></div>
          <div
            class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
          >
            <p>校務系統<br />新生填寫資料</p>
          </div>
        </div>
        <div class="h-[30vw] md:h-[115px]"></div>
        <ul
          class="mt-5 flex cursor-pointer list-disc flex-col gap-y-3 pl-7 text-[5vw] font-semibold text-white md:text-[19.2px] md:leading-[28.8px]"
        >
          <a
            :href="matter.link ? matter.link : null"
            :key="matter.id"
            target="_blank"
            v-for="matter in mattersData.content[1]"
          >
            <li v-html="matter.title" class="md:hover:text-[20px]"></li>
          </a>
        </ul>
      </div>
      <div class="w-[71.875vw] md:row-span-1 md:w-[276px]">
        <div class="relative">
          <div
            class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
          ></div>
          <div
            class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
          >
            <p>學雜費減免申請<br />(選辦)</p>
          </div>
        </div>
        <div class="h-[30vw] md:h-[115px]"></div>
        <ul
          class="mt-5 flex cursor-pointer list-disc flex-col gap-y-3 pl-7 text-[5vw] font-semibold text-white md:text-[19.2px] md:leading-[28.8px]"
        >
          <a
            :href="matter.link ? matter.link : null"
            :key="matter.id"
            target="_blank"
            v-for="matter in mattersData.content[2]"
          >
            <li v-html="matter.title" class="md:hover:text-[20px]"></li>
          </a>
        </ul>
      </div>
      <div class="w-[71.875vw] md:row-span-1 md:w-[276px]">
        <div class="relative">
          <div
            class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
          ></div>
          <div
            class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
          >
            <p>就學貸款申請<br />(選辦)</p>
          </div>
        </div>
        <div class="h-[30vw] md:h-[115px]"></div>
        <ul
          class="mt-5 flex cursor-pointer list-disc flex-col gap-y-3 pl-7 text-[5vw] font-semibold text-white md:text-[19.2px] md:leading-[28.8px]"
        >
          <a
            :href="matter.link ? matter.link : null"
            :key="matter.id"
            target="_blank"
            v-for="matter in mattersData.content[3]"
          >
            <li v-html="matter.title" class="md:hover:text-[20px]"></li>
          </a>
        </ul>
      </div>
      <div
        class="w-[71.875vw] md:row-span-1 md:w-[276px] md:-translate-y-[50px] lg:translate-y-[0px]"
      >
        <div class="relative">
          <div
            class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
          ></div>
          <div
            class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
          >
            <p>學生住宿申請<br />(選辦)</p>
          </div>
        </div>
        <div class="h-[30vw] md:h-[115px]"></div>
        <ul
          class="mt-5 flex cursor-pointer list-disc flex-col gap-y-3 pl-7 text-[5vw] font-semibold text-white md:text-[19.2px] md:leading-[28.8px]"
        >
          <a
            :href="matter.link ? matter.link : null"
            :key="matter.id"
            target="_blank"
            v-for="matter in mattersData.content[4]"
          >
            <li v-html="matter.title" class="md:hover:text-[20px]"></li>
          </a>
        </ul>
      </div>
    </div>
    <div class="w-full place-items-start pt-3 md:pt-0">
      <div class="w-[59.375vw] md:w-[288px]">
        <img :src="boy" alt="boy" />
      </div>
    </div>
  </div>
</template>

<script>
import title from "../assets/Freshmen-should-do.png";
import boy from "../assets/boy.png";
export default {
  props: {
    mattersData: Object,
  },
  setup(props) {
    const { mattersData } = props;

    return {
      title,
      boy,
      mattersData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
