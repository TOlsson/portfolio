<template>
    <div id="footer">
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
            }
        }
    }
}
</script>

<style>

    #footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: white;
        border-top-style: solid;
        border-top-color: black;
        border-top-width: 1px;
    }

    .icon_fix {
        position: fixed;
        bottom: 10px;
        right: 10px;
        
    }

    .icon_fix img {
        margin-right: 10px;
    }
</style>