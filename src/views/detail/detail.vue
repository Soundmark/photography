<template>
  <div>
    <VueShowdown :markdown="state.content" class="markdown"/>
    <!-- <textarea v-model="content"></textarea> -->
  </div>
</template>

<script src="./detail.ts" lang="ts"></script>

<style lang="less" scoped>
.markdown{
  width: 800px;
  float: right;
}
</style>