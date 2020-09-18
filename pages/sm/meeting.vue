<template>
    <div>
    <form class="form-inline">
           <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
            </div>
           <div class="col">
            <nuxt-link to="/forms/meetingschedule"><button class=" btn btn-primary" >Schedule</button></nuxt-link>
           </div>
           </div>
        </form>
    </div>
</template>

<script>
    export default {
        layout: 'scrummasterlayout',
    }
</script>

<style>
.search{
    margin-left: 850px;
}

</style>