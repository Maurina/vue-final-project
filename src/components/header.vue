<template>
    <v-app>
        <v-card >
            <v-card-title class="black white--text">
                <span class="headline">Menu</span>
                <v-spacer></v-spacer>
                <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn dark icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                   <v-list>
                       <v-list-item v-for="(item, i) in items" :key="i" @click="">
                           <v-list-item-title> {{ item.title }} </v-list-item-title>
                       </v-list-item>
                   </v-list>
                </v-menu> 
            </v-card-title>   
        </v-card> 
             
    </v-app>
</template>

<script>
export default {
    data : () => ({
        items: [
            {title: 'First Page'},
            {title: 'Second Page'},
            {title: 'Third Page'},
        ]
    })
}
</script>

<style scoped>

</style>