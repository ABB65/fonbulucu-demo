<template>
  <li class="p-6 sm:p-8">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <div
          class="w-12 h-12 mr-2 rounded-full flex items-center justify-center bg-gradient-to-tl from-violet-100 via-slate-200 to-violet-100"
        >
          <i class="ri-user-2-fill text-4xl text-slate-300" />
        </div>
      </div>
      <div class="flex-1 min-w-0 flex justify-between text-left">
        <div>
          <h2 class="font-semibold text-lg mb-2">
            {{ duyuru.baslik }}
          </h2>
          <p>
            {{ duyuru.aciklama }}
          </p>
        </div>
      </div>
      <div
        class="text-right text-base font-semibold text-slate-600 dark:text-white"
      >
        {{ new Date(duyuru.createdAt).toLocaleString() }}
        <p class="text-slate-800">
          {{ duyuru.yazar }}
        </p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  duyuru: {
    type: Object,
    default () {
      return {
        ID: 'deddbdef-947e-42c7-a8f3-df4462067481',
        baslik: 'Contentrain yatırım turunda.',
        aciklama:
          'Contentrain içerik yönetim sistemi modern mimarisi ve esnek platform uyumluluğu, rakiplerinde olmayan kaydedilebilir ve paylaşılabilir veri modelleriyle proje yöneticilerini iş tekrarından kurtararak web projelerini çok hızlı geliştirmelerine yardımcı olur.\n\nfonbulucu kitlesel fonlama kampanyasında yatırım alarak; Contentrain’in yüksek potansiyelini etkili pazarlama faaliyetleriyle sürekli destekleyerek global pazarda kendi kategorisindeki en güçlü ürün haline getirmek istiyoruz.',
        yazar: 'Bayhan Bayramoğlu',
        createdAt: 1670421180479
      }
    }
  }
})
</script>

<style scoped></style>
