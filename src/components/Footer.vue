
<template>

  <footer>

    <h2>Kontakt oss</h2>
    <p> <Phone/> +47 952 31 298 </p> 
    <p> <Mail /> onedream@onedream.no </p> 

    <h3> Følg oss på sosiale medier</h3>
    <p> <Facebook/> onedreamfotballskole </p> 
    <p> <Instagram /> onedream.no </p> 

  </footer>
  
</template>


<script>
import { Facebook, Instagram, Phone, Mail  } from 'mdue';

export default {
  name:'Footer',
  components: {
    Phone,
    Mail,
    Facebook,
    Instagram 
  }

}
</script>


<style scoped>
  footer {
    padding: 15px;
    width: 100%;
    bottom: 0;
    position: static;
    background-color: #262726;
    color: white;
  }

  h2 {
    font-size: 16px;
    margin: 15px 0;
  }

  h3 {
    font-size: 12px;
    margin: 10px 0;
  }

  p {
    font-size: 11px;
    line-height: 12px;
    margin: 7px 0;
  }

  svg {
    color: #de175b;
    font-size: 16px;
    vertical-align: middle;
  }

</style>