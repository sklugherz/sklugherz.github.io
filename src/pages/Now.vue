<script setup>


</script>

<template>

    <h3>What I am up to:</h3>
    <ul>
        <li>
            <p>I am studying and practicing cybersecurity concepts over at TryHackMe and at <a href="https://app.letsdefend.io/user/mrpinkhats" target="_blank">LetsDefend</a>.</p>
            <iframe scrolling="no" src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3920906"></iframe>
        </li>
        <li>
            <p>Learning new penetration testing tools and attack surfaces over at <a href="https://play.picoctf.org/users/efilofi" target="_blank">PicoCTF</a>.</p>
        </li>
        <li>
            <p>Developing projects that spark my curiosity, with a current focus on mastering Vue.js.</p>
        </li>
    </ul>

</template>

<style scoped>

ul {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

a {
  border-bottom: dashed 1px white;
}

a:hover {
  border-bottom: dashed 1px #f67634;
}

iframe {
    padding-top: 5px;
    height: 100px;
    width: 330px;
    border: hidden;
}

iframe:hover {
    transform: scale(1.02);
    transition: all 0.3s;
}
</style>