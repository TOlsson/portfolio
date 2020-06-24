import API from '@/services/API'

export default {
    signIn (username, password) {
        return API().post('signIn', {user: username, pass: password})
    },
    checkAuth (auth) {
        return API().post('checkAuth', {cookieAuth: auth})
    },
    getAboutInfo () {
        return API().get('aboutInfo')
    },
    postAboutInfo (auth, aboutInfo) {
        return API().post('aboutInfo', {cookieAuth: auth, aboutInfo: aboutInfo})
    },
    addProject (auth, projectInfo) {
        return API().post('addProject', {cookieAuth: auth, projectInfo: projectInfo})
    }
}