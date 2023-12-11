<template>
  <section>
    <h3 v-if="props.title" class="uk-card-title">
      <span v-if="props.icon" :uk-icon="`icon: ${props.icon}; ratio: 1.5`" class="uk-icon"></span>
      {{ props.title }}
    </h3>
    <hr />
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  icon?: string
}>()
</script>

<style lang="less" scoped>
section {
  margin: 50px 0;
}

h3.uk-card-title {
    margin-bottom: 10px;
}
</style>