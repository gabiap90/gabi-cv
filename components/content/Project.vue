<template>
  <div class="project">
    <h3 class="uk-card-title">{{ props.title }}<p v-if="props.date" class="uk-article-meta">{{ props.date }}</p>
    </h3>
    <span v-if="props.location" class="company"><span uk-icon="icon: location; ratio: 1"></span>
      {{ props.location }}
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  location?: string
  title?: string
  date?: string
}>()

const { theme } = useAppConfig();
const { secTitleColor, generalFontColor } = theme

</script>

<style lang="less" scoped>
h3.uk-card-title {
  margin-bottom: 10px;
}

.uk-card-title {
  font-size: 1.5rem;
  line-height: 1.4;
}

.uk-article-meta {
  float: right;
}

.company {
  color: v-bind(secTitleColor);
  padding-left: 25px;
}

ul {
    margin-top: 10px;
}
</style>