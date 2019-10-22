<template>
 <div class="menu">
    <v-row justify="space-between">
           <h1> NASA </h1>
      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon v-on="on"
            dark
          >
          <v-icon>mdi-dots-vertical</v-icon>
      
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click=""
            router :to="items.route"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
 
     
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      showMenu: false,
      x: 0,
      y: 0,
      items: [
        { title: 'Home', route: '/' },
        { title: 'About', route: '/about' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),

    methods: {
      show (e) {
        e.preventDefault()
        this.showMenu = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.showMenu = true
        })
      },
    },
  }
  </script>

<style scoped>
.menu{
  margin: 0 auto;
  background: black;
  width: 100%;
  color: white;
  padding: 2%;
}
</style>
