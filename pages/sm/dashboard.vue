<template>
    <div>
    <form class="form-inline">
           <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
            </div>
           <div class="col">
            <button class=" btn btn-primary" ,v-on:click="createproject()">Create Projects</button>
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
.search{
    margin-left: 850px;
}

</style>