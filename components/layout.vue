<template>
  <div class="hidden big:visible">
    <ul>
      <li
        class="p-b-1 fs-2"
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <NuxtLink :to="item.to">- {{ item.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "Installation", to: "/#installation" },
        // global styles
        { text: "Global Styles", to: "/#global-styles" },
        { text: "CSS Variables", to: "/#css-variables" },
        { text: "Typography", to: "/#typography" },
        { text: "Width and Height", to: "/#width-and-height" },
        { text: "Grid Layout", to: "/#grid-layout" },
        { text: "Flexbox", to: "/#flexbox" },
        { text: "Utility Classes", to: "/#utility-classes" },
      ],
    }
  },
}
</script>

<style scoped>
ul {
  position: sticky;
  top: 100px;
}
</style>
