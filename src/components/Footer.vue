
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
    padding: 3vw;
    bottom: 0;
    position: static;
    background-color: #262726;
    color: white;
  }

  footer a {
    color: white;
    border-bottom: 0.2vh solid rgba(255,255,255,0.5);
    padding-bottom: 0.2vw;
  }

  h2 {
    font-size: 4.5vw;
    margin: 1vw 0;
  }

  h3 {
    font-size: 3vw;
    margin: 2vw 0;
  }

  p {
    font-size: 2.5vw;
    line-height: 4vw;
    margin: 1.2vw 0;
  }

  .cls-1 {
    fill:none;
    stroke:#000;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width: 2px;
  }

  .copyright {
    border-top: 0.2px solid #ffffff20;
    margin-top: 1vw;
    padding-top: 1vw;
  }

  /* Desktop */
@media only screen and (min-width: 900px) {

  footer {
    padding: 3vw;
  }

  footer a {
    border-bottom: 0.2vh solid rgba(255,255,255,0.5);
    padding-bottom: 0.2vw;
  }

  h2 {
    font-size: 1.5vw;
    margin: 1vw 0;
  }

  h3 {
    font-size: 1vw;
    margin: 2vw 0;
  }

  p {
    font-size: 1vw;
    line-height: 1.5vw;
    margin: 1.2vw 0;
  }

  .cls-1 {
    stroke-width: 2px;
  }

  .copyright {
    border-top: 0.2px solid #ffffff20;
    margin-top: 1vw;
    padding-top: 1vw;
  }
}

</style>