<template>
  <div>
    <form class="form-inline">
           <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
            </div>
           <div class="col">
          <nuxt-link to="/forms/createproject" > <button class=" btn btn-primary">Create Projects</button></nuxt-link>
           </div>
           </div>
        </form>
    </div>
</template>

<script>
    export default {
        layout: 'scrummasterlayout',
        methods:{
            createprojects(){
                
            }
        }
    }
</script>

<style>
.search {
  margin-left: 850px;
}
</style>