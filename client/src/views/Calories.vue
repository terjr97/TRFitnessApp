<template>
    <div>
        <div class="field">
  <div class="control">
    <input v-model="name" class="input is-primary" type="text" placeholder="Enter Name of Food">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="calories" class="input is-info" type="value" placeholder="Enter Calories of Food">
  </div>
</div>
<button class="button is-info is-medium is-fullwidth" @click="cal()">Click Here to add Calories</button>
<div>
<li v-for="(c, i) in UserProfile.foodCalories " :key="i" class="panel-block">
                    {{c}}
                </li>
</div>
</div>
</template>

<script>
import { UserProfile } from "../models/User.js";


export default {
   data: ()=> ({
        UserProfile,
        name: "",
        calories: ""
    }),
    methods: {
      cal(){
      UserProfile.addfood(name,calories);
      }
    }
}


</script>>