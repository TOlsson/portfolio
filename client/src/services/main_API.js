import API from '@/services/API'

export default {
    getAboutInfo () {
        return API().get('aboutInfo')
    }
}