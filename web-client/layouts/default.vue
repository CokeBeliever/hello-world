<template>
  <div class="layout">
    <div class="header"></div>
    <div class="leftside"></div>
    <div class="main">
      <slot />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-areas: 'header header' 'leftside main' 'footer footer';
  grid-template-rows: 80px 1fr 60px;
  grid-template-columns: 240px 1fr;
  width: 100vw;
  height: 100vh;

  .header {
    grid-area: header;
    background: red;
  }
  .leftside {
    grid-area: leftside;
    background: green;
  }
  .main {
    grid-area: main;
    background: yellow;
  }
  .footer {
    grid-area: footer;
    background: blue;
  }
}
</style>
