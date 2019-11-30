<template>
    <div class="stars">
       <transition name="fadeOut" appear >
        <q class="quote" v-hightlight.delayed> We are at a point in history where a proper attention to space, and especially near space, may be absolutely crucial in bringing the world together. - Margaret Mead</q>
      </transition>
    
      <transition name="fadeOut" appear>
        <img src="/assets/images/earthLights.jpg" alt="Orians Belt">
      </transition> 
    
      <div class="spacer"></div>
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
  
},
}
</script>

<style scoped>

.quote{
  color: white;
  display: flex;
  justify-content: center;
}

img{
  width: 100%;
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
.spacer{
    height: 200px;
}
</style>