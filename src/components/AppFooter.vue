<script setup>


</script>

<template>
    <footer>
    <p>© Stephen Klugherz</p>
        <ul>
            <li>
                <a href="https://github.com/sklugherz" target="_blank"><img alt="Github Logo" src="../assets/imgs/socials/social-gh-logo.png"></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/stephen-klugherz-778101233" target="_blank"><img alt="LinkedIn Logo" src="../assets/imgs/socials/lilogo.png"></a>
            </li>
            <li>
                <a href="https://mrpinkhats.itch.io" target="_blank"><img alt="itch.io PFP" src="../assets/imgs/socials/itchlogo.png"></a>
            </li>
            <li>
                <a href="https://play.picoctf.org/users/efilofi" target="_blank"><img alt="PicoCTF Logo" src="../assets/imgs/socials/picoctf.png"></a>
            </li>
        </ul>
    </footer>
</template>

<style scoped>

footer {
    border-top: solid 1px #f67634;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-size: .9em;
    padding-top: 10px;
}

ul {
    display: flex;
}

li {
    padding-left: 20px;
    list-style: none;
}

img:hover {
    transition: all .03s;
    transform: scale(1.2);
}

</style>