<template>
  <li class="p-6 sm:p-8 text-left">
    <div>
      <h2 class="font-semibold text-lg mb-2">
        {{ duyuru.baslik }}
      </h2>
      <p>
        {{ duyuru.aciklama }}
      </p>
    </div>

    <div class="text-sm mt-2">
      <p class="flex items-center font-semibold">
        <span class="w-4 border-b border-2 border-rose-500 mr-2" />
        {{ duyuru.yazar }}
      </p>
      <p class="mb-1">
        {{ new Date(duyuru.createdAt).toLocaleString() }}
      </p>
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
