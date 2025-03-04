<script setup>

import projects from '../assets/data/projects.js'



function toggleSelected(project) {
    projects.value.forEach(p => p.selected = false);

    project.selected = true;
}

</script>

<template>
    <div class="main">
        <div class="aside">
            <ul>
                <li v-for="project in projects" :key="project.title">
                    <p 
                    @click="toggleSelected(project)" :class="{ selected: project.selected }"
                    >
                    {{ project.title }}<span>&nbsp;>></span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="project">
            <div class="lighter">
                <p>project</p>
                <img />
            </div>
        </div>
    </div>
</template>

<style scoped>

.main {
    display: flex;
}

.project {
    width: 70%;
}

.lighter {
    margin-left: 5%;
    margin-right: 5%;
    padding: 5%;
    padding-top: 0;

}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 200px;
}

li {
    list-style: none;
    height: 50px;
    max-width: 200px;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid white;
    border-top: hidden;
    display: flex;
    align-items: center;
    transition: all .3s;
}

li:hover {
    cursor:pointer;
}

p {
    display: flex;
    width: 100%;
    justify-content: center;
}

li:first-child {
    border-top: 1px solid white;
}

span { 
    display: none;
}

.selected {
    padding-left: 30px;
    font-size: 1.2em;
    transition: all .3s;
}

.selected span {
    display: block;
    padding-left: auto;
}

li:has(.selected) {
    border-right: transparent;
}

.aside {
    width: 30%; 
}


</style>