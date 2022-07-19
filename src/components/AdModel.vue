<template>
  <div
    class="fixed inset-0 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
  >
    <div
      class="flex w-full flex-col items-center justify-center gap-10 overflow-auto rounded-lg bg-white px-2 py-3 md:max-w-xl"
    >
      <h2 class="text-3xl">宣傳一下!</h2>
      <a :href="adData.link" class="w-full">
        <img :src="adData.img" :alt="adData.title" class="h-auto w-full" />
      </a>
      <!-- <div class="flex items-center justify-center">
        <input type="checkbox" name="noShow" id="noShow" v-bind="noShow" />
        下次不要再出現
      </div> -->
      <button
        @click="next"
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
  props: { adData: Object, closeModel: Function },

  setup(props, { emit }) {
    const noShow = ref(false);
    const { adData, closeModel } = props;
    const next = () => {
      if (noShow) {
        emit("noShowAgain", adData.title);
      }
      closeModel();
    };

    return { adData, noShow, next };
  },
};
</script>

<style lang="scss" scoped></style>
