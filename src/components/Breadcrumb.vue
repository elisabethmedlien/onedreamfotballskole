<template>
  <nav>
    <ul>
      <li><strong><NuxtLink to="/">Hjem</NuxtLink></strong></li> 
      <span> > </span>
      <li>Register</li>
    </ul>
  </nav>
</template>

<style scoped>

nav ul li {
  display: inline-block;
}

nav {
  font-size: 2.5vw;
  margin: 3vw 0;
  margin-left: 2vw;
}

@media only screen and (min-width: 900px) {

  nav {
    font-size: 1vw;
    margin-left: 5vw;
  }

}
</style>