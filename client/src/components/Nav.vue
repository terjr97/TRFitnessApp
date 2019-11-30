<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link exact-active-class="active" class="navbar-item" to="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
        </router-link>

        <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

        <router-link exact-active-class="active" class="navbar-item" to="/excercises">
            <i class="fas fa-dumbbell fa-pull-left"></i>
              Excercises
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/calories">
           <i class="fas fa-carrot fa-pull-left"></i>
              Calories
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/user">
           <i class="fas fa-carrot fa-pull-left"></i>
              User
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/report">
           <i class="fas fa-carrot fa-pull-left"></i>
              Report an Issue
        </router-link>

            </div>
        </div>

        <div class="navbar-end">
        </div>
    </nav>

</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    .active {
        background-color: rgb(224, 188, 188);
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(224, 188, 188);
        font-weight: 100;
    }
</style>