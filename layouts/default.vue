<template>
  <Header />
  <div class="b-m-2 b-desktop:b-row">
    <Layout class="b-desktop:b-col-2" />
    <slot />
  </div>
</template>

<script>
import Header from "~/components/header.vue"
import Layout from "~/components/layout.vue"
</script>

<style lang="scss" scoped></style>
