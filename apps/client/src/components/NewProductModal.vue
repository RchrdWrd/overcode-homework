<script lang="ts">
import { defineComponent, ref } from "vue"
import { QueryClient, useQueryClient } from "@tanstack/vue-query"
import z from "zod"
import apiService from "../services/ApiService"

export default defineComponent({
  name: "NewProductModal",
  setup() {
    const queryClient:QueryClient = useQueryClient()
    const form = ref()
    const dialog = ref<HTMLDialogElement>()

    const formSchema = z
      .object({
        name: z
          .string()
          .min(1, { message: "A termék nevének megadása kötelező." })
          .max(20, {
            message: "A termék neve nem lehet hosszabb 20 karakternél.",
          }),
        description: z
          .string()
          .min(1, { message: "A termék leírásának megadása kötelező." })
          .min(2, { message: "A termék leírásának nem lehet rövidebb 2 karakternél." })
          .max(50, {
            message: "A termék neve nem lehet hosszabb 50 karakternél.",
          }),
        price: z
          .number()
          .min(1, { message: "A termék kb. árának megadása kötelező." }),
      })
      .strict()

    type formSchemaType = z.infer<typeof formSchema>
    const errors = ref<z.ZodFormattedError<formSchemaType>>()

    return {
      queryClient,
      formSchema,
      form,
      dialog,
      errors,
    }
  },
  data() {
    return {
      formData: {
        name: "",
        description: "",
        price: 0,
      },
    }
  },
  methods: {
    submitForm() {
      const valid = this.formSchema.safeParse(this.formData)
      if (!valid.success) {
        this.errors = valid.error.format()
      } else {
        this.errors = undefined
        apiService.products.create(this.formData).then(() => {
          this.queryClient.invalidateQueries()
          this.dialog?.close()
        })
      }
    },
  },
})
</script>

<template>
  <dialog
    ref="dialog"
    id="newProductDialog"
    class="modal modal-bottom sm:modal-middle"
  >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-bold text-lg">Új termék hozzáadása</h3>
      <form class="py-4 w-full" :ref="form">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Termék neve</span>
          </div>
          <input
            type="text"
            placeholder="Alma"
            class="input input-bordered"
            v-model="formData.name"
          />
          <div class="label" v-if="errors?.name">
            <span class="label-text text-red-600">{{
              errors.name._errors[0]
            }}</span>
          </div>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Leírás</span>
          </div>
          <input
            type="text"
            placeholder="1kg, bio"
            class="input input-bordered w-full"
            v-model="formData.description"
          />
          <div class="label" v-if="errors?.description">
            <span class="label-text text-red-600">{{
              errors.description._errors[0]
            }}</span>
          </div>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">kb. ár (HUF)</span>
          </div>
          <input
            type="number"
            placeholder="500"
            class="input input-bordered w-full"
            v-model="formData.price"
          />
          <div class="label" v-if="errors?.price">
            <span class="label-text text-red-600">{{
              errors.price._errors[0]
            }}</span>
          </div>
        </label>
      </form>
      <div class="modal-action">
        <button class="btn btn-primary" type="submit" @click="submitForm">
          Termék hozzáadása
        </button>
        <form method="dialog">
          <div class="flex gap-4">
            <button class="btn">Mégse</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>
../services/ApiService