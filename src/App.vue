<template>
  <div class="h-screen w-screen overflow-auto bg-s-yello">
    <!-- fast menu -->
    <div class="fixed top-0 z-10">
      <div
        @click="toggleFastMenu"
        id="fastMenuBtn"
        class="fixed flex h-[9.375vw] w-full cursor-pointer items-center justify-center bg-white/20 text-[3.75vw] font-semibold text-white md:h-[36px] md:text-[14.4px]"
      >
        <p class="pointer-events-none text-center">快捷選單</p>
      </div>
    </div>
    <FastMenu
      :isToggle="toggle"
      :details="fastMenuData"
      :closeMenu="closeFastMenu"
    />
    <!-- Header -->
    <HeadBanner />
    <!-- TimeLine -->
    <TimeLine :checkTable="checkTable" />
    <!-- register -->
    <FreshmanRegister
      :registerData="registerData"
      :classSelectData="classSelectData"
    />
    <!-- LINE -->
    <FreshmanLineGroup :lineData="lineGroup" />
    <!-- summer homework -->
    <SummerHomework :summerHomeworkData="summerHomeworkData" />
    <!-- Mattters -->
    <Matters :mattersData="mattersData" />
    <!-- ArriveData -->
    <ArriveDate :arriveData="arriveData" />
    <!-- Publicity -->
    <Publicity :publicityData="publicityData" />
    <!-- School Intro -->
    <SchoolIntro />
    <!-- footer -->
    <div class="w-full bg-[#34559D]">
      <div
        class="flex flex-row content-center items-center justify-center text-white md:justify-evenly md:p-[28px]"
      >
        <div class="py-[18px] text-right text-[3.75vw] md:hidden">
          <p>
            DESIGNED BY<br />
            CREATED BY<br />
            MENTORED BY<br />
            POWERED BY
          </p>
        </div>
        <div class="px-2 text-left text-[3.75vw] md:hidden">
          <p>
            白宜巧 呂昱萱<br />
            林怡均 黃冠霖<br />
            陳晉<br />
            FHSH IT DEPT
          </p>
        </div>
        <div class="hidden flex-row space-x-5 md:flex">
          <div class="text-right">
            <p class="">DESIGNED BY</p>
            <p class="">CREATED BY</p>
          </div>
          <div class="text-left">
            <p class="">白宜巧 呂昱萱</p>
            <p class="">林怡均 黃冠霖</p>
          </div>
        </div>
        <div class="hidden flex-row space-x-5 md:flex">
          <div class="text-right">
            <p class="">MENTORED BY</p>
            <p class="">POWERED BY</p>
          </div>
          <div class="text-left">
            <p class="">陳晉</p>
            <p class="">FHSH IT DEPT</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ad -->
    <!-- <AdModel
      v-if="enCampAd.isOpen"
      :adData="enCampAd"
      :closeModel="closeEnAd"
    />
    <AdModel
      v-if="pyCampAd.isOpen"
      :adData="pyCampAd"
      :closeModel="pyCampAd.closeAd"
    /> -->

    <!-- notice -->
    <AdModel
      v-if="theClubIntro.isOpen"
      :adData="theClubIntro"
      :closeModel="theClubIntro.closeIntro"
    />

    <!-- <NoticeModel :closeModel="theNotice.closeNotice" v-if="theNotice.isOpen">
      <h2 class="text-3xl">{{ theNotice.title }}</h2>
      <p
        v-for="(content, index) in theNotice.contents"
        :key="index"
        class="px-3 text-center text-lg"
      >
        {{ content }}
      </p>
      <a
        href="#matters"
        @click="theNotice.closeNotice"
        class="rounded-md bg-red-600 py-2 px-4 text-white"
      >
        前往區域查看相關說明
      </a>
    </NoticeModel> -->
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import FastMenu from "./components/FastMenu.vue";
import { fastMenuData, mattersData, arriveData } from "./components/Datas.js";
import enCampImg from "./assets/en-camp.jpg";
import pyCampImg from "./assets/pycamp.jpg";
import clubIntro from "./assets/clubs_intro.png";
import HeadBanner from "./components/HeadBanner.vue";
import TimeLine from "./components/TimeLine.vue";
import FreshmanRegister from "./components/FreshmanRegister.vue";
import FreshmanLineGroup from "./components/FreshmanLineGroup.vue";
import SummerHomework from "./components/SummerHomework.vue";
import Matters from "./components/Matters.vue";
import ArriveDate from "./components/ArriveDate.vue";
import Publicity from "./components/Publicity.vue";
import SchoolIntro from "./components/SchoolIntro.vue";
import AdModel from "./components/AdModel.vue";
import NoticeModel from "./components/NoticeModel.vue";
export default {
  setup() {
    const checkTable = reactive({ title: "", link: "" });
    const registerData = reactive({ content: [] });
    const classSelectData = reactive({ title: "", link: "" });
    const lineGroup = reactive({ title: "", link: "" });
    const summerHomeworkData = reactive({ content: [] });
    const publicityData = reactive({ content: [] });

    //社團博覽會
    const theClubIntro = reactive({
      isOpen: true,
      title: "社團博覽會",
      link: "https://sites.google.com/view/fhshstudent/%E9%A6%96%E9%A0%81",
      img: clubIntro,
      closeIntro: () => {
        theClubIntro.isOpen = false;
      },
    });

    // Notice 區塊
    const theNotice = reactive({
      isOpen: true,
      title: "重要推播公告",
      contents: [
        "新生【訂購校服系統】【填寫新生資料校務系統】延至8月15日截止",
        "【普通班體育班新生選課】亦延長",
        "尚未完成新生請速完成(詳見新生專區，下拉至新生應辦選辦事項區)",
      ],
      closeNotice: () => {
        theNotice.isOpen = false;
      },
    });

    /* 廣告區塊
    const enCampAd = reactive({
      title: "2022 線上英語閱讀夏令營",
      link: "https://forms.gle/tN59dbYeruvLa9uJ8",
      img: enCampImg,
      isOpen: true,
    });
    const pyCampAd = reactive({
      title: "Python 基礎訓練課程",
      link: "https://forms.gle/Y3RZVsWBbXAnSfaKA",
      img: pyCampImg,
      isOpen: true,
      closeAd: () => {
        window.sessionStorage.setItem("py", true);
        pyCampAd.isOpen = false;
      },
    });

    const closeEnAd = () => {
      window.sessionStorage.setItem("en", true);
      enCampAd.isOpen = false;
    };
    */

    const toggle = reactive({ is: true });
    const toggleFastMenu = () => {
      toggle.is = !toggle.is;
    };
    const closeFastMenu = () => {
      toggle.is = true;
    };
    onMounted(async () => {
      document.onclick = (e) => {
        if (e.target.id === "fastMenu" || e.target.id === "fastMenuBtn") return;
        closeFastMenu();
      };

      /* 廣告區塊設定
      if (window.sessionStorage.getItem("en")) {
        enCampAd.isOpen = false;
      }
      if (window.sessionStorage.getItem("py")) {
        pyCampAd.isOpen = false;
      }
      */

      const url = new URL(
        "./api/v1/fresh-datas",
        "https://freshman-api.fhsh.tp.edu.tw"
      );
      const res = await fetch(url);
      const docs = await res.json();
      const allDatas = docs.datas;
      // console.log(allDatas);

      checkTable.title = allDatas[1].details[0].title;
      checkTable.link = allDatas[1].details[0].link;

      registerData.content = allDatas[0];
      classSelectData.link = allDatas[1].details[1].link;
      classSelectData.title = allDatas[1].details[1].title;

      lineGroup.link = allDatas[1].details[2].link;
      lineGroup.title = allDatas[1].details[2].title;

      summerHomeworkData.content = allDatas[2];

      const tempMatters = allDatas[3].details;
      let index = 0;
      for (let i = 0; i < mattersData.content.length; i++) {
        if (index >= tempMatters.length) break;
        for (let j = 0; j < mattersData.content[i].length; j++) {
          if (index >= tempMatters.length) break;
          mattersData.content[i][j].link = tempMatters[index].link;
          index += 1;
        }
      }

      const tempArrive = allDatas[4].details;
      for (let i = 0; i < tempArrive.length; i++) {
        arriveData.content[i].link = tempArrive[i].link;
      }

      publicityData.content = allDatas[5].details;
    });
    return {
      toggle,
      checkTable,
      toggleFastMenu,
      closeFastMenu,
      fastMenuData,
      registerData,
      classSelectData,
      lineGroup,
      summerHomeworkData,
      mattersData,
      arriveData,
      publicityData,
      theNotice,
      theClubIntro,
    };
  },
  components: {
    FastMenu,
    HeadBanner,
    TimeLine,
    FreshmanRegister,
    FreshmanLineGroup,
    SummerHomework,
    Matters,
    ArriveDate,
    Publicity,
    SchoolIntro,
    AdModel,
    NoticeModel,
  },
};
</script>
