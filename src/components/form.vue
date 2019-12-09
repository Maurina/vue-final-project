<template>
    <div class="frame">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="onSubmit"
            class="form"
          v-on:submit.prevent="getResult(date)"
        >
            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>
    
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
           
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
           <!--     <h3>Choose your favorite day from June 16, 1995 to present</h3>
             <v-date-picker 
                  v-model="date" 
                  scrollable 
                  color="black" 
                  no-title
                  min="1995-06-16"
      
               ></v-date-picker> -->
               
            <v-btn
                :disabled="!valid"
                color="black white--text"
                class="mr-4 btn"
                type="submit"
                @click="onSubmit(formData)"
            >
            Submit
            </v-btn>
        </v-form>
        <div class="spacer"></div>
    </div>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators'



export default {

data: () => ({
   valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    date: '',
    formData: '',
    date: '',
    explanation:'',
    url:'',
    title: ''
  }),
  methods: {
    onSubmit(){
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        date: this.date
      }
   
      this.$store.dispatch('userLogIn', {
          name: this.name,
          date: this.date

      })
     
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
  },
};
</script>

<style scoped>
.form{
    background-color:white;
    width:50%;
    margin: 0 auto;
    padding: 2%;
}
h3{
  color: black;
}
.btn{
  margin-left: 2%;
}
.spacer{
    height: 200px;
}
</style>