<template>
  <div
    class="grid gap-x-3 gap-y-3 max-w-full w-full bg-pink-200/20 justify-center justify-items-center"
    style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))"
  >
    <template v-for="asset of assets">
      <div
        class="font-bold grid grid-cols-2 grid-flow-row w-36 bg-gray-700 rounded-sm p-2"
      >
        <p class="">{{ asset.ticker }}</p>
        <p class="justify-self-end" :class="asset.varClass()">
          {{ asset.quotation }}
        </p>
        <p class="text-xs text-gray-300">{{ asset.exchange }}</p>
        <p class="justify-self-end" :class="asset.varClass()">
          {{ asset.variation + "%" }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Asset } from "../AssetMob/Asset";

defineProps<{ assets: Asset[] }>();
</script>
