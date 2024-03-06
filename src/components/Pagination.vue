<template>
 <div class="lo">123</div>
</template>

<script>

export default {
  props: ['pages','pagination','getProductData'],
  methods: {
    updatePage(page) {
      this.$emit('emitPages', page);
    },
  },
};
</script>
