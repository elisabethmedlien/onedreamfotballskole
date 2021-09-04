
<template>

  <footer>

    <div>

    <h2>Kontakt oss</h2>
    <p><Phone /> <a href="tel:+4795231298">+47 952 31 298 </a> </p>
    <p> <Mail /> onedream@onedream.no </p> 

    <h3> Følg oss på sosiale medier</h3>
    <p> <Facebook /> onedreamfotballskole </p> 
    <p> <Instagram /> onedream.no </p>

    </div>

    <div class="copyright">
      <p> &copy; <span>{{new Date().getFullYear()}} </span> OneDream Fotballskole </p>
    </div>

  </footer>
  
</template>


<script>

import Facebook from './icons/Facebook.vue';
import Instagram from './icons/Instagram.vue';
import Mail from './icons/Mail.vue';
import Phone from './icons/Phone.vue';

export default {
  name:'Footer',
  components: {
    Facebook,
    Instagram,
    Mail,
    Phone,
  },
  data () {
    return {


    }
  }

}
</script>


<style scoped>
  footer {
    padding: 15px;
    bottom: 0;
    position: static;
    background-color: #262726;
    color: white;
  }

  footer a {
    color: white;
    border-bottom: 0.2px solid rgba(255,255,255,0.5);
    padding-bottom: 2px;
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


  .cls-1 {
    fill:none;
    stroke:#000;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:2px;
  }


  .icons svg {
    width: 45px !important;
  }

  .copyright {
    border-top: 0.2px solid #ffffff20;
    margin-top: 15px;
    padding-top: 15px;
  }

</style>