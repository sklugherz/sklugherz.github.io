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
                    {{ project.title }}<span class="arrows">&nbsp;>></span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="project">
            <div class="lighter">
                <h3>{{ currProject.title }}</h3>
                <img class="hero" :src=currProject.img alt="In Development; Image coming soon."/>
                <h5>Keywords: {{ currProject.keywords }}</h5>
                <p>{{ currProject.desc }}</p>
                <a class="gh-button" :href=currProject.github target="_blank">
                    <button class="button x">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                            <title>github</title>
                            <rect width="24" height="24" fill="none"></rect>
                            <path
                                d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                            ></path>
                            </g>
                        </svg>
                        Github
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

.gh-button {
    display: flex;
    padding-top: 3%;
    justify-content: center;
}

/* Inspired by TreepDeep From Uiverse.io 
    is modified
*/ 
.button.x {
  max-width: 320px;
  display: flex;
  padding: 0.5rem 1.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  align-items: center;
  border-radius: 0.5rem;
  border: 3px solid rgba(24, 23, 23, 0.25);
  gap: 0.75rem;
  color: #ffffff;
  background-color: #212737;
  cursor: pointer;
  transition: all 0.6s ease;
  text-decoration: none;
}

.button.x svg {
  height: 24px;
  width: 24px;
  fill: #fff;
  margin-right: 0.5rem;
  transition: all 0.6s ease;
}

.button.x:hover {
  transform: scale(1.02);
  background-color: #f67634;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* end */

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
    
    padding: 5%;
    border-radius: 25px;
    box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.2);
}

.hero {
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-height: 200px;
    width: clamp(300px, 80%, 900px);
    border: 1px solid white;
}

li {
    list-style: none;
    height: 50px;
    max-width: 200px;
    
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

.arrows { 
    display: none;
}

.selected {
    padding-left: 30px;
    font-size: 1.2em;
    transition: all .3s;
}

.selected .arrows {
    display: block;
}

li:has(.selected) {
    border-right: transparent;
}

.aside {
    width: 30%; 
}


</style>