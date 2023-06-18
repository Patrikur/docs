<template>
  <div class="hidden desktop:visible">
    <ul>
      <li class="p-b-1 fs-2" v-for="(item, index) in menuItems" :key="index">
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
        { text: "Get started", to: "/#get-started" },
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
