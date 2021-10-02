<template>

  <div class="header">
    
    <img class="header-image" alt="fotballbane" src="~/assets/header.jpg" />
    <Logo />

    <hgroup>
      <h1>OneDream Fotballskole</h1>
      <h2>- som verktøy for integrering</h2>
    </hgroup>

    <NuxtLink to="/register" class="button"> Meld deg på! </NuxtLink>

  </div>

</template>

<script>

import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: {
    Logo
  }
}

</script>

<style scoped>

.header {
  position: relative;
  text-align: center;
  color: rgba(255,255,255,0.9);
  margin-left: -20px;
  overflow: hidden;
}

h2 {
  font-size: 2.5vw;
  font-weight: 400;
}

.header-image {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1.4);
  width: 100%;
  filter: brightness(80%);
}

hgroup {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button, .button {
  top: 85%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%)
}


@media only screen and (min-width: 900px) {

  .header-image {
    height: 25vh;
    min-height: 200px;
    filter: hue-rotate(75deg);
    object-fit: cover;
    object-position: -50px 69%;
    transform: scale(1.2) rotate(180deg);
  }

  h1 {
    font-size: 2.5vw;
    line-height: 3vh;
  }

  h2 {
    font-size: 1.5vw;
  }

  hgroup {
    top: 40%;
  }

  button, .button {
    top: 65%;
  }


}

</style>


