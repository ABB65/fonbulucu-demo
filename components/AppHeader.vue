<template>
  <header>
    <div
      class="header-desktop container mx-auto py-4 px-4 sm:px-0"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center divide-x">
          <nuxt-link to="https://contentrain.io">
            <img
              class="w-8 md:w-12 h-auto rounded-full mr-4"
              src="/img/logo.svg"
              alt="Contentrain Headless CMS"
            >
          </nuxt-link>
          <nuxt-link to="https://www.fonbulucu.com">
            <img
              class="w-8 md:w-12 h-auto rounded-full ml-4"
              src="/img/fb.svg"
              alt="Fonbulucu"
            >
          </nuxt-link>
        </div>
        <nav class="flex items-center">
          <nuxt-link
            class="btn-primary ml-3 flex items-center"
            to="https://invest.fonbulucu.com/kampanya/DZ3XBO"
            target="_blank"
          >
            Yatırım Yap <i class="ri-arrow-right-up-line ml-3" />
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
