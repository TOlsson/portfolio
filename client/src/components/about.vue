<template>
    <div>
        <custom-header></custom-header>

        <b-card id ="card-fix" class="text-center" >
            <b-img center :src="require(`@/assets/img/profile1.jpg`)" fluid rounded="circle" :width="150" :heigth="250"></b-img>
            <b-card-title center>{{aboutInfo.name}}</b-card-title>
            <b-card-text>{{aboutInfo.desc}}</b-card-text>
        </b-card>

        <icon-footer></icon-footer>
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
            }
        }
    }
}
</script>

<style>
#card-fix {
    max-width: 500px;
    margin: 0 auto;
    border: none;
}
</style>