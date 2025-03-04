<script setup>

const projects = ref({id:'1',
                    title: 'P1', 
                    desc: 'p1 is awesome', 
                    img: '../assets/imgs/picoctf.png'})


</script>

<template>
    <div class="main">
        <div class="aside">
            <ul>>
                <li v-for="project in projects" :key="project.id">
                    {{ project.title }}
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
    align-items: center;
    justify-content: center;
}

li:first-child {
    border-top: 1px solid white;
}

.aside {
    width: 30%; 
}

img {
    width: 300px;
    height: 200px;
}

</style>