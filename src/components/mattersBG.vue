<template>
  <div class="relative">
    <div
      class="absolute left-[10px] top-[10px] h-[25vw] w-[62.5vw] bg-[#E8C541] md:h-[96px] md:w-[240px]"
    ></div>
    <div
      class="absolute flex h-[25vw] w-[62.5vw] items-center justify-center border-2 border-black bg-white text-center text-[6.25vw] font-bold md:h-[96px] md:w-[240px] md:text-[24px] md:leading-[28.8px]"
    >
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },

  setup(props) {
    const { title } = props;
    return {
      title,
    };
  },
};
</script>
