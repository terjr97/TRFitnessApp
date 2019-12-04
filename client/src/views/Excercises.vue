<template>
<div>
<div class="columns">
  <div class="column">
<div class="select is-rounded">
  <div class = "select is-danger">
  <select v-model="excercise">
    <option value = "0">Excercise Used  </option>
    <option value = "13">Running</option>
    <option value = "11">Walking</option>
    <option value = "9">Jogging</option>
    <option value = "10">Swimming</option>
    <option value = "4">Yoga</option>
    <option value = "3">Weight Lifting</option>
    <option value = "9">Cycling</option>
  </select>
</div>
</div>
  </div>
  <div class="column">
<div class="select is-rounded">
    <div class = "select is-info">
  <select v-model="time" >
    <option value = "0">Duration of Excercise</option>
    <option value = "5">5 minutes</option>
    <option value = "10">10 minutes</option>
    <option value = "15">15 minutes</option>
    <option value = "20">20 minutes</option>
    <option value = "30">30 minutes</option>
    <option value = "45">45 minutes</option>
    <option value = "60">60 minutes</option>
    <option value = "90">90 minutes</option>
    <option value = "120">120 minutes</option>
  </select>
  </div>
</div>
  </div>
  <div class="column">
  <div class="select is-rounded">
      <div class = "select is-primary">
  <select v-model="intensity">
    <option value = "0">Intensity of Excercise</option>
    <option value = "1">Low  Intensity</option>
    <option value = "1.2">Mid  Intensity</option>
    <option value = "1.4">High Intensity</option>
  </select>
</div>
</div>
  </div>
  </div>
      <button class="button is-info is-medium is-fullwidth">Click Here to add Excercises</button>
      <div>
      <li v-for="(c, i) in UserProfile.Excercises " :key="i" class="panel-block">
                    
                    {{c}}
                </li>
  </div>
  </div>
</template>

<script>
import { UserProfile } from "../models/User";

function cal(){
UserProfile.addexcercise(excercise,time,intensity);
}

export default {
   data: ()=> ({
        UserProfile: {},
    }),
}


</script>>