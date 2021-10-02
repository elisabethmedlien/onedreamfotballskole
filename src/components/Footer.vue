
<template>

  <footer>

    <div>

      <div>
        <h2>Kontakt oss</h2>
        <p class="tel"> <Phone /> <a href="tel:+4795231298">+47 952 31 298 </a> </p>
        <p> <Mail /> <a  href="mailto:gardeskilf@gmail.com?subject=web:OneDreamFotballskole-kontakt" target="_blank" rel="nofollow"> Mail </a> </p> 
      </div>

      <div>
        <h3> Følg oss på sosiale medier</h3>
        <p> <Facebook /> <a href="https://www.facebook.com/onedreamfotballskole" target="blank" rel="nofollow">  Facebook </a> </p> 
        <p> <Instagram /> <a href="https://www.instagram.com/onedream.no/?hl=nb" target="blank" rel="nofollow"> Instagram </a> </p>
      </div>

    </div>

    <div class="copyright">
      <p> Copyright &copy; <span>{{new Date().getFullYear()}} </span> OneDream Fotballskole </p>
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
    padding-bottom: 1vw;
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

  footer>div:first-of-type {
    padding-bottom: 1vw;
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
    padding: 3vw 5vw;
    min-height: 20vh;
    font-family: Whyte, sans-serif;
  }

  footer a {
    border-bottom: 0.2vh solid rgba(255,255,255,0.2);
    padding-bottom: 0.2vw;
  }

  footer a:hover {
    border-bottom-color: #db2965;
  }

  footer>div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  footer>div:first-of-type div {
    margin-right: 3.5vw;
  }

  footer>div:first-of-type p {
    display: flex;
    
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

  .tel a {
    border-bottom: none;
    pointer-events: none;
  }
}

</style>