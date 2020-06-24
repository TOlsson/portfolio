<template>
  <div>
    <b-card id="projectBox" bg-variant="light">
      <b-card-title>{{project.projectName}}</b-card-title>
      <b-card-sub-title>{{project.courseName}}, {{project.courseCode}}</b-card-sub-title>
      <b-card-text v-line-clamp="2">{{project.desc}}</b-card-text>
      <b-button v-on:click="onClick($event)" variant="primary" :id="project._id">More Info...</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: [
    'project'
  ],
  methods: {
    onClick (event) {
      this.$router.push({name: 'project', params: {id: event.currentTarget.id}})
    }
  }
}
</script>

<style>
</style>