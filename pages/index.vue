<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <section class="home-hero app-section mt-12 pb-16">
      <div class="content md:max-w-lg p-0 md:pr-2">
        <h1 class="text-6xl font-semibold mb-6">
          {{ hero.baslik }}
        </h1>
        <p class="mb-8 text-xl">
          {{ hero.aciklama }}
        </p>
        <button class="btn-primary flex items-center">
          {{ hero.buton }}<i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
      <div class="media p-0 md:pl-2">
        <img
          class="w-full h-auto rounded-2xl mt-12 md:mt-0"
          src="/img/stats.jpg"
          alt="Hero image"
        >
      </div>
    </section>
    <!--
    <section
      ref="references"
      class="references grid grid-cols-2 mt-16 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center align-center"
    >
      <p class="text-center lg:text-left text-xl col-span-2 md:col-span-1">
        Bize Güvenenler
      </p>
      <div
        v-for="(logo,index) in 4"
        :key="index"
        class="reference-logo-container flex justify-center"
        :class="index === logo - 1 ? 'lg:justify-end' : ''"
      >
        <img
          v-if="logo !== 0"
          :src="'/img/logoipsum-' + (logo + 1) + '.svg'"
          class="reference-logo w-full h-auto"
        >
      </div>
    </section> -->
    <section class="services py-8 my-16">
      <div class="content mx-auto text-center mt-8 mb-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-semibold text-4xl mb-6">
            Fonbulucu kampanya hatırası.
          </h2>

          <p>
            Kampanya süresince tüm yatırımcılarımız ve dileyen herkes
            Contentrain üzerinden bu duvara mesajlarını bırakabilirler.
            Bu sayede Contentrain üzerinden web sitelerinin yönetiminin ne kadar kolay
            olduğunu sizlerde test edebilirsiniz.
          </p>
        </div>
        <ul
          class="max-w-6xl mx-auto divide-y divide-slate-300 dark:divide-gray-700 mt-8"
        >
          <NewsItem
            v-for="duyuru in duyurular"
            :key="duyuru.updatedAt"
            :duyuru="duyuru"
          />
        </ul>
      </div>
    </section>
    <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          Kampanyamız fonbulucu üzerinde yayında.
        </h2>
        <p class="text-white text-lg">
          Contentrain'in geleceğine ortak olmak için yatırımcımız olun.
        </p>
      </div>

      <div
        class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2"
      >
        <button class="btn-primary flex items-center">
          Kampanyaya git <i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
    </section>

    <section class="services py-16 mt-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          Kalite tesadüf değildir.
        </h2>
        <p>Kalitenin tesadüf olmadığına inanan bazı kullanıcılarımız.</p>
      </div>
      <div class="app-cards pb-32 pt-4">
        <div v-for="study in 3" :key="study" class="app-card p-6">
          <div class="icon">
            <i class="ri-double-quotes-l text-5xl" />
          </div>
          <div class="content mt-3">
            <h3 class="font-medium">
              Bir çok içerik yönetim sistemi kullandım ancak Contentrain'de
              yaşadığım deneyimi şimdiye kadar yaşamamıştım.
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-sm flex items-center">
              <span class="w-4 border-b border-2 border-rose-500 mr-2" />John
              Doe, Siprax
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const data = await queryContent('/contentrain', '/duyurular').find()
const data2 = await queryContent('/contentrain', '/giris').find()

const duyurular = ref(data[0].body)
const hero = ref(data2[0].body[0])
console.log(hero.value)
</script>

<style scoped></style>
