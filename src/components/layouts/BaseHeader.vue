<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
<!--  <el-button @click="getTableData"> get table data</el-button>-->
  <div class="footer">
    <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
        @click="toggleDark()"
    >
      <i inline-flex i="dark:ep-moon ep-sunny" />
      switch mode
    </button>

  </div>
</template>
<style>
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
