<script setup>
import Layout from "@/Layout/Layout.vue";
import { reactive, ref, watch, inject } from "vue";
import * as yup from "yup";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";

const page = usePage();
const processing = ref(false);
const isFormValid = ref(false);
const swal = inject("$swal");
const previewPhotoUrl = ref();
const errors = ref({});

const schema = yup.object().shape({
  path: yup
    .mixed()
    .required()
    .test((value) => value && value.size <= 41943040)
    .test((value) => value && value.type.startsWith("image/")),
});

const initialState = {
  path: "",
};

const photo = reactive({ ...initialState });

watch(photo, (newValue) => {
  schema
    .validate(newValue, { abortEarly: false })
    .then(() => {
      isFormValid.value = true;
    })
    .catch(() => {
      isFormValid.value = false;
    });
});

const onFileChange = (e) => {
  const target = e.target.files[0];
  photo.path = target;
  if (target) {
    previewPhotoUrl.value = URL.createObjectURL(target);
  }
};

const removePhotoHanlde = () => {
  Object.assign(photo, initialState);
  previewPhotoUrl.value = null;
};
</script>

<template>
  <Layout>
    <div class="container mx-auto bg-pink-50 my-5 py-5">
      <h1 class="text-center text-4xl font-bold">Fotoğraf Çevirici</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-2xl mx-auto mt-10 p-3">
        <div class="">
          <h6>Önizleme</h6>
          <div
            class="w-full h-96 rounded-lg overflow-hidden relative bg-cover bg-center bg-no-repeat"
            :style="`background: url(${previewPhotoUrl})`"
            v-if="previewPhotoUrl"
          >
            <div class="previrew-text">Önizleme</div>
            <img
              :src="previewPhotoUrl"
              alt="Seçilen fotoğraf"
              class="backdrop-blur-lg object-contain h-full w-full flex-1 flex-shrink-0"
            />
          </div>
        </div>
        <div class="">ayarlar</div>
      </div>
      <form class="w-full max-w-2xl mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full px-3">
            <label
              for="select-photo"
              class="flex items-center justify-center flex-1 max-w-full md:max-w-4xl px-1 py-0.5 border border-pink-500 border-dashed rounded-lg min-h-32"
              :class="errors.path ? 'is-invalid' : ''"
            >
              <div
                class="cursor-pointer flex items-center text-lg text-pink-900"
                :class="photo.path?.name ? 'text-warning' : ''"
              >
                <i class="fa-regular fa-images me-2"></i>
                <span v-if="photo.path?.name" class="text-ellipsis">
                  {{ photo.path.name }}
                </span>
                <span v-else> Bir fotoğraf seç</span>
              </div>
              <input
                class="invisible opacity-0 -translate-x-full pointer-events-none fixed left-0 top-0 bottom-0 right-0"
                type="file"
                id="select-photo"
                @change="onFileChange"
                accept="image/*"
                :disabled="processing"
                :class="errors.path ? 'is-invalid' : ''"
              />
              <div class="invalid-feedback" v-if="errors.path">
                {{ errors.path[0] }}
              </div>
            </label>
          </div>
        </div>
        <div class="flex justify-end items-center gap-1 p-3">
          <button
            type="submit"
            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full transition-all"
          >
            İptal
          </button>
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full transition-all"
          >
            Dönüştür
          </button>
        </div>
      </form>
    </div>
  </Layout>
</template>
