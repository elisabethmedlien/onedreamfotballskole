<template>

  <div class="header">
    
    <img class="header-image" alt="fotball bane" src="~/assets/header.jpg" />
    <img class="logo" alt="logo" src="~/assets/logo.png" />

    <hgroup>
      <h1>OneDream Fotballskole</h1>
      <h2>- som verktøy for integrering</h2>
    </hgroup>

    <NuxtLink to="/register">
        <button> Registrer deg! </button>
    </NuxtLink>

  </div>

</template>

<style scoped>

.header {
  position: relative;
  text-align: center;
  color: rgba(255,255,255,0.9);
  margin-left: -20px;
  overflow: hidden;

}

h2 {
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
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

.logo {
  width: 150px;
  position: absolute;
  top: 25px;
  left: 35px;
}

button {
  top: 85%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%)
}

</style>


