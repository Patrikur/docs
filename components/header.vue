<template>
  <div class="m-2 fade-in">
    <nuxt-link to="/">
      <img
        class="m-l-1 m-t-1"
        src="https://raw.githubusercontent.com/Basilcss/docs/main/basilcss-transparent.png"
        alt="basil css logo"
      />
      <span class="fs-2 color-accent">Basil.css</span>
    </nuxt-link>
  </div>
</template>

<script></script>

<style scoped>
div {
  position: sticky;
  z-index: 1;
  top: 0;
  padding: 0.5rem 0;
  background-color: #22272d;
}

a {
  color: inherit;
  text-decoration: none;
}

span {
  font-weight: bold;
}

.fade-in {
  opacity: 0;
  animation: fade-in-animation 1s forwards;
}

@keyframes fade-in-animation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
