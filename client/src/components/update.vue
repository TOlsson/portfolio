<template>
    <div>
        <custom-header></custom-header>

        <b-container fluid>
            <b-row>
                <b-col>
                    <h1 style="text-align: center;">About Info</h1>
                    <b-form @submit="onSubmit" @reset="onReset" class="updateForm" v-if="leftShow" :novalidate="true" >
                        <b-form-input
                        v-model="aboutInfo.name"
                        type="text"
                        required
                        placeholder="Namn"
                        :value="aboutInfo.name"
                        ></b-form-input>

                        <b-form-input
                        v-model="aboutInfo.email"
                        type="text"
                        required
                        placeholder="Email"
                        :value="aboutInfo.email"
                        ></b-form-input>

                        <b-form-textarea
                        v-model="aboutInfo.desc"
                        required
                        placeholder="Beskrivning"
                        rows="3"
                        max-rows="10"
                        :value="aboutInfo.desc"
                        ></b-form-textarea>

                        <b-form-input
                        v-model="aboutInfo.linkedin"
                        type="text"
                        required
                        placeholder="LinkedIn länk"
                        :value="aboutInfo.linkedin"
                        ></b-form-input>

                        <b-form-input
                        v-model="aboutInfo.github"
                        type="text"
                        required
                        placeholder="Github länk"
                        :value="aboutInfo.github"
                        ></b-form-input>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-col>
                <b-col>
                    <h1 style="text-align: center;">New Project</h1>
                    <b-form @submit="submitProject" @reset="resetProject" class="updateForm" v-if="rightShow" :novalidate="true" >
                        <b-form-input
                        v-model="projectInfo.projectName"
                        type="text"
                        required
                        placeholder="Project Name"
                        ></b-form-input>

                        <b-form-input
                        v-model="projectInfo.courseName"
                        type="text"
                        required
                        placeholder="Course name"
                        ></b-form-input>

                        <b-form-input
                        v-model="projectInfo.courseCode"
                        type="text"
                        required
                        placeholder="Course code"
                        ></b-form-input>

                        <b-form-textarea
                        v-model="projectInfo.desc"
                        required
                        placeholder="Description"
                        rows="3"
                        max-rows="10"
                        ></b-form-textarea>

                        <b-form-input
                        v-model="projectInfo.repo_link"
                        type="text"
                        placeholder="Repo link"
                        ></b-form-input>

                        <b-form-input
                        v-model="projectInfo.video_link"
                        type="text"
                        placeholder="Video link"
                        ></b-form-input>

                        <b-form-input
                        v-model="projectInfo.image_link"
                        type="text"
                        placeholder="Image link"
                        ></b-form-input>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>

        

        <icon-footer></icon-footer>
    </div>
</template>

<script>
import update_API from '@/services/update_API'
import router from '../router'
export default {
    name: 'update',
    data () {
        return {
            aboutInfo: {
                name: '',
                email: '',
                desc: '',
                github: '',
                linkedin: ''
            },
            leftShow: false,
            rightShow: false,
            projectInfo: {
                projectName: '',
                courseName: '',
                courseCode: '',
                desc: '',
                repo_link: '',
                video_link: '',
                image_link: ''
            }
        }
    },
    async mounted () {
        if (!this.$cookies.isKey('auth')) {
            router.push({name: 'signin'})
        }
        const result = await update_API.checkAuth(this.$cookies.get('auth'))
        if (result.status !== 202) {
            router.push({name: 'signin'})
        } else {
            const result = await update_API.getAboutInfo()
            this.aboutInfo = result.data
            this.leftShow = true
            this.rightShow = true
        }
    },
    methods: {
        async onReset (evt) {
            evt.preventDefault()
            // Reset our form values
            const result = await update_API.getAboutInfo()
            this.aboutInfo = result.data
            // Trick to reset/clear native browser form validation state
            this.leftShow = false
            this.$nextTick(() => {
                this.leftShow = true
            })
        },
        async onSubmit (evt) {
            evt.preventDefault()

            const result = await update_API.postAboutInfo(this.$cookies.get('auth'), this.aboutInfo)
            if (result.status === 202) {
                this.aboutInfo = result.data
            }
        },
        async submitProject (evt) {
            evt.preventDefault()
            const result = await update_API.addProject(this.$cookies.get('auth'), this.projectInfo)
            if (result.status === 202) {
                this.resetProject(evt)
            }
        },
        async resetProject (evt) {
            evt.preventDefault()
            this.projectInfo.projectName = ''
            this.projectInfo.courseName = ''
            this.projectInfo.courseCode = ''
            this.projectInfo.desc = ''
            this.projectInfo.repo_link = ''
            this.projectInfo.video_link = ''
            this.projectInfo.image_link = ''
            this.rightShow = false
            this.$nextTick(() => {
                this.rightShow = true
            })
        }
    }

}
</script>

<style>
    .updateForm {
        margin: 0 auto;
        max-width: 80vw;
    }
</style>