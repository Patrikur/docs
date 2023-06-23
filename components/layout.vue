<template>
  <div class="b-hidden b-desktop:b-visible">
    <ul>
      <li
        class="b-p-b-1 b-fs-2"
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
        { text: "Introduction", to: "/#introduction" },
        { text: "Quick Start", to: "/#quick-start" },
        { text: "Grids", to: "/#grids" },
        { text: "Flexbox", to: "/#flexbox" },
        { text: "Buttons", to: "/#buttons" },
        { text: "Font Size", to: "/#font-size" },
        { text: "Margin", to: "/#margin" },
        { text: "Padding", to: "/#padding" },
        { text: "Screen Size", to: "/#screen-size" },
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
