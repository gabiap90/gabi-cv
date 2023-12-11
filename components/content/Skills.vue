<template>
  <div class="skills-main-container">
    <div class="skills-container">
      <h3>Worked most with</h3>
      <div class="major-skills container-right-2">
        <span v-for="work in props.mainSkills" class="uk-label soft-skill">{{ work }}</span>
      </div>
    </div>

    <div class="skills-container">
      <h3>Technologies and Concepts I worked with</h3>
      <div class="major-skills container-right-2">
        <span v-for="work in props.skills" class="uk-label soft-skill">{{ work }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { theme } = useAppConfig();
const { secTitleColor } = theme
const props = defineProps<{
  mainSkills: string,
  skills: string
}>()

</script>

<style>
.skills-main-container {
  display: flex;
  justify-content: center;
}

.skills-container {
  width: 50%;
  text-align: center;
  margin: 0 50px;
}

.skills-container .soft-skill {
  background-color: v-bind(secTitleColor);
  margin: 2px;
}
</style>