<template>
	<div>
		<custom-header></custom-header>

		<b-container>
			<b-row align-h="center">
				<h1>{{projectInfo.projectName}}</h1>
			</b-row>
			<b-row v-if="projectInfo.courseName !== ''" align-h="center">
				<h6>{{projectInfo.courseName}}, {{projectInfo.courseCode}}</h6>
			</b-row>
			<b-row>
				<b-col>
					<iframe class="contentFrame" v-if="projectInfo.video_link !== ''"  width="560" height="315" :src="`https://www.youtube.com/embed/${projectInfo.video_link}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<img class="contentFrame" v-else-if="projectInfo.image_link !== ''" :src="`${projectInfo.image_link}`">
				</b-col>
			</b-row>
			<b-row v-if="projectInfo.repo_link !== ''" align-h="center">
				<b-link :href="`${projectInfo.repo_link}`" target="_blank">Check out the repo!</b-link>
			</b-row>
			<b-row align-h="center">
				<p>{{projectInfo.desc}}</p>
			</b-row>

			<b-row align-h="center" v-if="projectInfo.app_link !== ''">
				<b-button center :href="`${projectInfo.app_link}`" variant="primary">{{projectInfo.projectName}}</b-button>
			</b-row>
		</b-container>

		<icon-footer></icon-footer>
	</div>
</template>

<script>
import mainAPI from '@/services/main_API.js'
export default {
    name: 'project',
    props: [
        'id'
    ],
    data () {
        return {
            projectId: '',
            projectInfo: {}
        }
    },
    mounted () {
        this.projectId = this.$route.params.id
        this.getProject(this.projectId)
    },
    methods: {
        async getProject (id) {
            const result = await mainAPI.getProject(id)
            this.projectInfo = result.data
        }
    }
}
</script>

<style>
.contentFrame {
	display: block;
	width: 560; 
	height: 315; 
	margin: 0 auto;
}
</style>