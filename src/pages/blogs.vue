<script setup>

</script>

<template>
    <ul>
        <li>
            <div class="link">
                <RouterLink to="/blogs/phantom-intruder">
                    <h3>Ph4nt0m 1ntrud3r CTF Walkthrough</h3>
                </RouterLink>
            </div>
            <div class="desc">
                <p>
                    A walkthrough for a Capture the Flag challenge hosted on PicoCTF.
                    This walkthrough covers packet analysis, packet filtering, and 
                    data decoding to uncover the flag in a simulated SYN Flood attack.
                </p>
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

h3 {
    padding-bottom: 5px;
}

li {
    padding-bottom: 10px;
}

</style>