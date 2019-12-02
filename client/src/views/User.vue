<template>
    <div>
        <div class="field">
  <div class="control">
    <input v-model="age" class="input is-primary" type="text" placeholder="Enter Age in Years">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="height" class="input is-warning" type="text" placeholder="Enter Height in Inches">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="weight" class="input is-danger" type="text" placeholder="Enter Weight in Pounds">
  </div>
</div>
<button class="button is-info is-medium is-fullwidth">Set User Data</button>

 <div class="panel">
                <p class="panel-heading">
                    Daily Calories
                </p>
            </div>
 <div class="panel">
                <p class="panel-heading">
                    Remaining Calories  
                </p>
                
            </div>
    </div>
</template>

<script>
import { UserProfile } from "../models/User";


export default {

}
</script>