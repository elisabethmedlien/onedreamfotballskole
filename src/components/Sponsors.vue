<template>

  <div class="sponsors">
    <img src="~/assets/sponsors/stangesportsklubb.png" alt="Stange Sportsklubb" />
    <img src="~/assets/sponsors/kiwi-logo.jpg" alt="Kiwi" />
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
  margin-right: 2vw;
}

.sponsors {
  padding: 2vw;
  padding-top: 0;
  display: flex;
  align-items: center;

}

/* Desktop */
@media only screen and (min-width: 900px) {

  img {
    width: 5vw;
  }

  .sponsors {
    padding: 2vw 5vw;
    padding-top: 0;
  }

}

</style>