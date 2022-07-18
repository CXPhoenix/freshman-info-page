<template>
  <div class="relative">
    <div
      class="absolute top-[10px] right-0 h-[12.5vw] w-[40.625vw] rounded-full bg-[#E8C541] md:h-[48px] md:w-[200px] md:group-hover:shadow-[0_0_15px_#fff]"
    ></div>
    <div
      class="absolute left-0 top-0 flex h-[12.5vw] w-[40.625vw] items-center justify-center rounded-full bg-white md:h-[48px] md:w-[200px]"
    >
      <p
        v-html="name"
        class="text-[3.75vw] font-bold leading-[4.5vw] md:text-[14.4px] md:leading-[17.3px] md:group-hover:text-[17px]"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  setup(props) {
    const { name } = props;
    return { name };
  },
};
</script>
