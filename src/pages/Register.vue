<template>
  <div class="register">
    <header>
      <Logo />
    </header>

    <Breadcrumb />

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
          <input id="attendant_first_name" type="text" name="attendant_first_name" class="form-input attendant_first_name" validate required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
        <div class="form-field">
          <label for="attendant_last_name">Etternavn *</label>
          <input id="attendant_last_name" type="text" name="attendant_last_name" class="form-input attendant_last_name" required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field attendant-age-field">
          <label for="attendant_age">Alderskull *</label>
          <input id="attendant_age" type="number" inputmode="numeric" name="attendant_age" class="form-input attendant_age" required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
        <div class="form-group-radio">
    
          <label class="form-field-radio">
            <span class="radio__input">
              <input id="attendant_gender_female" type="radio" name="attendant_gender" value="jente" checked />
              <span class="radio__control"></span>
            </span>
            <span class="radio__label">Jente</span>
          </label>
    
          <label class="form-field-radio">
            <span class="radio__input">
              <input id="attendant_gender_male" type="radio" name="attendant_gender" value="gutt" />
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
          <input id="guardian_first_name" type="text" name="guardian_first_name" class="form-input" required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
        <div class="form-field">
          <label for="guardian_last_name">Etternavn *</label>
          <input id="guardian_last_name" type="text" name="guardian_last_name" class="form-input" required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field">
          <label for="guardian_email">Email</label>
          <input id="guardian_email" type="email" name="guardian_email" class="form-input" @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
        <div class="form-field">
          <label for="guardian_phone">Tlf *</label>
          <input id="guardian_phone" type="tel" name="guardian_phone" class="form-input" maxlength="8" required @focus="activate" @blur="deactivate">
          <span class="helper-text error"></span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-field form-message">
          <label class="message-label" for="message" style="margin-bottom: 25px;">Melding</label>
          <span class="helper-text" style="margin-bottom: 25px;">Allergier, medisiner og annen nødvendig informasjon.</span>

          <textarea id="message" name="message" rows="1"></textarea>
          <span class="helper-text error"></span>
        </div>
      </div>

      <div class="form-field-check">
        <input id="permission" name="permission" type="checkbox" />
        <label for="permission">Jeg godkjenner avfotografering av deltakeren under fotballskolen.</label>
      </div>

      <div class="button-container">
        <button id="submitButton" type="submit" class="button cta" @click="submitForm">Send inn</button>
      </div>

    </form>
    <Footer />

  <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Registrering sendt!</p>
    </div>

  </div>
  </div>

</template>


<script>

import Logo from '../components/Logo.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Footer from '../components/Footer.vue';

  export default {
    name: 'Register',
    components: {
      Breadcrumb,
      Footer,
      Logo
    },

  
    data() {

      return { }
    }, 

    methods: {

      isRequired(id) { return document.getElementById(id).hasAttribute('required') },

      isEmpty(value) { return value === "" },

      doValidation(id) { return id !== "attendant_gender" },

      hasNumber(string) { return /[0-9]$/.test(string) },

      hasSpecialChar(string) { return /[-[\]{}()*+!<>=:?.\\^$|#\s,"%&@/]$/.test(string) },
      
      hasEmailFormat(email) { return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) },

      has8Digits(number) { return /^([0-9]{8})$/.test(number) },

      has4Digits(age) { return /^([0-9]{4})$/.test(age)},

      getAge(yearBorn) { return new Date().getFullYear() - yearBorn },

      isTooYoung(age, min) { return age <= min },

      isTooOld(age, max) { return age >= max },

      removeErrorMessage(id) { document.getElementById(id).parentNode.lastChild.innerHTML = "" },

      errorMessage(id, string) {
        document.getElementById(id).parentNode.lastChild.innerHTML = string;
        window.location.href = '#registerForm';
      },

      activate(event) {
        const formField = document.getElementById(event.target.id); 
        formField.parentElement.classList.add("is-active");
        
        if (!formField.parentElement.classList.value.includes("is-completed")){ formField.parentElement.classList.add("is-completed")}
      },

      deactivate(event) {
        const formField = document.getElementById(event.target.id); 
        formField.parentElement.classList.remove("is-active");

        if (formField.value === "") { return formField.parentElement.classList.remove("is-completed")}
      },

      inputIsCompleted(input) { if (input.value !== "") { input.parentElement.classList.add("is-completed")} },

      validateFields(id, value) {

        let valid = true;

        switch (id) {
          case "attendant_first_name":
          case "attendant_last_name": 
          case "guardian_first_name":
          case "guardian_last_name":

            if (this.isRequired(id) && this.isEmpty(value)) { this.errorMessage(id, "Feltet kan ikke være tomt"); valid=false }
            else if (this.hasNumber(value)) { this.errorMessage(id, "tall i navn"); valid=false } 
            else if (this.hasSpecialChar(value)) { this.errorMessage(id, "spesielle karakterer"); valid=false} 
            else { this.removeErrorMessage(id)}
            break;

          case "attendant_age":

            if (this.isRequired(id) && this.isEmpty(value)) { this.errorMessage(id, "Feltet kan ikke være tomt"); valid=false }
            else if (!this.has4Digits(value)) { this.errorMessage(id, "må være 4 sifre"); valid=false}
            else if (this.isTooYoung(this.getAge(value), 4)) { this.errorMessage(id, "Deltakeren er for ung til å delta"); valid=false}
            else if (this.isTooOld(this.getAge(value), 20)) { this.errorMessage(id, "Deltakeren er for gammel til å delta"); valid=false }
            else { this.removeErrorMessage(id)}
            break;

          case "guardian_phone":

            if (this.isRequired(id) && this.isEmpty(value)) { this.errorMessage(id, "Feltet kan ikke være tomt"); valid=false}
            else if (!this.has8Digits(value)) { this.errorMessage(id, "telefonnummer må være 8 sifre"); valid=false} 
            else { this.removeErrorMessage(id);}
            break;

          case "guardian_email":
            if (!this.isRequired(id) && !this.isEmpty(value)) { 
              if (!this.hasEmailFormat(value)) { this.errorMessage(id, "Email ikke godkjent"); valid=false } 
              else { this.removeErrorMessage(id) }
            }
            else { this.removeErrorMessage(id) }
            break;

          case "message":
            break;
        }

        return valid;
      },

      checkForm(data) {

        let valid = true;

        for (const entry of data.entries()) {

          if (this.doValidation(entry[0])) {

            if (!this.validateFields(entry[0], entry[1])) {
              valid = false;
            }
          }
        }
        
        return valid;

      },

      showModal(bool) { const show = bool ? document.getElementById("myModal").style.display = "block" : document.getElementById("modal").style.display = "none"; return show },

      submitForm(event){
        event.preventDefault();

        const registerForm = document.getElementById("registerForm");
        const f = new FormData(registerForm);

        if (this.checkForm(f)){
          console.log("form submitted")

          const formData = new FormData();
          const permission = f.get('permission') === null ? 'Nei' : 'Ja';

          formData.append("entry.319811942", f.get('attendant_first_name'));
          formData.append("entry.1492493618", f.get('attendant_last_name'));
          formData.append("entry.2062468631", f.get('attendant_age'));
          formData.append("entry.1754952157", f.get('attendant_gender'));
          formData.append("entry.1117801700", f.get('guardian_last_name') + ", " + f.get('guardian_first_name'));
          formData.append("entry.1000720745", f.get('guardian_phone'));
          formData.append("entry.532607403" ,f.get('guardian_email'));
          formData.append("entry.244621789", f.get('message'));
          formData.append("entry.1956375263", permission);

          const testurl = 'https://docs.google.com/forms/d/1XU-DbafvYGCYbWduEIHAioTq3j4X8h_GFf1BMGQc7bI/formResponse';

          fetch(testurl, {
            method: "POST",
            cache: "no-cache",
            mode: "no-cors",
            redirect: "follow",
            body: formData,
            headers: {
              'Content-Type': 'text',
          },
          })
          .then(response => {
            console.log(response); 
            this.showModal(true)
          })
          .catch(error => console.log(error) );
        }

      }
    },
  }



    
</script>



<style scoped>


.form-field-check {
  display: flex;
  flex-direction: row;
}

.form-field-check input {
  width: auto !important;
  align-self: left;
  justify-self: left;
}

.form-field-check label {
  transform: translateY(0) !important;
  transition: none;
  margin-left: 15px;
}

header {
  display: block;
  background-color: #262726;
  padding: 3px 0;
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
  padding: 10px 15px;
  background-color: #e4e3e3f2;
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
  font-size: 14px;
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
  background: radial-gradient(#262726 50%, rgba(255, 0, 0, 0) 51%);
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
  font-size: 9px;
  padding-top: 2px;
}

.helper-text.error {
  color: #9a1006;
}

form .form-message .helper-text {
  margin-bottom: 25px;
}




/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>
