<template>
    <div>
        <div class="field">
  <div class="control">
    <input v-model="age" class="input is-primary" type="value" placeholder="Enter Age in Years">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="height" class="input is-warning" type="value" placeholder="Enter Height in Inches">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="weight" class="input is-danger" type="value" placeholder="Enter Weight in Pounds">
  </div>
</div>
<button class="button is-info is-medium is-fullwidth" @click="set()">Set User Data</button>

 <div class="panel">
                <p class="panel-heading">
                    Daily Calories
                </p>
                <p id="cal"> </p>
            </div>
 <div class="panel">
                <p class="panel-heading">
                    Remaining Calories  
                </p>
                <p id ="rem"> </p>
            </div>
    </div>
</template>

<script>
import { UserProfile } from "../models/User";

export default {
   data: ()=> ({
        UserProfile,
        weight: "",
        height: "",
        age: ""
    }),
    methods: {
      set(){
          UserProfile.submitData(weight,height);
          document.getElementById("cal").innerHTML = UserProfile.calories;}
    }
}
</script>