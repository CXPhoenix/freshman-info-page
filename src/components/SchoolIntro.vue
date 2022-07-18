<template>
  <div id="profile" class="flex w-full flex-col items-center bg-[#EC6261]">
    <div class="flex w-[50vw] items-center justify-center md:w-[192px]">
      <img :src="title" alt="學校簡介" />
    </div>
    <div
      class="item-center grid grid-cols-1 justify-center gap-5 px-[20px] py-5 md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/q5qYnNstpx4"
          title="校長提醒新生的五件事"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="pri"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="校長室"
        />
      </div>
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/fh2W_gLNmLk"
          title="學務處介紹"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="st"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="學務處"
        />
      </div>
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/OIUsy9nOOMo"
          title="教務處介紹"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="edu"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="教務處"
        />
      </div>
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/01ero8fms_4"
          title="110新生圖書館介紹"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="LIB"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="圖書館"
        />
      </div>
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/edvqAHzOGeg"
          title="110輔導室介紹 打開輔導的通關密語"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="con"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="輔導室"
        />
      </div>
      <div class="flex flex-col items-center">
        <iframe
          class="peer w-full md:w-[288px]"
          width="640"
          src="https://www.youtube.com/embed/cMlbD0RmBG0"
          title="110學年度新生 總務處介紹"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          :src="gs"
          class="w-[25vw] md:w-[96px] md:hover:w-[110px] md:peer-hover:w-[110px]"
          alt="總務處"
        />
      </div>
    </div>
  </div>
</template>

<script>
import title from "../assets/School-Profile.png";
import pri from "../assets/Principal-room.png";
import edu from "../assets/Academic-Affairs-Office(1).png";
import st from "../assets/Academic-Affairs-Office.png";
import LIB from "../assets/library.png";
import con from "../assets/Counseling-Room.png";
import gs from "../assets/General-Services.png";

export default {
  setup() {
    return { title, pri, edu, st, LIB, con, gs };
  },
};
</script>

<style lang="scss" scoped></style>
