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

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" active-class="kind-of-active">
            More
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item">
                <router-link class="navbar-item" to="/report" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    Report an Issue
                </router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/user" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    User info
                </router-link>
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
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