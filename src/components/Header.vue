<template>

  <div class="header">
    <img class="header-image" alt="fotball bane" src="../assets/header.jpg" />
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <hgroup>
      <h1>OneDream Fotballskole</h1>
      <h2>- som verktøy for integrering</h2>
    </hgroup>
  </div>

</template>

<script>

export default {
  name: 'Header',
}
</script>


<style scoped>

.header {
  position: relative;
  text-align: center;
  color: rgba(255,255,255,0.9);
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -15px;
}

.header-image {
  transform: rotate(0deg);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 100%;
  filter: brightness(80%);}

hgroup {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
}

h2 {
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
}

.logo {
  width: 150px;
  position: absolute;
  top: 25px;
  left: 35px;

}

</style>


