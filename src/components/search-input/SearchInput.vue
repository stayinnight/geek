<template lang="">
  <div class="search flex shade">
    <input class="input" :placeholder="defaultValue"/>
    <div class="iconfont icon-sousuokuang p" @click="search"></div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmit, defineProps } from "@vue/runtime-core";
import { ref } from 'vue'

const props = defineProps<{
  defaultValue?: string,
}>()

const emits = defineEmit(["search"])

const val = ref("")

const search = () => {
  emits("search", val.value)
}
</script>
<style lang="scss" scoped>
.search {
  border-radius: 15px;
  position: relative;
  background-color: rgb(177, 179, 255);
  padding: 5px 5%;
  box-sizing: border-box;

  .input {
    display: block;
    font-size: 20px;
    width: 100%;
    padding: 0;
    margin: 0;
    color: #fff;
    outline: none;
    border: none;
    background-color: transparent;
  }

  .icon-sousuokuang {
    position: absolute;
    right: 4%;
    transform: translate(100%, -50%);
    top: 50%;
    color: #fff;
  }
}
</style>