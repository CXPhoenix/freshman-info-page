<template>
  <div
    class="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black/75 p-4"
  >
    <div class="relative flex w-full items-center justify-center md:max-w-xl">
      <slot></slot>
      <div class="absolute top-4 right-5">
        <span
          class="cursor-pointer text-lg font-bold lg:text-gray-700 lg:hover:text-black"
          @click="closeModel"
        >
          &times;
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { closeModel: Function },
  setup(props) {
    const { closeModel } = props;
    return { closeModel };
  },
};
</script>

<style lang="scss" scoped></style>
