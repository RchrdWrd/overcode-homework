<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import apiService from '../services/ApiService'
import NewProductModal from './NewProductModal.vue'
import { Product } from '../../../server/src/products/schemas/product.schema'

const queryClient = useQueryClient()
const { data, refetch, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: apiService.products.find
})

async function removeProduct(id: string) {
  apiService.products.remove(id).then(() => queryClient.invalidateQueries())
}
async function toggleAcquired(id: string, productData: Product) {
  apiService.products
    .update(id, { ...productData, acquired: !productData.acquired })
    .then(() => queryClient.invalidateQueries())
}
</script>

<template>
  <NewProductModal />
  <div class="overflow-x-auto flex flex-col gap-4">
    <div class="flex items-center px-4">
      <div class="flex-1 text-left">{{ data?.length }} termék összesen</div>
      <div class="">
        <button class="btn btn-primary mr-auto" onclick="newProductDialog.showModal()">
          ÚJ TERMÉK
        </button>
      </div>
    </div>
    <table class="table transition-all duration-300">
      <thead>
        <tr>
          <th>Termék neve</th>
          <th>Leírás</th>
          <th>kb. ár (HUF)</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody v-if="isLoading">
        <tr>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
        </tr>
        <tr>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
        </tr>
        <tr>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
          <th class=""><div class="skeleton w-full h-4"></div></th>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="product in data" :key="product._id" :class="product.acquired && 'bg-base-200'">
          <th>{{ product.name }}</th>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <a class="link" @click="toggleAcquired(product._id, product)">{{
              product.acquired ? 'Mégse' : 'Beszerezve'
            }}</a>
            |
            <a class="link" @click="removeProduct(product._id)">törlés</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
../services/ApiService
