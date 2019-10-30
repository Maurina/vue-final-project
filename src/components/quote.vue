<template>
    <div class="stars">
       <transition name="fade" appear >
                 
              <q class="quote" >That’s one small step for man, one giant leap for mankind. - Neil Armstrong</q>
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
            now: new Date,
            seconds: new Date().getSeconds(),
            countDown: 10
        }
      },
      method:{
          countDownTimer(){
              if(this.countDown > 0){
                  setTimeout(() =>{
                      this.countDown -= 1
                      this.countDownTimer()
                  }, 1000)
              }
          }
      },
      created(){
         this.countDownTimer()
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