<template>
    <div>
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

        <b-card class="text-center">
            <b-img center :src="require(`@/assets/img/profile1.jpg`)" fluid rounded="circle" :width="150" :heigth="250"></b-img>
            <b-card-title center>{{aboutInfo.name}}</b-card-title>
            <b-card-text>{{aboutInfo.desc}}</b-card-text>
        </b-card>

        <div class="icon_fix">
            <b-link :href="aboutInfo.linkedin" target="_blank">
                <b-img :src="require(`@/assets/icons/linkedin_icon.png`)" :width="32" :heigth="32" ></b-img>
            </b-link>
            <b-link :href="aboutInfo.github" target="_blank">
                <b-img :src="require(`@/assets/icons/GitHub-Mark-32px.png`)"></b-img>
            </b-link>
            <b-link :href="`mailto:${aboutInfo.email}`">
                <b-icon-envelope style="width: 32px; height: 32px; vertical-align: middle;"></b-icon-envelope>
            </b-link>
        </div>
    </div>
</template>

<script>
import mainAPI from '@/services/main_API.js'

export default {
    name: 'about',
    data () {
        return {
            aboutInfo: {}
        }
    },
    mounted () {
        this.about()
    },
    methods: {
        async about () {
            const result = await mainAPI.getAboutInfo()
            if (result.status === 200) {
                this.aboutInfo = result.data
                console.log(this.aboutInfo)
            }
        }
    }
}
</script>

<style>

.icon_fix {
    position: fixed;
    bottom: 10px;
    right: 10px;
}

.icon_fix img {
    margin-right: 10px;
}

</style>