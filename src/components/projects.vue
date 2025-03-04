<script setup>

import {ref} from 'vue';

const projects = ref([{title: 'project 1', 
                    desc: 'hello world',}, {title: 'project 2', 
                    desc: 'hello world',}]);

const isSelected = ref(false);

function toggleSelected() {
    isSelected.value = !isSelected.value;
}

</script>

<template>
    <div class="main">
        <div class="aside">
            <ul>
                <li v-for="project in projects" @click="toggleSelected()" :class="{ selected: isSelected }">
                    <p>{{ project.title }}</p><span>&nbsp;>></span>
                </li>
            </ul>
        </div>
        <div class="project">
            <p>project <img></p>
        </div>
    </div>
</template>

<style scoped>

.main {
    display: flex;
}

.project {
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: aqua;
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
    justify-content: center;
    align-items: center;
}

li:first-child {
    border-top: 1px solid white;
}

span { 
    display: none;
}

.selected span {
    display: block;
}

.selected {
    border-right: hidden;
}

.selected li {
    padding-left: 5px;
}

.aside {
    width: 30%; 
}

img {
    width: 300px;
    height: 200px;
}

</style>