<template>
  <div
    id="register"
    class="flex w-full flex-col items-center bg-[#EC6261] pb-16"
  >
    <div class="w-3/4 max-w-sm">
      <img :src="titleImg" alt="" />
    </div>
    <div
      class="grid grid-rows-3 place-items-center gap-y-[12px] bg-inherit md:grid-flow-col md:grid-rows-2 md:gap-y-0 md:gap-x-[100px] md:border-[10px] md:border-[#D85756] md:bg-[#E8C541] md:p-5"
    >
      <p
        class="text-[6.25vw] font-semibold text-[#34559D] md:row-span-1 md:text-[24px] md:leading-[28.8px]"
      >
        !!!新生請先線上報到!!!
      </p>
      <p
        class="text-[4.687vw] font-semibold text-white md:order-3 md:row-span-2 md:text-[18px] md:leading-[28.8px] md:text-[#34559D]"
      >
        (1)查詢錄取名單(報到編號)<br />(2)線上報到、上傳畢證、本土語文選課
      </p>
      <p
        class="text-center text-[6.25vw] font-semibold text-[#34559D] md:row-span-1 md:place-self-start md:text-left md:text-[24px] md:leading-[28.8px]"
      >
        逾期未報到<br />
        視同放棄錄取資格
      </p>
    </div>
    <div
      class="mt-5 grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-3 md:gap-3"
    >
      <a
        v-for="(check, index) in registerData.content.details"
        target="_blank"
        :href="isAnnounce(check.announceTime) ? check.link : null"
        :key="index"
        @click="
          !isAnnounce(check.announceTime)
            ? () => {
                return;
              }
            : showModel
        "
        class="relative flex h-[62.5vw] w-[62.5vw] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#34559D] p-2 text-center text-[6vw] font-semibold leading-[7vw] md:h-[240px] md:w-[240px] md:text-[20px] md:leading-[28.8px] md:hover:border-[5px] md:hover:border-white"
      >
        <p class="text-white">{{ check.title }}</p>
        <p class="text-sm text-s-red">
          開始時間: {{ check.announceTime.split("T").join(" ") }}
        </p>
        <p class="text-sm text-white">
          結束時間: {{ check.expiredTime.split("T").join(" ") }}
        </p>
        <!-- <p class="pointer-events-none text-[#EC6261]" v-html="check.time"></p>
        <p class="pointer-events-none text-white" v-html="check.title2"></p>
        <p class="pointer-events-none text-[#EC6261]" v-html="check.time2"></p> -->
        <div
          class="absolute inset-0 flex h-full w-full items-center justify-center rounded-[20px] bg-black/70 text-white"
          :class="{ hidden: !isExpired(check.expiredTime) }"
        >
          <span class="rotate-[-20deg]">時間超過囉!</span>
        </div>
      </a>
    </div>
    <div class="h-5 md:h-10"></div>
    <div class="w-full space-y-7 text-center">
      <a
        :href="classSelectData.link"
        target="_blank"
        class="mx-auto flex h-[15.625vw] w-[87.5vw] items-center justify-center rounded-xl bg-[#E8C541] text-[6.25vw] font-semibold text-white md:h-[80px] md:w-3/4 md:text-[24px] md:hover:border-[5px] md:hover:border-white"
      >
        <p>{{ classSelectData.title }}</p>
      </a>
    </div>
    <div class="h-7 md:h-14"></div>
    <AlertModel v-if="show.is" :closeModel="closeModel"
      >還沒發布喔！</AlertModel
    >
  </div>
</template>

<script>
import titleImg from "../assets/Online-registration-for-new-students.png";
import { reactive } from "vue";
import { isAnnounce, isExpired } from "./Datas.js";
import AlertModel from "./AlertModel.vue";
export default {
  props: {
    registerData: Object,
    classSelectData: Object,
  },
  setup(props) {
    const { registerData, classSelectData } = props;
    const show = reactive({ is: false });
    const showModel = () => {
      show.is = true;
    };
    const closeModel = () => {
      show.is = false;
    };
    return {
      titleImg,
      registerData,
      classSelectData,
      isAnnounce,
      isExpired,
      show,
      showModel,
      closeModel,
    };
  },
  components: { AlertModel },
};
</script>

<style lang="scss" scoped></style>
