<template>
    <div class="stars">
       <transition name="fade" appear >
                 
              <q class="quote" :v-for="quote in quotes"  > {{ quote }}</q>
       </transition>
       <transition name="fadeOut" appear >
              <q class="quote" > We are at a point in history where a proper attention to space, and especially near space, may be absolutely crucial in bringing the world together. - Margaret Mead</q>
            </transition>
    </div>
</template>

<script>
export default {
      data: () =>{
        return{
          quotes: [ 
              "That’s one small step for man, one giant leap for mankind. - Neil Armstrong",
              "We are at a point in history where a proper attention to space, and especially near space, may be absolutely crucial in bringing the world together. - Margaret Mead"
          ]
          
        }
  
}
}
</script>

<style scoped>

.quote{
  color: white;
  display: flex;
  justify-content: center;
}

/* animation */
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 3s;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
  transition: opacity 3s;
  opacity: 0;
}
.fadeOut-enter{
    opacity: 0;
}
.fadeOut-enter-active{
    transition: opacity 15s;
}
.fadeOut-leave{
    opacity: 1;
}
.fadeOut-leave-active{
  transition: opacity 5s;
  opacity: 0;
}
</style>