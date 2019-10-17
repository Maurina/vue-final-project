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
   <form>
      <v-text-field
        v-model="userData.name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="userData.email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-btn  class="submitBtn black white--text" @click="submit">Sign Up</v-btn>
    </form>
    </v-card>
    <h1> email {{ userData.email }} </h1>
    <h2> name {{ userData.name}} </h2>
</div>    
</template>

<script>

export default {
  data() {
    return{
      valid: true,
      userData: {
        email: '',
        name: ''
      }
    }
  }
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