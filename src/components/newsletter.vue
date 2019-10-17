<template>
<div>
     <v-card
      class="mx-auto vCard"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/pia20027_updated.jpg"
      >
        <v-card-title>Newsletter Sign Up</v-card-title>
      </v-img>

   
    <v-form
      class="form"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="name"
     
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

      <v-checkbox
        v-model="checkbox"
        
        label="Do you want to be notified about discounts?"
        
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
       
        class="submitBtn black white--text"
        @click="submit"
      >
        Sign Up
      </v-btn>
    </v-form>

    </v-card>
    <h1> email {{ email }} </h1>
    <h2> name {{ name}} </h2>
</div>    
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
       
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    },
  }
</script>

<style scoped>
 form{
     padding: 3%;
 }

.submitBtn{
    width: 100%;
}
.vCard{
    margin: 2%;
}
</style>