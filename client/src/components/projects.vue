<template>
    <div>
        <custom-header></custom-header>
        <b-container style="margin-bottom: 10vw;">
            <b-card-group deck >
                <b-row cols="6" align-h="center" v-for="chunk in projectChunks" :key="chunk.index">
                    <b-col cols="12" lg="4" v-for="project in chunk" :key="project.index"><project-box :project="project" style="margin-bottom: 20px;" ></project-box></b-col>
                </b-row>
            </b-card-group>
        </b-container>

        <icon-footer></icon-footer>
    </div>
</template>

<script>
import mainAPI from '@/services/main_API.js'
import _ from 'lodash'
export default {
    name: 'projects',
    data () {
        return {
            projects: [],
            h: 0,
            w: 0
        }
    },
    mounted () {
        window.addEventListener('resize', () => {
            this.h = window.innerHeight
            this.w = window.innerWidth
        }),
        this.loadProjects()
    },
    computed: {
        projectChunks () {
            //console.log(amount)
            return _.chunk(Object.values(this.projects), 3)
        }
    },
    methods: {
        async loadProjects () {
            const result = await mainAPI.getProjects()
            this.projects = result.data
        }
    }
}
</script>

<style>

</style>