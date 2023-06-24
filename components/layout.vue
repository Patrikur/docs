<template>
  <div class="hidden big:visible">
    <ul class="slide-in">
      <li class="p-b-1" v-for="(item, index) in menuItems" :key="index">
        <NuxtLink :to="item.to"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <polyline
              points="96 48 176 128 96 208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
          {{ item.text }}</NuxtLink
        >
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
ul li {
  font-size: 1.3rem;
}
svg {
  height: 0.8rem;
}
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #187f10;
}

.slide-in li {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in 0.5s forwards;
}

.slide-in li:nth-child(1) {
  animation-delay: 0.2s;
}

.slide-in li:nth-child(2) {
  animation-delay: 0.4s;
}

.slide-in li:nth-child(3) {
  animation-delay: 0.6s;
}

.slide-in li:nth-child(4) {
  animation-delay: 0.8s;
}

.slide-in li:nth-child(5) {
  animation-delay: 1s;
}

.slide-in li:nth-child(6) {
  animation-delay: 1.2s;
}

.slide-in li:nth-child(7) {
  animation-delay: 1.4s;
}

.slide-in li:nth-child(8) {
  animation-delay: 1.6s;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
