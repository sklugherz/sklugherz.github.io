<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>
        <RouterLink to="/"><h3>Stephen Klugherz</h3></RouterLink>
        <ul>
            <li><RouterLink to="/blogs">blogs</RouterLink></li>
            <li><RouterLink to="/projects">projects</RouterLink></li>
            <li><RouterLink to="/now">now</RouterLink></li>
            <li><RouterLink to="/uses">uses</RouterLink></li>
        </ul>
    </nav>

</template>

<style scoped>

nav {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #f67634;
}

nav ul {
    display: flex;
}

nav li {
    list-style: none;
    padding-left: 20px;
}

</style>