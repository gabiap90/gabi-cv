<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">

    <div v-if="slots.heater" class="uk-card-header">
      <slot name="header"></slot>
    </div>

    <div v-if="slots.default" class="uk-card-body">
      <slot></slot>
    </div>

    <div v-if="slots.footer" class="uk-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slots = useSlots()
</script>

<style></style>