<template>
  <div id="homework" class="flex w-full flex-col items-center bg-[#e8c541]">
    <div class="w-[59.275vw] md:w-[288px]">
      <img :src="title" class="" alt="新生暑假作業" />
    </div>
    <div
      class="flex w-full flex-col items-center space-y-[29.29px] py-4 md:flex-row md:justify-evenly md:space-y-0"
    >
      <a
        v-for="(data, index) in summerHomeworkData.content.details"
        :key="index"
        :href="data.link"
        target="_blank"
        class="flex w-[31.25vw] items-center justify-center md:w-[120px] md:hover:scale-110"
      >
        <img :src="books[index]" class="" alt="作業說明" />
      </a>
      <!-- <a
        :href="datas[2].details[0].link"
        target="_blank"
        class="flex w-[31.25vw] items-center justify-center md:w-[120px] md:hover:scale-110"
      >
        <img src="../public/assets/book1.png" class="" alt="作業說明" />
      </a>
      <a
        :href="datas[2].details[1].link"
        target="_blank"
        class="flex w-[31.25vw] items-center justify-center md:w-[120px] md:hover:scale-110"
      >
        <img src="../public/assets/book2.png" class="" alt="暑假作業" />
      </a>
      <a
        :href="datas[2].details[2].link"
        target="_blank"
        class="flex w-[31.25vw] items-center justify-center md:w-[120px] md:hover:scale-110"
      >
        <img src="../public/assets/book3.png" class="" alt="銜接教材" />
      </a> -->
    </div>
    <div class="w-full">
      <img :src="bg" class="" id="" />
    </div>
  </div>
</template>

<script>
import title from "../assets/Summer-homework-for-freshmen.png";
import b1 from "../assets/book1.png";
import b2 from "../assets/book2.png";
import b3 from "../assets/book3.png";
import bg from "../assets/Background3.jpeg";
export default {
  props: {
    summerHomeworkData: Object,
  },
  setup(props) {
    const { summerHomeworkData } = props;
    const books = [b1, b2, b3];
    return { title, books, bg, summerHomeworkData };
  },
};
</script>

<style lang="scss" scoped></style>
