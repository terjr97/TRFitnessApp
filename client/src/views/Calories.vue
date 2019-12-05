<template>
    <div>
        <div class="field">
  <div class="control">
    <input id="name" class="input is-primary" type="text" placeholder="Enter Name of Food">
  </div>
</div>
<div class="field">
  <div class="control">
    <input id="calories" class="input is-info" type="value" placeholder="Enter Calories of Food">
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

function cal(){
UserProfile.addfood(document.getElementById("name"),document.getElementById("calories"));
}

export default {
   data: ()=> ({
        UserProfile: {},
    }),
}


</script>>