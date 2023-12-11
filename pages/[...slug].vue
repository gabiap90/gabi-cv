<template>
  <div :class="bodyClasses">
    <main-header></main-header>
    <main>
      <ContentDoc />
    </main>
  </div>
</template>

<script lang="ts" setup>
const { theme } = useAppConfig()
const { bodyClasses } = theme
</script>