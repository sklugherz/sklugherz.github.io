<script setup>


</script>

<template>
    <div class="main">
        <div class="aside">
            <ul>
                <li>
                    <p>Project 1</p>
                </li>
                <li>
                    <p>Project 2</p>
                </li>
                <li>
                    <p>Project 3</p>
                </li>
                <li>
                    <p>Project 4</p>
                </li>
                <li>
                    <p>Project 5</p>
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