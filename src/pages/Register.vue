<template>
  <div class="register">
    <header>
      <img class="logo" alt="logo" src="~/assets/logo.png" />
    </header>

    <nav class="breadcrumb">
      <ul class="breadcrumb">
        <NuxtLink to="/">
          <li><strong><a href="#">Hjem</a></strong></li> 
        </NuxtLink>
        <span> > </span>
        <li>Register</li>
      </ul>
    </nav>

    <hgroup>
      <h1>Meld deg på!</h1>
      <h2>Påmeldingsskjema for Onedream Fotballskole </h2>
    </hgroup>



    <form id="registerForm">

      <div class="form-heading">
        <p>Deltaker</p>
        <small>Fyll inn alle felter for personen som skal delta</small>
      </div>
      <div class="form-group">
        <div class="form-field">
          <label for="attendant_first_name">Fornavn *</label>
          <input @focus="activate" @blur="deactivate" id="attendant_first_name" type="text" name="attendant_first_name" class="form-input attendant_first_name" validate required>
          <span class="helper-text"></span>
        </div>
        <div class="form-field">
          <label for="attendant_last_name">Etternavn *</label>
          <input @focus="activate" @blur="deactivate" id="attendant_last_name" type="text" name="attendant_last_name" class="form-input attendant_last_name validate required" required>
          <span class="helper-text"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field attendant-age-field">
          <label for="attendant_age">Alderskull *</label>
          <input @focus="activate" @blur="deactivate" id="attendant_age" type="number" name="attendant_age" class="form-input attendant_age validate required" required >
          <span class="helper-text"></span>
        </div>
        <div class="form-group-radio">
    
          <label class="form-field-radio">
            <span class="radio__input">
              <input type="radio" id="attendant_gender_female" name="attendant_gender" value="jente" checked />
              <span class="radio__control"></span>
            </span>
            <span class="radio__label">Jente</span>
          </label>
    
          <label class="form-field-radio">
            <span class="radio__input">
              <input type="radio" id="attendant_gender_male" name="attendant_gender" value="gutt" />
              <span class="radio__control"></span>
            </span>
            <span class="radio__label">Gutt</span>
          </label>
          
        </div>
      </div>
      <div class="form-heading">
        <p>Verge</p>
        <small>Fyll inn alle felter for personen som står ansvarlig for deltakeren </small>
      </div>
      <div class="form-group">
        <div class="form-field">
          <label for="guardian_first_name">Fornavn *</label>
          <input @focus="activate" @blur="deactivate" id="guardian_first_name" type="text" name="guardian_first_name" class="form-input validate required" required >
          <span class="helper-text"></span>
        </div>
        <div class="form-field">
          <label for="guardian_last_name">Etternavn *</label>
          <input @focus="activate" @blur="deactivate" id="guardian_last_name" type="text" name="guardian_last_name" class="form-input validate required" required >
          <span class="helper-text"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field">
          <label for="guardian_email">Email</label>
          <input @focus="activate" @blur="deactivate" id="guardian_email" type="email" name="guardian_email" class="form-input validate" >
          <span class="helper-text"></span>
        </div>
        <div class="form-field">
          <label for="guardian_phone">Tlf *</label>
          <input @focus="activate" @blur="deactivate" id="guardian_phone" type="number" name="guardian_phone" class="form-input validate required" required >
          <span class="helper-text"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field form-message">
          <label class="message-label" for="message" style="margin-bottom: 25px;">Melding</label>
          <span class="helper-text" style="margin-bottom: 25px;">Allergier, medisiner og annen nødvendig informasjon.</span>

          <textarea id="message" name="message" class="validate" rows="1"></textarea>
          <span class="helper-text"></span>
        </div>
      </div>
      <div><span class="helper-text" id="submit-error"></span></div>
      <div class="button-container">
        <button type="submit" class="button cta" id="submitButton">Send inn</button>
      </div>

    </form>
    <Footer />
  </div>
</template>


<script>

import Footer from '../components/Footer.vue';

  export default {
    name: 'Register',
    components: {
      Footer

    },
    data() {
      return {


        activate(event) {
          const formField = document.getElementById(event.target.id); 
          formField.parentElement.classList.add("is-active");
          
          if (!formField.parentElement.classList.value.includes("is-completed")){
            formField.parentElement.classList.add("is-completed");
          }
        },

        deactivate(event) {
          const formField = document.getElementById(event.target.id); 
          formField.parentElement.classList.remove("is-active");

          if (formField.value === "") {
            return formField.parentElement.classList.remove("is-completed");
          }
        },

        inputIsCompleted(input) {
          if (input.value !== ""){
            input.parentElement.classList.add("is-completed");
          } 
        },
      }
    }, 
  }
    
</script>



<style scoped>



header {
  display: block;
  background-color: #262726;
  padding: 3px 0;
}

.logo {
  width: 150px;
  margin: 0 auto;
  display: block;
  margin-bottom: 0;
}

nav ul li{
  display: inline-block;
}

nav {
  font-size: 11px;
  margin: 15px 0;
  margin-left: 15px;
}

hgroup {
  margin-top: 25px;
  margin-left: 15px;
}

h1 {
  margin-bottom: 5px;
}

h2 {
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
}


#registerForm {
    margin: 25px 15px;
}
.p-1 {
  padding: 5%;
  padding-bottom: 7%;
}

.m-1 {
  margin: 0.5em 1.5em;
}

form {
  margin-top: 45px;
}

form small {
  font-size: 75%;
}

form p {
  margin-bottom: 10px;
}

form label {
  color: black;
  display: block;
  font-size: 16px;
}

form label:not([class="attendant_age"]) {
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

form [type="radio"]:not(:checked), form [type="radio"]:checked {
  position: initial;
  opacity: 1;
  height: 1rem;
}

form .form-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

form .form-group .form-field:not(:last-child) {
  margin-right: 15px;
}

form .form-group .form-field {
  width: 100%;
  padding: 15px 0 0 0;
  position: relative;
  bottom: 0;
  left: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

input {
  font-size: 12px;
}

form .form-group .is-active input {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}

.is-active label:not([for="attendant_age"]) {
  color: black;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.is-active input {
  border-bottom-color: black;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

form .form-group .is-completed label:not([class="attendant_age"]) {
  font-size: 12px;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  padding-bottom: 5px;
}

form .form-message {
  width: 100%;
  margin-right: 0 !important;
}

form .form-group-radio {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 70%;
  margin-bottom: 32px;
}

form .form-group-radio .form-field-radio:not(:last-child) {
  margin-right: 25px;
}

form .form-group-radio .form-field-radio {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}

form .form-group-radio .form-field-radio .radio__input {
  margin-right: 0.75em;
}

form .form-group-radio .form-field-radio .radio__control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid black;
}

form .form-group-radio .form-field-radio .radio__label {
  line-height: 1;
}

form .form-group-radio .form-field-radio .radio__input input {
  opacity: 0;
  width: 0;
  height: 0;
}

form .form-group-radio .form-field-radio .radio__input input:checked + .radio__control {
  background: radial-gradient(#26a69a 50%, rgba(255, 0, 0, 0) 51%);
}

form input:not([type="submit"]), form textarea {
  color: black !important;
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  outline: none;
  width: 100%;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  position: relative;
}

label {
  padding-bottom: 2px;
}

form select {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  color: black;
  padding: 5px 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;

  /* get rid of default appearance for IE8, 9 and 10 */

  background-color: white;
  margin-top: 5px;
  outline: none;
}

form select:focus {
  border-color: black;
  outline: none;
}

form input:focus, form textarea:focus, form select:focus {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

form .form-add {
  margin-top: 25px;
}

form div.form-heading:not(:first-of-type) {
  margin-top: 30px;
}


#registerForm input:-webkit-autofill,
#registerForm input:-webkit-autofill:hover,
#registerForm input:-webkit-autofill:focus,
#registerForm textarea:-webkit-autofill,
#registerForm textarea:-webkit-autofill:hover,
#registerForm textarea:-webkit-autofill:focus,
#registerForm select:-webkit-autofill,
#registerForm select:-webkit-autofill:hover,
#registerForm select:-webkit-autofill:focus,
#registerForm input:-internal-autofill-selected {
  border: none;
  background-color: transparent !important;
  border-bottom: 1px solid black !important;
  -webkit-text-fill-color: black !important;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
  font-size: 12px;
  /* -webkit-transform: translateY(0);
          transform: translateY(0);
  padding-bottom: 5px; */
}

#submit-error {
  text-align: right;
}

/* helper-text */

.helper-text {
  position: relative;
  min-height: 18px;
  display: block;
  font-size: 12px;
}

.helper-text.error {
  color: red;
}

form .form-message .helper-text {
  margin-bottom: 25px;
}

</style>
