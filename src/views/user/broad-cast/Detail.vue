<template lang="">
  <div class="info">
   <div class="header flex ac">
      <div class="flex user ac">
        <img class="ava" :src="(detail && detail.image) || ''" :alt="(detail && detail.adminName) || ''"/>
        <div>{{ detail && detail.adminName }}</div>
      </div>
      <p class="time">发布于{{ detail && getTime(detail.addTime) }}</p>
    </div>
    <p class="title">{{ detail && detail.title }}</p>
    <div class="content">
      {{ detail && detail.content }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import type { ApiAnnounceDetail } from '../../../api/user'
import { getTime } from "../../../utils/shared";

const props = defineProps<{
  detail: (ApiAnnounceDetail | undefined | null)
}>()
</script>
<style lang="scss" scoped>
.info {
  .header {
    font-size: 14px;
    position: relative;

    .user {
      margin-right: 15px;
      .ava {
        background-color: rgb(218, 218, 218);
        margin: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .time {
      font-size: 12px;
      color: rgb(182, 182, 182);
    }
  }

  .title {
    font-size: 18px;
  }

  .content {
    font-size: 14px;
  }
}
</style>