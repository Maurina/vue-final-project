<template>
  <v-app>
   <div>
    <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
 
   </div>
  </v-app>
</template>

<script>
import header from './components/header'



export default {
  components: {
    'app-header' : header,
   
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
.slide-enter-active{
  animation: slide-in 1000ms ease-out forwards;
}
.slide-leave-active{
  animation: slide-out 1000ms ease-out forwards;
}

@keyframes slide-in{
  from{
    transform: translateX(-1900px);
    opacity: 0;  
    }
    to{
      transform: translateX(0);
      opacity: 1;
    }
}
@keyframes slide-out{
  from{
    transform: translateY(0);
    opacity: 1;
  }
  to{
    transform: translateY(-500px);
    opacity: 0;
  }
}

</style>