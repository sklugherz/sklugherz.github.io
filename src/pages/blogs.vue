<script setup>

</script>

<template>
    <ul>
        <li>
            <div class="link">
                <RouterLink to="/blogs/phantom-intruder">
                    <h3>Ph4nt0m 1ntrud3r challenge walkthrough from PicoCTF 2025</h3>
                </RouterLink>
            </div>
            <div class="desc">

            </div>
        </li>
    </ul>

</template>

<style scoped>

ul {
    list-style: none;
}

.link {
    text-underline-offset: 2px;
    text-decoration: underline white dashed;
}

.link:hover {
    text-decoration: underline #f67634 dashed;
    transition: all 0.3s;
}

</style>