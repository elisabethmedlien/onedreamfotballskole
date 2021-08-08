<template>

  <div class="header">
    <img class="header-image" alt="fotball bane" src="../assets/header.jpg" />
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <hgroup>
      <h1>OneDream Fotballskole</h1>
      <h2>- som verktøy for integrering</h2>
    </hgroup>
    <button> Registrer deg! </button>
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
}

.header-image {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 120%;
  filter: brightness(80%);
  overflow: hidden;
  margin-left: -20px;
  margin-top: -15px;
}

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

button {
  top: 85%;
  left: 50%;
  background-color: #de175b;
  color: white;
  position: absolute;
  padding: 5px 10px;
  transform: translate(-50%, -50%)
}

</style>


