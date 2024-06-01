<!-- resources/js/App.vue -->
<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style scoped>
nav {
    padding: 1em;
    background: #f5f5f5;
}
nav a {
    margin-right: 1em;
}
</style>
