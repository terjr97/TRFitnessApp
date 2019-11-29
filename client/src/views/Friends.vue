<template>
  <div class="about">
<div class="columns">
  <div class="column">
<ul class="panel">
                <p class="panel-heading">
                    Friends
                </p>
                <li v-for="(p, i) in game.Players " :key="i" 
                    class="panel-block">
                </li>
            </ul>
  </div>
  <div class="column">
    Status
  </div>
</div>
  </div>
</template>
