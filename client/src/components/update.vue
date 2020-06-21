<template>
    <div>
        <!--<input v-model="aboutInfo.name" placeholder="Namn">
        <input v-model="aboutInfo.github" placeholder="Github länk">
        <input v-model="aboutInfo.linkedin" placeholder="LinkedIn länk">
        <textarea v-model="aboutInfo.desc" cols="30" rows="10"></textarea>
        <input v-model="aboutInfo.image_link" placeholder="Bild namn"> -->

        <b-navbar toggleable="lg" :sticky="true" bg-variant="transparent" type="light">
            <b-navbar-brand href="#/">Portfolio</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item href="#/">Home</b-nav-item>
                <b-nav-item href="#/projects">Projects</b-nav-item>
                <b-nav-item href="#/about">About</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-form @submit="onSubmit" @reset="onReset" class="updateForm" v-if="show" :novalidate="true">
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
            show: false
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
            this.show = true
        }
    },
    methods: {
        async onReset (evt) {
            evt.preventDefault()
            // Reset our form values
            const result = await update_API.getAboutInfo()
            this.aboutInfo = result.data
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        },
        async onSubmit (evt) {
            evt.preventDefault()

            const result = await update_API.postAboutInfo(this.$cookies.get('auth'), this.aboutInfo)
            if (result.status === 202) {
                this.aboutInfo = result.data
            }
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