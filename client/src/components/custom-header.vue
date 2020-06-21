<template>
    <b-navbar toggleable="lg" :sticky="true" variant="light" type="light">
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
</template>

<script>
export default {

}
</script>

<style>

</style>