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
        <b-container fluid>
            <b-row>
                <b-card-group deck>
                    <b-col><project-box :project="project"></project-box></b-col>
                    <b-col><project-box :project="project"></project-box></b-col>
                    <b-col><project-box :project="project"></project-box></b-col>
                </b-card-group>
            </b-row>

            <b-row style="margin-top: 20px;">
                <b-card-group deck>
                    <b-col><project-box :project="project"></project-box></b-col>
                    <b-col><project-box :project="project"></project-box></b-col>
                    <b-col><project-box :project="project"></project-box></b-col>
                </b-card-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data () {
        return {
            project: {
                name: 'Test',
                code: 'TNM103',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dictum nulla, eget mattis lacus. Cras et suscipit libero. Praesent id est at odio auctor facilisis. Nulla dignissim dui tellus, eget lacinia massa sodales a. Praesent libero dui, viverra vel orci ut, hendrerit tincidunt diam. Integer varius posuere venenatis. Sed feugiat ipsum vitae felis aliquet tincidunt. Integer quis feugiat dolor. Proin porta dictum est, ac tempor risus sollicitudin non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dictum nulla, eget mattis lacus. Cras et suscipit libero. Praesent id est at odio auctor facilisis. Nulla dignissim dui tellus, eget lacinia massa sodales a. Praesent libero dui, viverra vel orci ut, hendrerit tincidunt diam. Integer varius posuere venenatis. Sed feugiat ipsum vitae felis aliquet tincidunt. Integer quis feugiat dolor. Proin porta dictum est, ac tempor risus sollicitudin non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dictum nulla, eget mattis lacus. Cras et suscipit libero. Praesent id est at odio auctor facilisis. Nulla dignissim dui tellus, eget lacinia massa sodales a. Praesent libero dui, viverra vel orci ut, hendrerit tincidunt diam. Integer varius posuere venenatis. Sed feugiat ipsum vitae felis aliquet tincidunt. Integer quis feugiat dolor. Proin porta dictum est, ac tempor risus sollicitudin non.'
            }
        }
    }
}
</script>

<style>

</style>