<template>

    <div class="content">

      <div class="box">
        <h2>Når og hvor? </h2>
        <p>
          Fotballskolen vil foregå i uke 41 (høstferien 2021), og tar sted på 
          <strong>
            <a 
              href="https://www.google.com/maps/place/Sportpark+Stange/@60.71536,11.1984785,17z/data=!3m1!4b1!4m5!3m4!1s0x4641e5218d18c5f9:0xfea48c4f723822e7!8m2!3d60.71536!4d11.2006673" 
              target="_blank" 
              rel="nofollow"
            > 
              Stange idrettsplass.
            </a>
          </strong>
        </p>
      </div>

      <div class="box">
        <h2> Vil du bidra? </h2>
        <p> - bli med på laget!</p>
        <p> 
          Dette er et non-profitt arrangement, og alle som er med som instruktører og ansvarlige 
          stiller frivillig på eget initiativ. Vi vil gjerne være på lag med alle, dersom du er 
          interessert i å bidra kan du sende mail til
          <strong>
            <a 
              href="mailto:gardeskilf@gmail.com?subject=web | OneDreamFotballskole - bidra"
              target="_blank" 
              rel="nofollow"
            > 
              gardeskilf@gmail.com.
            </a>
          </strong>
        </p>
      </div>

    </div>

</template>

<script>


export default {
  name: 'Content',
}

</script>

<style scoped>

.content {
  padding: 1vw 2vw;
  display: flex;
  flex-direction: column;
}

.box {
  padding: 3vw;
  background-color: #e4e3e3f2;
  margin: 1.5vw 0;
}

h2 {
  font-size: 3vw;
}

@media only screen and (min-width: 900px) {


  .content {
    padding: 1vw 2vw;
    flex-direction: row;
  }

  .box {
    padding: 1vw;
    width: 50vw;
  }

  .box:first-of-type {
    margin-right: 1vw;
  }

  .box:last-of-type {
    margin-left: 1vw;
  }

  h2 {
    font-size: 1.5vw;
  }
}


</style>
