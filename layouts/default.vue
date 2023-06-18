<template>
  <Header />
  <div class="m-2 desktop:row">
    <Layout class="desktop:col-2" />
    <slot />
  </div>
</template>

<script>
import Header from "~/components/header.vue"
import Layout from "~/components/layout.vue"
</script>

<style lang="scss" scoped></style>
