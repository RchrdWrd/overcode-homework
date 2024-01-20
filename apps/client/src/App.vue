<script setup lang="ts">
import ProductTable from "./components/ProductTable.vue"
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <ProductTable />
  <VueQueryDevtools/>
</template>
