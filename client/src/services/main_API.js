import API from '@/services/API'

export default {
    getAboutInfo () {
        return API().get('aboutInfo')
    },
    getProjects () {
        return API().get('projects')
    },
    getProject (id) {
        return API().post('project', {id: id})
    }
}