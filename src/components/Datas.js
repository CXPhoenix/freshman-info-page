import { reactive } from "vue";
const fastMenuData = [
  {
    link: "#timeline",
    id: "l1",
    title: "新生入學時程表",
  },
  {
    link: "#register",
    id: "l2",
    title: "新生線上報到",
  },
  {
    link: "#line",
    id: "l4",
    title: "高一家長Line@群組",
  },
  {
    link: "#homework",
    id: "l5",
    title: "新生暑假作業",
  },
  {
    link: "#matters",
    id: "l6",
    title: "新生應辦及選辦事項",
  },
  {
    link: "#arrive-date",
    id: "l7",
    title: "新生實體到校日期",
  },
  {
    link: "#publicity",
    id: "l8",
    title: "新生其他宣導事項",
  },
  {
    link: "#profile",
    id: "l9",
    title: "學校簡介",
  },
];

const isAnnounce = (announceTime) => {
  const sec = new Date(announceTime).getTime();
  return new Date().getTime() > sec;
};

const isExpired = (expiredTime) => {
  const sec = new Date(expiredTime).getTime();
  return new Date().getTime() > sec;
};

const mattersData = reactive({
  content: [
    [
      {
        link: "",
        id: "m1-1",
        title: "新生線上訂購校服<br>(7/21鏈結飛宇系統)",
      },
      {
        link: "",
        id: "m1-2",
        title: "新生線上訂購校服流程說明",
      },
      {
        link: "",
        id: "m1-3",
        title: "復興新生校服介紹",
      },
    ],
    [
      {
        link: "",
        id: "m2-1",
        title: "新生填寫資料<br>(7/21鏈結校務系統)",
      },
      {
        link: "",
        id: "m2-2",
        title: "校務系統新生填寫應備<br>資料說明",
      },
      {
        link: "",
        id: "m2-3",
        title: "校務系統高一多元選修<br>選課說明",
      },
      {
        link: "",
        id: "m2-4",
        title: "學生受款帳戶登記說明",
      },
      {
        link: "",
        id: "m2-5",
        title: "教育部12年國教<br>免學費補助查調說明",
      },
      {
        link: "",
        id: "m2-6",
        title: "數位學生證整合服務說明",
      },
    ],
    [
      {
        link: "",
        id: "m3-1",
        title: "學雜費減免申請(7/21鏈結校務系統)",
      },
      {
        link: "",
        id: "m3-2",
        title: "學雜費減免申請說明",
      },
    ],

    [
      // {
      //   link: "",
      //   id: "m4-1",
      //   title: "就學貸款申請鏈結表單",
      // },
      {
        link: "",
        id: "m4-2",
        title: "就學貸款申請說明",
      },
    ],
    [
      {
        link: "",
        id: "m5-1",
        title: "學生住宿申請鏈結表單",
      },
      {
        link: "",
        id: "m5-2",
        title: "學生住宿申請說明",
      },
    ],
  ],
});

const arriveData = reactive({
  content: [
    {
      link: "",
      id: "d1",
      title: "高一編班座號學號",
      time: "(8/19公告)",
    },
    {
      link: "",
      id: "d2",
      title: "新生住宿名單",
      time: "(8/19 16:00公告)",
    },
    {
      link: "",
      id: "d3",
      title: "新生始業輔導",
      title2: "實施計畫",
      time: "(8/16公告)",
    },
    {
      link: "",
      id: "d4",
      title: "新生始業輔導手冊",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d5",
      title: "開學日實施計畫",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d6",
      title: "學生開學日",
      title2: "領取教科書",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d7",
      title: "新生開學日",
      title2: "領取校服",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d8",
      title: "110-1學期行事曆",
      time: "(8/24公告)",
    },
    {
      link: "",
      id: "d9",
      title: "學生信箱與",
      title2: "單一身分帳號",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d10",
      title: "學生家長",
      title2: "校務行政系統說明",
      time: "(8/23公告)",
    },
    {
      link: "",
      id: "d11",
      title: "校園繳費系統",
      title2: "親子身分綁定",
      time: "(8/23公告)",
    },
  ],
});

export { fastMenuData, isAnnounce, isExpired, mattersData, arriveData };
