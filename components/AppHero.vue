<template>
  <section class="p-24 relative app-banner" :style="cssVars">
    <div class="hero-background-image" />
    <div class="flex justify-between flex-wrap relative">
      <div class="content w-full lg:w-1/2">
        <h3 class="font-medium text-2xl text-rose-300 mb-4">
          {{ subtitle }}
        </h3>
        <h1 class="font-semibold text-5xl text-white mb-6">
          {{ title }}
        </h1>
        <p class="text-slate-50 text-lg">
          {{ description }}
        </p>
      </div>
      <div class="media flex justify-end items-end w-full lg:w-1/2 pt-12">
        <nuxt-link to="/">
          <a class="text-2xl">
            <img class="w-24 md:w-36 h-auto" :src="logoUrl" alt="Tatlumba">
          </a>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    default: 'We are a team of creative people.',
    type: String
  },
  subtitle: {
    default: 'Our services',
    type: String
  },
  description: {
    default:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo libero laboriosam? Illum, nam. Repellendus aliquid, soluta, recusandae rem eaque dignissimos velit voluptatem tenetur?',
    type: String
  },
  backgroundUrl: {
    default:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    type: String
  },
  logoUrl: {
    default: '/img/logo.png',
    type: String
  }
})
const cssVars = computed(() => {
  return {
    '--background-url': `url(${props.backgroundUrl})`
  }
})
</script>

<style lang="postcss" scoped>
.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-5;
  background-image: var(--background-url);
}
</style>
