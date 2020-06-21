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
    </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style>

</style>