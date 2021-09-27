<template>

  <NuxtLink to="/">
    <img class="logo" alt="logo" src="~/assets/logo.png" />
  </NuxtLink>
  
</template>

<style scoped>

.home .logo {
  width: 40vw;
  position: absolute;
  top: 2vw;
  left: 10vw;
}

.register .logo {
  width: 150px;
  margin: 0 auto;
  display: block;
  margin-bottom: 0;
}

/* Desktop */
@media only screen and (min-width: 900px) {

  .home .logo {
    width: 12vw;
    min-width: 220px;
    left: 5vw;
  }
}

</style>