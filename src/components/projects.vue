<script setup>
import { ref } from 'vue';
import projects from '../assets/data/projects.js';

const currProject = ref(projects[0]);

const projectList = ref(projects.map(p => ({...p, selected: p === projects[0]})));

function toggleSelected(project) {
    projectList.value.forEach(p => p.selected = false);
    project.selected = true;
    currProject.value = project;
}

</script>

<template>
    <div class="main">
        <div class="aside">
            <ul>
                <li v-for="project in projectList" :key="project.title">
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
                <h3>{{ currProject.title }}</h3>
                <img :src=currProject.img alt="In Development; Image coming soon."/>
                <h5>Keywords: {{ currProject.keywords }}</h5>
                <p>{{ currProject.desc }}</p>
                
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

h3 {
    text-align: center;
}

h5 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    padding-top: 3%;
}

.lighter p {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    padding-top: 3%;
}

.lighter {
    margin-left: 3%;
    margin-right: 3%;
    padding: 5%;
    border-radius: 25px;
    box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.2);
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 200px;
    border: 1px solid white;
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