<template>

  <div class="container">

    <div class="content">
      <div class="box">
        <h2> Hvor, hva, og når? </h2>
        <p class="text">
          OneDream fotballskole har aktivitetsdager mandag og tirsdag i høstferien (11.okt-12.okt). 
          Fotballskolen er for gutter og jenter fra 9 til 13 år. Dagene varer fra 09.00 – 13.00 og det 
          er lunsj for alle deltakere klokken 12.00. Om barnet har allergier anbefaler jeg å ha med mat 
          hjemmefra for å minimere sjansen for en uheldig situasjon. Det er gratis å delta. 
        </p>
        <p class="text">
          Fotballskolen er et arrangement laget for å gi barn et aktivitetstilbud i ferier, 
          og i dette tilfellet er vi heldig som har fått tilgang på de flotte fasilitetene til 
          <strong>
            <a 
              href="https://www.google.com/maps/place/Sportpark+Stange/@60.71536,11.1984785,17z/data=!3m1!4b1!4m5!3m4!1s0x4641e5218d18c5f9:0xfea48c4f723822e7!8m2!3d60.71536!4d11.2006673" 
              target="_blank" 
              rel="nofollow"
            > 
              Stange Sportsklubb.
            </a>
          </strong> 
        </p>
      </div>

      <div class="box">
        <h2> Vil du bidra? </h2>
        <p class="subheader"> - bli med på laget!</p>
        <p class="text"> 
          Dette er et non-profitt arrangement, og alle som er med som instruktører og ansvarlige 
          stiller frivillig på eget initiativ. Vi vil gjerne være på lag med alle, dersom du er 
          interessert i å bidra kan du sende mail til 
          <strong>
            <a 
              href="mailto:gardeskilf@gmail.com?subject=web:OneDreamFotballskole-bidra"
              target="_blank" 
              rel="nofollow"
            > 
              gardeskilf@gmail.com.
            </a>
          </strong>
        </p>
      </div>
      
    </div>

      <div class="content">

          <div class="box">
            <h2> Om oss </h2>
            <p class="text"> 
              Idrett og aktivitet skal være tilgjengelig for alle. OneDream jobber kontinuerlig med å forberede 
              idrettsarrangement for barn i en alder hvor sosialisering og aktivitet er utrolig viktig. Ved å ha 
              gode samarbeidspartnere har vi muligheten til å gi et godt tilbud til alle barn som deltar på fotballskolen. 
            </p>
            <p class="text"> 
              Arrangøren er meg: Gard Eskil Fraser, jeg studerer Sport Management ved Høgskolen i Molde, og har jobbet i Molde Fotballklubb 
              i et år. Både på skolen og på treningsfeltet har jeg lært og opplevd det meste innenfor idrett, og jeg anser all kunnskap og egenskaper 
              jeg har tillært meg som verktøy som jeg ønsker å bruke i mitt bidrag for et bedre og mer inkluderende samfunn.
            </p>
        </div>
      </div>

    </div>

</template>

<script>


export default {
  name: 'Content',

}

</script>

<style scoped>

.box {
  background-color:white;
  padding: 4vw;
  margin: 2vw 0;
}

.content {
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 4.5vw;
  margin-bottom: 0.5vw;
}

.subheader {
  margin-bottom: 1vw;
}

.box p:not(:first-of-type) {
  margin-top: 2.5vw;
}

@media only screen and (min-width: 900px) {

  .content {
    padding: 0 5vw;
    flex-direction: row;
  }

  .box:not(:first-of-type) {
    margin-left: 2vw;
  }

  h2 {
  font-size: 2vw;
  margin-bottom: 0.5vw;
}

.box .text:not(:first-of-type) {
  margin-top: 1.5vw;
}

.box {
  padding: 2vw 4vw;
  margin: 2vw 0;
}

}


</style>
