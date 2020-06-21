<template>
  <div class="project-box">
    <b-card bg-variant="light" style="max-height: 250px;">
      <b-card-title>{{project.name}}, {{project.code}}</b-card-title>
      <b-card-text v-line-clamp="4">{{project.desc}}</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: [
    'project'
  ]
}
</script>

<style>

.project-box {
  /* background-color: red; */
}

</style>