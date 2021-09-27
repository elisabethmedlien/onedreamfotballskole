<template>

  <div class="sponsors">
    <img src="~/assets/sponsors/stangesportsklubb.png" alt="Stange Sportsklubb" />
  </div>
  
</template>

<script>
export default {
  name: 'Sponsors'

}
</script>

<style>

img {
  width: 20vw;
}

.sponsors {
  padding: 2vw;
  padding-top: 0;

}

/* Desktop */
@media only screen and (min-width: 900px) {

  img {
    width: 5vw
  }

}

</style>