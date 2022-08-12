<template>
  <div
    class="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
  >
    <div
      class="flex max-h-fit flex-col items-center justify-center gap-10 overflow-auto rounded-lg border-8 border-s-yello bg-white p-4 md:max-w-xl"
    >
      <slot>特別注意</slot>

      <button
        @click="closeModel"
        class="rounded-md bg-s-green py-2 px-4 text-center text-white"
      >
        繼續瀏覽新生專區
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
  props: { closeModel: Function },

  setup(props) {
    const { closeModel } = props;

    return { closeModel };
  },
};
</script>

<style lang="scss" scoped></style>
